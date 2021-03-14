const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // turn smart switch on by entity id
    rustplus.turnSmartSwitchOn(1234567, (message) => {

        // log result
        console.log("turnSmartSwitchOn result: " + JSON.stringify(message));

        // disconnect from rust server
        rustplus.disconnect();

    });
    
});

// connect to rust server
rustplus.connect();