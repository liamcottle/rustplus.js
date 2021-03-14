const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // send message to team chat
    rustplus.sendTeamMessage('Hello from rustplus.js!');

    // disconnect from rust server
    rustplus.disconnect();

});

// connect to rust server
rustplus.connect();