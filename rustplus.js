"use strict";

const path = require('path');
const WebSocket = require('ws');
const protobuf = require("protobufjs");
const { EventEmitter } = require('events');
const Jimp = require('jimp');


class RustPlus extends EventEmitter {

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
    constructor(server, port, playerId, playerToken, useFacepunchProxy = false) {

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
        protobuf.load(path.resolve(__dirname, "rustplus.proto")).then((root) => {

            // make sure existing connection is disconnected before connecting again.
            if(this.websocket){
                this.disconnect();
            }

            // load proto types
            this.AppRequest = root.lookupType("rustplus.AppRequest");
            this.AppMessage = root.lookupType("rustplus.AppMessage");

            // fire event as we are connecting
            this.emit('connecting');

            // connect to websocket
            var address = this.useFacepunchProxy ? `wss://companion-rust.facepunch.com/game/${this.server}/${this.port}` : `ws://${this.server}:${this.port}`;
            this.websocket = new WebSocket(address);

            // fire event when connected
            this.websocket.on('open', () => {
                this.emit('connected');
            });

            // fire event for websocket errors
            this.websocket.on('error', (e) => {
                this.emit('error', e);
            });

            this.websocket.on('message', (data) => {

                // decode received message
                var message = this.AppMessage.decode(data);

                // check if received message is a response and if we have a callback registered for it
                if(message.response && message.response.seq && this.seqCallbacks[message.response.seq]){

                    // get the callback for the response sequence
                    var callback = this.seqCallbacks[message.response.seq];

                    // call the callback with the response message
                    var result = callback(message);

                    // remove the callback
                    delete this.seqCallbacks[message.response.seq];

                    // if callback returns true, don't fire message event
                    if(result){
                        return;
                    }

                }

                // fire message event for received messages that aren't handled by callback
                this.emit('message', this.AppMessage.decode(data));

            });

            // fire event when disconnected
            this.websocket.on('close', () => {
                this.emit('disconnected');
            });

        });

    }

    /**
     * Disconnect from the Rust Server.
     */
    disconnect() {
        if(this.websocket){
            this.websocket.terminate();
            this.websocket = null;
        }
    }

