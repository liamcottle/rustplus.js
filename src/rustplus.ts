"use strict";

import { EventEmitter } from "events";
import path from "path";
import protobuf from "protobufjs";
import { Promisable, RequireAtLeastOne, SetRequired } from "type-fest";
import WebSocket from "ws";

import Camera from "./camera";
import * as Proto from "./proto";

declare module "./proto" {
  interface AppEmpty extends Record<string, never> {}
}

type Response<T> = { seq: Proto.AppResponse["seq"] } & (
  | ({ error: undefined } & SetRequired<T, keyof T>)
  | { error: Proto.AppError }
);

// Seq, playerId, and playerToken are never needed because they are assigned in sendRequest
type sendRequestData = RequireAtLeastOne<
  Omit<Proto.AppRequest, "seq" | "playerId" | "playerToken">
>;
/* 
    T is an array of keys of sendRequestData e.g. ["getTime"] works because getTime is a key of AppRequest

    U is an array of keys of Proto.AppResponse e.g. ["time"] works because time is a key of AppResponse

    T, U must not be empty arrays

    Required<Pick<sendRequestData, T[number]>>:
    - Pick<sendRequestData, T[number]> gets the types from the keys in T (e.g. 'getTime' => getTime: AppEmpty)
    - Required<Pick<sendRequestData, T[number]>> makes all the keys in T required (e.g. getTime | undefined becomes getTime)

    Pick<Proto.AppResponse, U[number]>:
    - Pick<Proto.AppResponse, U[number]> gets the types from the keys in U (e.g. 'time' => time: AppTime)
    - Response<Pick<Proto.AppResponse, U[number]>> The server either returns with success: boolean and error: AppError | undefined, error seems to be tied to success false, so we represent this as a union. We also remove the undefined property from the data returned at this stage. 

*/
type sendReqType<
  T extends (keyof sendRequestData)[],
  U extends (keyof Proto.AppResponse)[]
> = {
  data: Required<Pick<sendRequestData, T[number]>>;
  response: Response<Pick<Proto.AppResponse, U[number]>>;
  callback: (message: {
    response: Response<Pick<Proto.AppResponse, U[number]>>;
  }) => Promisable<void> | boolean; // If returns true then don't fire message event
};

interface allRequests {
  cameraInput: sendReqType<["cameraInput"], ["success"]>; // todo manually verify, currently based on server source code
  cameraSubscribe: sendReqType<["cameraSubscribe"], ["cameraSubscribeInfo"]>;
  cameraUnsubscribe: sendReqType<["cameraUnsubscribe"], ["success"]>;
  checkSubscription: sendReqType<
  ["checkSubscription"],
  ["cameraSubscribeInfo"]
>;
  getClanChat: sendReqType<["getClanChat"], ["clanChat"]>;
  getClanInfo: sendReqType<["getClanInfo"], ["clanInfo"]>;
  getEntityInfo: sendReqType<["getEntityInfo", "entityId"], ["entityInfo"]>;
  // getNexusAuth: sendReqType<["getNexusAuth"],[]> // todo getNexusAuth
  getInfo: sendReqType<["getInfo"], ["info"]>;
  getMap: sendReqType<["getMap"], ["map"]>;
  getMapMarkers: sendReqType<["getMapMarkers"], ["mapMarkers"]>;
  getTeamChat: sendReqType<["getTeamChat"], ["teamChat"]>;
  getTeamInfo: sendReqType<["getTeamInfo"], ["teamInfo"]>;
  getTime: sendReqType<["getTime"], ["time"]>;
  promoteToLeader: sendReqType<["promoteToLeader"], ["success"]>;
  sendClanMessage: sendReqType<["sendClanMessage"], ["success"]>;
  sendTeamMessage: sendReqType<["sendTeamMessage"], ["success"]>;
  setClanMotd: sendReqType<["setClanMotd"], ["success"]>;
  setEntityValue: sendReqType<["setEntityValue", "entityId"], ["success"]>;
  setSubscription: sendReqType<["setSubscription", "entityId"], ["success"]>; // todo manually verify
}

type sendRequestReturnType = Promisable<void> | boolean;

type callbackFn = (message: {
  response: Response<allRequests[keyof allRequests]["response"]>;
}) => sendRequestReturnType;

