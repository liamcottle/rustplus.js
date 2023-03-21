const RustPlus = require('../rustplus');
const Camera = require('../camera');
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

        // move camera up 10 times
        for(let i = 0; i < 10; i++){
            await camera.move(Camera.Buttons.NONE, 0, 1);
            await delay(100);
        }

        // move camera down 10 times
        for(let i = 0; i < 10; i++){
            await camera.move(Camera.Buttons.NONE, 0, -1);
            await delay(100);
        }

        // move camera left 10 times
        for(let i = 0; i < 10; i++){
            await camera.move(Camera.Buttons.NONE, -1, 0);
            await delay(100);
        }

        // move camera right 10 times
        for(let i = 0; i < 10; i++){
            await camera.move(Camera.Buttons.NONE, 1, 0);
            await delay(100);
        }

        console.log("disconnecting");
        await rustplus.disconnect();

    });

    // subscribe to camera
    await camera.subscribe();

});

// connect to rust server
rustplus.connect();