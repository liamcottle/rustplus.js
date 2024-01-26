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

type sendReqType2<
  T extends (keyof sendRequestData)[],
  U extends (keyof Proto.AppResponse)[]
> = (
  data: Required<Pick<sendRequestData, T[number]>>,
  callback: (message: {
    response: Response<Pick<Proto.AppResponse, U[number]>>;
  }) => Promisable<void> | boolean // If returns true then don't fire message event
) => void;

type req_cameraInput = sendReqType<["cameraInput"], []>;
type req_cameraSubscribe = sendReqType<
  ["cameraSubscribe"],
  ["cameraSubscribeInfo"]
>;
type req_cameraUnsubscribe = sendReqType<["cameraUnsubscribe"], ["success"]>;
type req_checkSubscription = sendReqType<
  ["checkSubscription"],
  ["cameraSubscribeInfo"]
>;
type req_getClanChat = sendReqType<["getClanChat"], ["clanChat"]>;
type req_getClanInfo = sendReqType<["getClanInfo"], ["clanInfo"]>;
type req_getEntityInfo = sendReqType<
  ["getEntityInfo", "entityId"],
  ["entityInfo"]
>;
type req_getInfo = sendReqType<["getInfo"], ["info"]>;
type req_getMap = sendReqType<["getMap"], ["map"]>;
type req_getMapMarkers = sendReqType<["getMapMarkers"], ["mapMarkers"]>;
// todo getNexusAuth
type req_getTeamChat = sendReqType<["getTeamChat"], ["teamChat"]>;
type req_getTeamInfo = sendReqType<["getTeamInfo"], ["teamInfo"]>;
type req_getTime = sendReqType<["getTime"], ["time"]>;
type req_promoteToLeader = sendReqType<["promoteToLeader"], ["success"]>;
type req_sendClanMessage = sendReqType<["sendClanMessage"], ["success"]>;
type req_sendTeamMessage = sendReqType<["sendTeamMessage"], ["success"]>;
type req_setClanMotd = sendReqType<["setClanMotd"], ["success"]>;
type req_setEntityValue = sendReqType<
  ["setEntityValue", "entityId"],
  ["success"]
>;

// !
type req2_cameraInput = sendReqType2<["cameraInput"], []>;
type req2_cameraSubscribe = sendReqType2<
  ["cameraSubscribe"],
  ["cameraSubscribeInfo"]
>;
type req2_cameraUnsubscribe = sendReqType2<["cameraUnsubscribe"], ["success"]>;
type req2_checkSubscription = sendReqType2<
  ["checkSubscription"],
  ["cameraSubscribeInfo"]
>;
type req2_getClanChat = sendReqType2<["getClanChat"], ["clanChat"]>;
type req2_getClanInfo = sendReqType2<["getClanInfo"], ["clanInfo"]>;
type req2_getEntityInfo = sendReqType2<
  ["getEntityInfo", "entityId"],
  ["entityInfo"]
>;
type req2_getInfo = sendReqType2<["getInfo"], ["info"]>;
type req2_getMap = sendReqType2<["getMap"], ["map"]>;
type req2_getMapMarkers = sendReqType2<["getMapMarkers"], ["mapMarkers"]>;
// todo getNexusAuth
type req2_getTeamChat = sendReqType2<["getTeamChat"], ["teamChat"]>;
type req2_getTeamInfo = sendReqType2<["getTeamInfo"], ["teamInfo"]>;
type req2_getTime = sendReqType2<["getTime"], ["time"]>;
type req2_promoteToLeader = sendReqType2<["promoteToLeader"], ["success"]>;
type req2_sendClanMessage = sendReqType2<["sendClanMessage"], ["success"]>;
type req2_sendTeamMessage = sendReqType2<["sendTeamMessage"], ["success"]>;
type req2_setClanMotd = sendReqType2<["setClanMotd"], ["success"]>;
type req2_setEntityValue = sendReqType2<
  ["setEntityValue", "entityId"],
  ["success"]
>;

// todo setSubscription
// let thing2= {} as req_getClanInfo['response'];
// thing2!.error ? thing2.error : thing2.clanInfo.

interface allRequests {
  cameraInput: req_cameraInput;
  cameraSubscribe: req_cameraSubscribe;
  cameraUnsubscribe: req_cameraUnsubscribe;
  checkSubscription: req_checkSubscription;
  getClanChat: req_getClanChat;
  getClanInfo: req_getClanInfo;
  getEntityInfo: req_getEntityInfo;
  getInfo: req_getInfo;
  getMap: req_getMap;
  getMapMarkers: req_getMapMarkers;
  getTeamChat: req_getTeamChat;
  getTeamInfo: req_getTeamInfo;
  getTime: req_getTime;
  promoteToLeader: req_promoteToLeader;
  sendClanMessage: req_sendClanMessage;
  sendTeamMessage: req_sendTeamMessage;
  setClanMotd: req_setClanMotd;
  setEntityValue: req_setEntityValue;
}
type unionRequests =
  | req2_cameraInput
  | req2_cameraSubscribe
  | req2_cameraUnsubscribe
  | req2_checkSubscription
  | req2_getClanChat
  | req2_getClanInfo
  | req2_getEntityInfo
  | req2_getInfo
  | req2_getMap
  | req2_getMapMarkers
  | req2_getTeamChat
  | req2_getTeamInfo
  | req2_getTime
  | req2_promoteToLeader
  | req2_sendClanMessage
  | req2_sendTeamMessage
  | req2_setClanMotd
  | req2_setEntityValue;

type callbackFn = (message: {
  response: Response<allRequests[keyof allRequests]["response"]>;
}) => Promisable<void> | boolean;

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
      this.sendRequest<"setEntityValue">(
        { setEntityValue: { value: true }, entityId: 123 },
        (m) => {}
      );
      // send request
      this.sendRequest(data, (message) => {
        // cancel timeout
        clearTimeout(timeout);

        if (message.response.error) {
          // reject promise if server returns an AppError for this request
          reject(message.response.error);
        } else {
          // request was successful, resolve with message.response
          resolve(message.response);
        }
      });
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
