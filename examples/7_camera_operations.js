const RustPlus = require('../rustplus.js');
const {read} = require("jimp");
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

rustplus.on('connected', () => {

    /**
     * We must first subscribe to the camera. Frame data works on a subscription basis,
     * where after subscription the server will send data to your client for around 10-15 seconds
     * where you must then re-subscribe.
     */
    rustplus.subscribeToCamera("DOME1", cameraData => {
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
                cameraRays.shift()
                // Render the image and then save it with jimp
                rustplus.renderCameraFrame(cameraRays, subData.width, subData.height, image => {
                    read(image, (err, image) => {
                        if (err) throw err
                        image.write("camera.png")
                    })
                })
            }
        })
    })

});

// connect to rust server
rustplus.connect();