const RustPlus = require('../rustplus');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

rustplus.on('connected', async () => {

    console.log("connected");

    // get a camera (must support PTZ)
    const camera = rustplus.getCamera("PTZ1");

    // wait until subscribed to camera
    camera.on('subscribed', async () => {

        console.log("subscribed to camera");

        // zoom camera every 1 second, 8 times
        for(let i = 0; i < 8; i++){
            await camera.zoom();
            await delay(1000);
        }

        console.log("disconnecting");
        await rustplus.disconnect();

    });

    // subscribe to camera
    await camera.subscribe();

});

// connect to rust server
rustplus.connect();