"use strict";

const { EventEmitter } = require("events");
const Jimp = require("jimp");

class Camera extends EventEmitter {

    /**
     * These represent the possible buttons that can be sent to the server.
     */
    static Buttons = {
        NONE: 0,
        FORWARD: 2,
        BACKWARD: 4,
        LEFT: 8,
        RIGHT: 16,
        JUMP: 32,
        DUCK: 64,
        SPRINT: 128,
        USE: 256,
        FIRE_PRIMARY: 1024,
        FIRE_SECONDARY: 2048,
        RELOAD: 8192,
        FIRE_THIRD: 134217728,
    }

    /**
     * These represent the possible control flags that can be sent to the server.
     * For example, Static CCTV cameras will not support movement.
     */
    static ControlFlags = {
        NONE: 0,
        MOVEMENT: 1,
        MOUSE: 2,
        SPRINT_AND_DUCK: 4,
        FIRE: 8,
        RELOAD: 16,
        CROSSHAIR: 32,
    }

    /**
     * @param rustplus An existing RustPlus instance
     * @param identifier Camera Identifier, such as OILRIG1 (or custom name)
     *
     * Events emitted by the Camera class instance
     * - subscribing: When we are subscribing to the Camera.
     * - subscribed: When we are subscribed to the Camera.
     * - unsubscribing: When we are unsubscribing from the Camera.
     * - unsubscribed: When we are unsubscribed from the Camera.
     * - render: When a camera frame has been rendered. A png image buffer will be provided.
     */
    constructor(rustplus, identifier) {

        super();

        this.rustplus = rustplus;
        this.identifier = identifier;
        this.isSubscribed = false;

        this.cameraRays = [];
        this.cameraSubscribeInfo = null;
        this.subscribeInterval = null;

        // listen to camera message broadcasts
        this.rustplus.on('message', async (message) => {
            await this._onMessage(message);
        });

        // unsubscribe when rustplus is disconnected (to prevent hanging due to intervals still running)
        this.rustplus.on('disconnected', async () => {
            if(this.isSubscribed){
                await this.unsubscribe();
            }
        });

    }

    async _onMessage(message) {

        // do nothing if not subscribed
        if(!this.isSubscribed){
            return;
        }

        if(message.broadcast && message.broadcast.cameraRays){
            await this._onCameraRays(message.broadcast.cameraRays);
        }

    }

    async _onCameraRays(cameraRays) {

        // do nothing if not subscribed
        if(!this.isSubscribed){
            return;
        }

        // add new camera rays to cache
        this.cameraRays.push(cameraRays);

        // wait until we have enough camera rays to render an image
        if(this.cameraRays.length > 10){

            // remove first oldest rayData
            this.cameraRays.shift();

            // render to png
            const frame = await this._renderCameraFrame(this.cameraRays, this.cameraSubscribeInfo.width, this.cameraSubscribeInfo.height);

            // fire callback
            await this._onRender(frame);

        }

    }

    async _onRender(image) {

        // do nothing if not subscribed
        if(!this.isSubscribed){
            return;
        }

        this.emit('render', image);

    }

    /**
     * Render a camera frame to a PNG image buffer
     * @param frames the frame data to render. This will be an array of camera rays from the server.
     * @param width the width of the frame
     * @param height the height of the frame
     */
    async _renderCameraFrame(frames, width, height) {

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
        ];

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

        // return png buffer
        return image.getBufferAsync(Jimp.MIME_PNG);

    }

    async _subscribe() {

        // subscribe to camera
        const response = await this.rustplus.sendRequestAsync({
            cameraSubscribe: {
                cameraId: this.identifier,
            },
        });

        // update camera subscribe info
        this.cameraSubscribeInfo = response.cameraSubscribeInfo;
        this.isSubscribed = true;

    }

    async subscribe() {

        this.emit('subscribing');

        // subscribe to camera
        await this._subscribe();

        this.emit('subscribed');

        // automatically resubscribe to the camera every 10 seconds
        this.subscribeInterval = setInterval(async () => {
            if(this.isSubscribed){
                await this._subscribe();
            }
        }, 10_000);

    }

    async unsubscribe() {

        this.emit('unsubscribing');

        this.isSubscribed = false;

        // stop automatically resubscribing
        clearInterval(this.subscribeInterval);

        // release memory
        this.cameraRays = [];
        this.cameraSubscribeInfo = null;
        this.subscribeInterval = null;

        // unsubscribe from camera on server (if connected)
        if(this.rustplus.isConnected()){
            try {
                await this.rustplus.sendRequestAsync({
                    cameraUnsubscribe: {

                    },
                });
            } catch (error) {
                // ignore errors unsubscribing from camera
            }
        }

        this.emit('unsubscribed');

    }

    /**
     * Sends camera movement to the server (mouse movement)
     * @param buttons The buttons that are currently pressed
     * @param x The x delta of the mouse movement
     * @param y The y delta of the mouse movement
     */
    async move(buttons, x, y) {
        return await this.rustplus.sendRequestAsync({
            cameraInput: {
                buttons: buttons,
                mouseDelta: {
                    x: x,
                    y: y,
                }
            },
        });
    }

    /**
     * Zooms a PTZ camera in by 1 level.
     * PTZ cameras have 4 zoom levels.
     * If the PTZ camera is already at max zoom (level 4), it zooms out as far as it can (level 1).
     */
    async zoom() {

        // press left mouse button to zoom in
        await this.move(Camera.Buttons.FIRE_PRIMARY, 0, 0);

        // release all mouse buttons
        await this.move(Camera.Buttons.NONE, 0, 0);

    }

    /**
     * Shoots a PTZ controllable Auto Turret.
     */
    async shoot() {

        // press left mouse button to shoot
        await this.move(Camera.Buttons.FIRE_PRIMARY, 0, 0);

        // release all mouse buttons
        await this.move(Camera.Buttons.NONE, 0, 0);

    }

    /**
     * Reloads a PTZ controllable Auto Turret
     */
    async reload() {

        // press reload button to reload turret
        await this.move(Camera.Buttons.RELOAD, 0, 0);

        // release all mouse buttons
        await this.move(Camera.Buttons.NONE, 0, 0);

    }

    /**
     * Check if camera is an auto turret
     * @returns {boolean}
     */
    isAutoTurret() {
        const crosshairControlFlag = Camera.ControlFlags.CROSSHAIR;
        return (this.cameraSubscribeInfo?.controlFlags & crosshairControlFlag) === crosshairControlFlag;
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

module.exports = Camera;