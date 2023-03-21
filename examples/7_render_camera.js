const RustPlus = require('@liamcottle/rustplus.js');
const fs = require("fs");
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

rustplus.on('connected', async () => {

    console.log("connected");

    // get a camera
    const camera = rustplus.getCamera("DOME1");

    // listen for events when a camera frame has been rendered, you will get a png image buffer
    camera.on('render', async (frame) => {

        console.log("on render");

        // save camera frame to disk
        fs.writeFileSync(`camera.png`, frame);

        // unsubscribe from camera to allow others to control it
        await camera.unsubscribe();

        // disconnect from server after a single render
        rustplus.disconnect();

    });

    // subscribe to camera
    await camera.subscribe();

});

// connect to rust server
rustplus.connect();