    /**
     * Send a Request to the Rust Server with an optional callback when a Response is received.
     * @param data this should contain valid data for the AppRequest packet in the rustplus.proto schema file
     * @param callback
     */
    sendRequest(data, callback) {

        // increment sequence number
        let currentSeq = ++this.seq;

        // save callback if provided
        if(callback){
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
        this.emit('request', request);

    }

    /**
     * Send a Request to the Rust Server and return a Promise
     * @param data this should contain valid data for the AppRequest packet defined in the rustplus.proto schema file
     * @param timeoutMilliseconds milliseconds before the promise will be rejected. Defaults to 10 seconds.
     */
    sendRequestAsync(data, timeoutMilliseconds = 10000) {
        return new Promise((resolve, reject) => {

            // reject promise after timeout
            var timeout = setTimeout(() => {
                reject(new Error('Timeout reached while waiting for response'));
            }, timeoutMilliseconds);

            // send request
            this.sendRequest(data, (message) => {

                // cancel timeout
                clearTimeout(timeout);

                if(message.response.error){

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
    setEntityValue(entityId, value, callback) {
        this.sendRequest({
            entityId: entityId,
            setEntityValue: {
                value: value,
            },
        }, callback);
    }

    /**
     * Turn a Smart Switch On
     * @param entityId the entity id of the smart switch to turn on
     * @param callback
     */
    turnSmartSwitchOn(entityId, callback) {
        this.setEntityValue(entityId, true, callback);
    }

    /**
     * Turn a Smart Switch Off
     * @param entityId the entity id of the smart switch to turn off
     * @param callback
     */
    turnSmartSwitchOff(entityId, callback) {
        this.setEntityValue(entityId, false, callback);
    }

    /**
     * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
     * You will get rate limited by the Rust Server after a short period.
     * It was interesting to watch in game though 😝
     */
    strobe(entityId, timeoutMilliseconds = 100, value = true) {
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
    sendTeamMessage(message, callback) {
        this.sendRequest({
            sendTeamMessage: {
                message: message,
            },
        }, callback);
    }

    /**
     * Get info for an Entity
     * @param entityId the id of the entity to get info of
     * @param callback
     */
    getEntityInfo(entityId, callback) {
        this.sendRequest({
            entityId: entityId,
            getEntityInfo: {

            },
        }, callback);
    }

    /**
     * Get the Map
     */
    getMap(callback) {
        this.sendRequest({
            getMap: {

            },
        }, callback);
    }
    
    /**
     * Get the ingame time
    */
    getTime(callback) {
        this.sendRequest({
            getTime: {

            },
        }, callback);
    }

    /**
     * Get all map markers
     */
    getMapMarkers(callback) {
        this.sendRequest({
            getMapMarkers: {

            },
        }, callback);
    }

    /**
     * Get the server info
     */
    getInfo(callback) {
        this.sendRequest({
            getInfo: {

            },
        }, callback);
    }

    /**
     * Get team info
     */
    getTeamInfo(callback) {
        this.sendRequest({
            getTeamInfo: {

            },
        }, callback);
    }

    /**
     * Get CCTV Camera frame
     * @param identifier CCTV Camera Identifier, such as OILRIG1 (or custom name)
     * @param callback
     */
    subscribeToCamera(identifier, callback) {
        this.sendRequest({
            cameraSubscribe: {
                cameraId: identifier,
            },
        }, callback);
    }

    /**
     * Unsubscribes from a CCTV Camera
     * @param identifier CCTV Camera Identifier
     * @param callback
     */
    unsubscribeFromCamera(identifier, callback) {
        this.sendRequest({
            cameraUnsubscribe: {

            }
        }, callback)
    }

    /**
     * Sends camera movement to the server (mouse movement)
     * @param buttons The buttons that are currently pressed
     * @param x The x delta of the mouse movement
     * @param y The y delta of the mouse movement
     * @param callback
     */
    sendCameraMovement(buttons, x, y, callback) {
        this.sendRequest({
            cameraInput: {
                buttons: buttons,
                mouseDelta: {
                    x: x,
                    y: y,
                }
            },
        }, callback);
    }

    /**
     * Render a camera frame to a PNG image buffer
     * @param frames the frame data to render. This will be an iterable of camera rays from the server.
     * @param width the width of the frame
     * @param height the height of the frame
     * @param callback the callback to call with the rendered image buffer
     */
    renderCameraFrame(frames, width, height, callback) {

        // First we populate the samplePositionBuffer with the positions of each sample
        const samplePositionBuffer = new Int16Array(width * height * 2);
        for (let w = 0, _ = 0; _ < height; _++)
            for (let g = 0; g < width; g++) {
                samplePositionBuffer[w] = g;
                samplePositionBuffer[++w] = _;
                w++;
            }

        for (let B = new IndexGenerator(1337), R = width * height - 1; R >= 1; R--) {
            let C = 2 * R,
                I = 2 * B.nextInt(R + 1),
                P = samplePositionBuffer[C],
                k = samplePositionBuffer[C + 1],
                A = samplePositionBuffer[I],
                F = samplePositionBuffer[I + 1];
            samplePositionBuffer[I] = P;
            samplePositionBuffer[I + 1] = k;
            samplePositionBuffer[C] = A;
            samplePositionBuffer[C + 1] = F;
        }

        // Create the output buffer
        const output = new Array(width * height);
        // Loop through each frame
        for (let frame of frames) {

            // Reset some look back and pointer variables
            let sampleOffset = 2 * frame.sampleOffset;
            let dataPointer = 0;
            let rayLookback = new Array(64);
            for (let r = 0; r < 64; r++) rayLookback[r] = [0, 0, 0];

            const rayData = frame.rayData;

            // Loop through the ray data
            while (true) {
                if (dataPointer >= rayData.length - 1)
                    break;

                // Get the first byte and set some variables
                let t, r, i, n = rayData[dataPointer++];

                // Ray Decoding Logic
                if (255 === n) {
                    let l = rayData[dataPointer++],
                        o = rayData[dataPointer++],
                        s = rayData[dataPointer++],
                        u = (3 * (((t = (l << 2) | (o >> 6)) / 128) | 0) + 5 * (((r = 63 & o) / 16) | 0) + 7 * (i = s)) & 63,
                        f = rayLookback[u];
                    f[0] = t;
                    f[1] = r;
                    f[2] = i;
                } else {
                    let c = 192 & n;

                    if (0 === c) {
                        let h = 63 & n, y = rayLookback[h];
                        t = y[0];
                        r = y[1];
                        i = y[2];
                    } else if (64 === c) {
                        let p = 63 & n,
                            v = rayLookback[p],
                            b = v[0],
                            w = v[1],
                            _ = v[2],
                            g = rayData[dataPointer++];
                        t = b + ((g >> 3) - 15);
                        r = w + ((7 & g) - 3);
                        i = _;
                    } else if (128 === c) {
                        let R = 63 & n,
                            C = rayLookback[R],
                            I = C[0],
                            P = C[1],
                            k = C[2];
                        t = I + (rayData[dataPointer++] - 127);
                        r = P;
                        i = k;
                    } else {
                        let A = rayData[dataPointer++],
                            F = rayData[dataPointer++],
                            D = (3 * (((t = (A << 2) | (F >> 6)) / 128) | 0) + 5 * (((r = 63 & F) / 16) | 0) + 7 * (i = 63 & n)) & 63,
                            E = rayLookback[D];
                        E[0] = t;
                        E[1] = r;
                        E[2] = i;
                    }
                }

                sampleOffset %= 2 * width * height;
                const index = samplePositionBuffer[sampleOffset++] + samplePositionBuffer[sampleOffset++] * width;
                output[index] = [t / 1023, r / 63, i];
            }
        }

        const colours = [
            [0.5, 0.5, 0.5], [0.8, 0.7, 0.7], [0.3, 0.7, 1], [0.6, 0.6, 0.6],
            [0.7, 0.7, 0.7], [0.8, 0.6, 0.4], [1, 0.4, 0.4], [1, 0.1, 0.1],
        ]

        const image = new Jimp(width, height);

        for (let i = 0; i < output.length; i++) {
            let ray = output[i];
            if (!ray) {
                continue;
            }

            let distance = ray[0]
            let alignment = ray[1]
            let material = ray[2]

            let target_colour;

            if (distance === 1 && alignment === 0 && material === 0) {
                target_colour = [208, 230, 252];
            } else {
                let colour = colours[material];
                target_colour = [(alignment * colour[0] * 255), (alignment * colour[1] * 255), (alignment * colour[2] * 255)]
            }

            let x = i % width;
            let y = height - 1 - Math.floor(i / width);
            image.setPixelColor(Jimp.rgbaToInt(target_colour[0], target_colour[1], target_colour[2], 255), x, y);
        }

        image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err)
                console.log(err);
            callback(buffer)
        });
    }

    /**
     * These represent the possible inputs that can be sent to the server.
     */
    static MovementInputControls = {

        FORWARD : 2,
        BACKWARD : 4,
        LEFT : 8,
        RIGHT : 16,
        JUMP : 32,
        DUCK : 64,
        SPRINT : 128,
        USE : 256,
        FIRE_PRIMARY : 1024,
        FIRE_SECONDARY : 2048,
        RELOAD : 8192,
        FIRE_THIRD : 134217728,
    }

    /**
     * These represent the possible camera movement options that can be sent to the server.
     * For example, Static CCTV cameras will not have any movement options.
     */
    static CameraMovementOptions = {
        NONE : 0,
        MOVEMENT : 1,
        MOUSE : 2,
        SPRINT_AND_DUCK : 4,
        FIRE : 8,
        RELOAD : 16,
        CROSSHAIR : 32,
    }

}

class IndexGenerator {
    constructor(e) {
        this.state = 0 | e;
        this.nextState();
    }

    nextInt(e) {
        let t = ((this.nextState() * (0 | e)) / 4294967295) | 0;
        if (t < 0) t = e + t - 1;
        return 0 | t;
    }

    nextState() {
        let e = this.state, t = e;
        e = ((e = ((e = (e ^ ((e << 13) | 0)) | 0) ^ ((e >>> 17) | 0)) | 0) ^ ((e << 5) | 0)) | 0;
        this.state = e;
        return t >= 0 ? t : 4294967295 + t - 1;
    }
}

module.exports = RustPlus;
