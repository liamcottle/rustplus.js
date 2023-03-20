const RustPlus = require('../rustplus.js');
const {read} = require("jimp");
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

rustplus.on('connected', () => {

    /**
     * We must first subscribe to the camera. Frame data works on a subscription basis,
     * where after subscription the server will send data to your client for around 10-15 seconds
     * where you must then re-subscribe.
     */
    rustplus.subscribeToCamera("A_PTZ_CAMERA", cameraData => {
        if (!cameraData.cameraSubscribeInfo) return;
        const subData = cameraData.response.cameraSubscribeInfo;

        let cameraRays = [];

        // Listen for broadcasts containing the camera rays
        rustplus.on("message", broadcast => {
            if (broadcast.broadcast && broadcast.broadcast.cameraRays) {
                // This means it was a rays message.
                cameraRays.push(broadcast.broadcast.cameraRays);
            }

            // Wait until we have 5 Broadcasts to build an Image:
            if (cameraRays.length >= 5) {
                // Remove the first rayData
                cameraRays.shift();
                // Render the image and then save it with jimp
                rustplus.renderCameraFrame(cameraRays, subData.width, subData.height, image => {
                    read(image, (err, image) => {
                        if (err) throw err;
                        image.write("camera.png");
                    });
                });
            }
        });

        // Lets check that we have the ability to zoom the camera:
        // This can be done with a bitwise AND operation and checking it is equal to the constant
        if ((subData.controlFlags & RustPlus.CameraMovementOptions.FIRE) === RustPlus.CameraMovementOptions.FIRE) {
            // This means this flag is enabled. Now we are going to send a zoom command every 5 seconds
            setInterval(() => {
                // Use a bitwise OR on all the operations you need. The 0 is for demonstration only
                const buttons = 0 | RustPlus.MovementInputControls.FIRE_PRIMARY;
                rustplus.sendCameraMovement(buttons, 0, 0);
                // Once the input is sent, you must then "clear" the movement. If you imagine clicking down
                // And then releasing the button
                rustplus.sendCameraMovement(0, 0, 0);
            }, 5000);
        }

        // Resubscribe to the camera every 10 seconds
        setInterval(() => {
            rustplus.subscribeToCamera("A_PTZ_CAMERA");
        }, 10_000);
    });

});

// connect to rust server
rustplus.connect();