export class RustPlus extends EventEmitter {
  seq: number;
  seqCallbacks: callbackFn[];

  server: string;
  port: string;
  playerId: string;
  playerToken: string;
  useFacepunchProxy: boolean;
  websocket:
    | WebSocket
    | null
    | undefined; /* Defined on first connection, null on disconnect */
  AppRequest: protobuf.Type | undefined; /* Defined on first connection */
  AppMessage: protobuf.Type | undefined; /* Defined on first connection */

  /**
   * @param server The ip address or hostname of the Rust Server
   * @param port The port of the Rust Server (app.port in server.cfg)
   * @param playerId SteamId of the Player
   * @param playerToken Player Token from Server Pairing
   * @param useFacepunchProxy True to use secure websocket via Facepunch's proxy, or false to directly connect to Rust Server
   *
   * Events emitted by the RustPlus class instance
   * - connecting: When we are connecting to the Rust Server.
   * - connected: When we are connected to the Rust Server.
   * - message: When an AppMessage has been received from the Rust Server.
   * - request: When an AppRequest has been sent to the Rust Server.
   * - disconnected: When we are disconnected from the Rust Server.
   * - error: When something goes wrong.
   */
  constructor(
    server: string,
    port: string,
    playerId: string,
    playerToken: string,
    useFacepunchProxy: boolean = false
  ) {
    super();

    this.server = server;
    this.port = port;
    this.playerId = playerId;
    this.playerToken = playerToken;
    this.useFacepunchProxy = useFacepunchProxy;

    this.seq = 0;
    this.seqCallbacks = [];
  }

  /**
   * This sets everything up and then connects to the Rust Server via WebSocket.
   */
  connect() {
    // load protobuf then connect
    protobuf
      .load(path.resolve(__dirname, "..", "rustplus.proto"))
      .then((root) => {
        // make sure existing connection is disconnected before connecting again.
        if (this.websocket) {
          this.disconnect();
        }

        // load proto types
        this.AppRequest = root.lookupType("rustplus.AppRequest");
        this.AppMessage = root.lookupType("rustplus.AppMessage");

        // fire event as we are connecting
        this.emit("connecting");

        // connect to websocket
        var address = this.useFacepunchProxy
          ? `wss://companion-rust.facepunch.com/game/${this.server}/${this.port}`
          : `ws://${this.server}:${this.port}`;
        this.websocket = new WebSocket(address);

        // fire event when connected
        this.websocket.on("open", () => {
          this.emit("connected");
        });

        // fire event for websocket errors
        this.websocket.on("error", (e: any) => {
          this.emit("error", e);
        });

        this.websocket.on("message", (data: Uint8Array | protobuf.Reader) => {
          if (!this.AppMessage) return;

          // decode received message
          var message = this.AppMessage.decode(data) as unknown as {
            response: Response<allRequests[keyof allRequests]["response"]>;
          };

          // check if received message is a response and if we have a callback registered for it
          if (
            message.response &&
            message.response.seq &&
            this.seqCallbacks[message.response.seq]
          ) {
            // get the callback for the response sequence
            var callback = this.seqCallbacks[message.response.seq];

            // call the callback with the response message
            var result = callback(message);

            // remove the callback
            delete this.seqCallbacks[message.response.seq];

            // ! If callback is a promise, this will run anyways
            // if callback returns true, don't fire message event
            if (result) {
              return;
            }
          }

          // fire message event for received messages that aren't handled by callback
          this.emit("message", this.AppMessage.decode(data));
        });

        // fire event when disconnected
        this.websocket.on("close", () => {
          this.emit("disconnected");
        });
      });
  }

  /**
   * Disconnect from the Rust Server.
   */
  disconnect() {
    if (this.websocket) {
      this.websocket.terminate();
      this.websocket = null;
    }
  }

  /**
   * Check if RustPlus is connected to the server.
   * @returns {boolean}
   */
  isConnected(): boolean {
    return this.websocket != null;
  }

