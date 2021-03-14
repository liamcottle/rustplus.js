const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // turn smart switch off by entity id
    rustplus.turnSmartSwitchOff(1234567, (message) => {

        // log result
        console.log("turnSmartSwitchOff result: " + JSON.stringify(message));

        // disconnect from rust server
        rustplus.disconnect();

    });
    
});

// connect to rust server
rustplus.connect();