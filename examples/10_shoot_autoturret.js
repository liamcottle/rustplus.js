const RustPlus = require('../rustplus');
const Camera = require("../camera");
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

rustplus.on('connected', async () => {

    console.log("connected");

    // get a camera (should be an autoturret for this example)
    const turret = rustplus.getCamera("TURRET1");

    // wait until subscribed to autoturret camera
    turret.on('subscribed', async () => {

        // check if camera is an auto turret
        if(!turret.isAutoTurret()){
            console.log("Camera is not an auto turret!");
            await rustplus.disconnect();
            return;
        }

        console.log("subscribed to autoturret camera");
        await delay(500);

        const shootCount = 3;
        const shootDelay = 250;
        const moveDelay = 500;
        const moveAmount = 5;

        // shoot autoturret
        console.log("shooting");
        for(let i = 0; i < shootCount; i++){
            await delay(shootDelay);
            await turret.shoot();
        }

        // move autoturret left
        console.log("moving left");
        await delay(moveDelay);
        await turret.move(Camera.Buttons.NONE, -moveAmount, 0);

        // shoot autoturret
        console.log("shooting");
        for(let i = 0; i < shootCount; i++){
            await delay(shootDelay);
            await turret.shoot();
        }

        // move autoturret up
        console.log("moving up");
        await delay(moveDelay);
        await turret.move(Camera.Buttons.NONE, 0, moveAmount);

        // shoot autoturret
        console.log("shooting");
        for(let i = 0; i < shootCount; i++){
            await delay(shootDelay);
            await turret.shoot();
        }

        // move autoturret right
        console.log("moving right");
        await delay(moveDelay);
        await turret.move(Camera.Buttons.NONE, moveAmount, 0);

        // shoot autoturret
        console.log("shooting");
        for(let i = 0; i < shootCount; i++){
            await delay(shootDelay);
            await turret.shoot();
        }

        // move autoturret down
        console.log("moving down");
        await delay(moveDelay);
        await turret.move(Camera.Buttons.NONE, 0, -moveAmount);

        // shoot autoturret
        console.log("shooting");
        for(let i = 0; i < shootCount; i++){
            await delay(shootDelay);
            await turret.shoot();
        }

        console.log("disconnecting");
        await rustplus.disconnect();

    });

    // subscribe to autoturret camera
    await turret.subscribe();

});

// connect to rust server
rustplus.connect();