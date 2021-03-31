const fs = require('fs');
const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // get a cctv camera frame
    rustplus.getCameraFrame("DOME1", 0, (message) => {

        /**
         * if you get `error: disabled`, then you need to run `cctvrender.enabled true` as a server admin.
         * if you get `error: not_found`, then the camera identifier you provided does not exist.
         * if you get `error: unavailable`, then no players are nearby to render the camera.
         */
        console.log(message);

        // make sure cctv camera frame was returned
        if(message.response.cameraFrame && message.response.cameraFrame.jpgImage){

            // save jpg image of cctv camera frame to file
            fs.writeFileSync('cctv_dome1.jpg', message.response.cameraFrame.jpgImage);

        }

        // disconnect from rust server
        rustplus.disconnect();

    });
    
});

// connect to rust server
rustplus.connect();