  sendRequest(
    data: allRequests["cameraInput"]["data"],
    callback?: allRequests["cameraInput"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["cameraSubscribe"]["data"],
    callback?: allRequests["cameraSubscribe"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["cameraUnsubscribe"]["data"],
    callback?: allRequests["cameraUnsubscribe"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["checkSubscription"]["data"],
    callback?: allRequests["checkSubscription"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getClanChat"]["data"],
    callback?: allRequests["getClanChat"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getClanInfo"]["data"],
    callback?: allRequests["getClanInfo"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getEntityInfo"]["data"],
    callback?: allRequests["getEntityInfo"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getInfo"]["data"],
    callback?: allRequests["getInfo"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getMap"]["data"],
    callback?: allRequests["getMap"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getMapMarkers"]["data"],
    callback?: allRequests["getMapMarkers"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getTeamChat"]["data"],
    callback?: allRequests["getTeamChat"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getTeamInfo"]["data"],
    callback?: allRequests["getTeamInfo"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["getTime"]["data"],
    callback?: allRequests["getTime"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["promoteToLeader"]["data"],
    callback?: allRequests["promoteToLeader"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["sendClanMessage"]["data"],
    callback?: allRequests["sendClanMessage"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["sendTeamMessage"]["data"],
    callback?: allRequests["sendTeamMessage"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["setClanMotd"]["data"],
    callback?: allRequests["setClanMotd"]["callback"]
  ): sendRequestReturnType;
  sendRequest(
    data: allRequests["setEntityValue"]["data"],
    callback?: allRequests["setEntityValue"]["callback"]
  ): sendRequestReturnType;
  /**
   * Send a Request to the Rust Server with an optional callback when a Response is received.
   * @param data this should contain valid data for the AppRequest packet in th"..",e rustplus.proto schema file
   * @param callback
   */
  sendRequest<T extends keyof allRequests>(
    data: allRequests[T]["data"],
    callback?: (message: {
      response: allRequests[T]["response"];
    }) => Promisable<void> | boolean
  ) {
    if (!this.AppRequest || !this.websocket) return;

    // increment sequence number
    let currentSeq = ++this.seq;

    // save callback if provided
    if (callback) {
      this.seqCallbacks[currentSeq] = callback;
    }

    // create protobuf from AppRequest packet
    let request = this.AppRequest.fromObject({
      seq: currentSeq,
      playerId: this.playerId,
      playerToken: this.playerToken,
      ...data, // merge in provided data for AppRequest
    });

    // send AppRequest packet to rust server
    this.websocket.send(this.AppRequest.encode(request).finish());

    // fire event when request has been sent, this is useful for logging
    this.emit("request", request);
  }

  sendRequestAsync(
    data: allRequests["cameraInput"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["cameraInput"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["cameraSubscribe"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["cameraSubscribe"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["cameraUnsubscribe"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["cameraUnsubscribe"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["checkSubscription"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["checkSubscription"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getClanChat"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getClanChat"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getClanInfo"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getClanInfo"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getEntityInfo"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getEntityInfo"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getInfo"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getInfo"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getMap"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getMap"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getMapMarkers"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getMapMarkers"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getTeamChat"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getTeamChat"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getTeamInfo"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getTeamInfo"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["getTime"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["getTime"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["promoteToLeader"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["promoteToLeader"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["sendClanMessage"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["sendClanMessage"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["sendTeamMessage"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["sendTeamMessage"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["setClanMotd"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["setClanMotd"]["callback"]>[0]>;
  sendRequestAsync(
    data: allRequests["setEntityValue"]["data"],
    timeoutMilliseconds?: number
  ): Promise<Parameters<allRequests["setEntityValue"]["callback"]>[0]>;
  /**
   * Send a Request to the Rust Server and return a Promise
   * @param data this should contain valid data for the AppRequest packet defined in th"..",e rustplus.proto schema file
   * @param timeoutMilliseconds milliseconds before the promise will be rejected. Defaults to 10 seconds.
   */
  sendRequestAsync<T extends keyof allRequests>(
    data: allRequests[T]["data"],
    timeoutMilliseconds = 10000
  ): Promise<Parameters<allRequests[T]["callback"]>[0]["response"]> {
    return new Promise((resolve, reject) => {
      // reject promise after timeout
      var timeout = setTimeout(() => {
        reject(new Error("Timeout reached while waiting for response"));
      }, timeoutMilliseconds);

      // send request
      this.sendRequest(
        data as Parameters<typeof this.sendRequest>[0],
        (message) => {
        // cancel timeout
        clearTimeout(timeout);

        if (message.response.error) {
          // reject promise if server returns an AppError for this request
          reject(message.response.error);
        } else {
          // request was successful, resolve with message.response
          resolve(message.response);
        }
        }
      );
    });
  }

  /**
   * Send a Request to the Rust Server to set the Entity Value.
   * @param entityId the entity id to set the value for
   * @param value the value to set on the entity
   * @param callback
   */
  setEntityValue(entityId: number, value: boolean, callback?: callbackFn) {
    this.sendRequest(
      {
        entityId: entityId,
        setEntityValue: {
          value: value,
        },
      },
      callback
    );
  }

  /**
   * Turn a Smart Switch On
   * @param entityId the entity id of the smart switch to turn on
   * @param callback
   */
  turnSmartSwitchOn(entityId: number, callback?: callbackFn) {
    this.setEntityValue(entityId, true, callback);
  }

  /**
   * Turn a Smart Switch Off
   * @param entityId the entity id of the smart switch to turn off
   * @param callback
   */
  turnSmartSwitchOff(entityId: number, callback?: callbackFn) {
    this.setEntityValue(entityId, false, callback);
  }

  /**
   * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
   * You will get rate limited by the Rust Server after a short period.
   * It was interesting to watch in game though 😝
   */
  strobe(entityId: number, timeoutMilliseconds = 100, value = true) {
    this.setEntityValue(entityId, value);
    setTimeout(() => {
      this.strobe(entityId, timeoutMilliseconds, !value);
    }, timeoutMilliseconds);
  }

  /**
   * Send a message to Team Chat
   * @param message the message to send to team chat
   * @param callback
   */
  sendTeamMessage(message: string, callback?: callbackFn) {
    this.sendRequest(
      {
        sendTeamMessage: {
          message: message,
        },
      },
      callback
    );
  }

  /**
   * Get info for an Entity
   * @param entityId the id of the entity to get info of
   * @param callback
   */
  getEntityInfo(entityId: any, callback?: callbackFn) {
    this.sendRequest(
      {
        entityId: entityId,
        getEntityInfo: {},
      },
      callback
    );
  }

  /**
   * Get the Map
   */
  getMap(callback?: callbackFn) {
    this.sendRequest(
      {
        getMap: {},
      },
      callback
    );
  }

  /**
   * Get the in-game time
   */
  getTime(callback?: callbackFn) {
    this.sendRequest(
      {
        getTime: {},
      },
      callback
    );
  }

  /**
   * Get all map markers
   */
  getMapMarkers(callback?: callbackFn) {
    this.sendRequest(
      {
        getMapMarkers: {},
      },
      callback
    );
  }

  /**
   * Get the server info
   */
  getInfo(callback: callbackFn) {
    this.sendRequest(
      {
        getInfo: {},
      },
      callback
    );
  }

  /**
   * Get team info
   */
  getTeamInfo(callback?: callbackFn) {
    this.sendRequest(
      {
        getTeamInfo: {},
      },
      callback
    );
  }

  /**
   * Subscribes to a Camera
   * @param identifier Camera Identifier, such as OILRIG1 (or custom name)
   * @param callback
   */
  subscribeToCamera(identifier: string, callback?: callbackFn) {
    this.sendRequest(
      {
        cameraSubscribe: {
          cameraId: identifier,
        },
      },
      callback
    );
  }

  /**
   * Unsubscribes from a Camera
   * @param callback
   */
  unsubscribeFromCamera(callback?: callbackFn) {
    this.sendRequest(
      {
        cameraUnsubscribe: {},
      },
      callback
    );
  }

  /**
   * Sends camera input to the server (mouse movement)
   * @param buttons The buttons that are currently pressed
   * @param x The x delta of the mouse movement
   * @param y The y delta of the mouse movement
   * @param callback
   */
  sendCameraInput(
    buttons: number,
    x: number,
    y: number,
    callback?: callbackFn
  ) {
    this.sendRequest(
      {
        cameraInput: {
          buttons: buttons,
          mouseDelta: {
            x: x,
            y: y,
          },
        },
      },
      callback
    );
  }

  /**
   * Get a camera instance for controlling CCTV Cameras, PTZ Cameras and  Auto Turrets
   * @param identifier Camera Identifier, such as DOME1, OILRIG1L1, (or a custom camera id)
   * @returns {Camera}
   */
  getCamera(identifier: string) {
    return new Camera(this, identifier);
  }
}
