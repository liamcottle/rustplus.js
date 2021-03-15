const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    /**
     * sendRequestAsync will return a promise for your request.
     * you can optionally pass in a second parameter for the timeout in milliseconds
     * - AppResponse packets will be sent to `then` on success.
     * - AppError packets and Timeout Errors will be sent to `catch`.
     */
    rustplus.sendRequestAsync({
        getInfo: {}, // get server info with a timeout of 2 seconds
    }, 2000).then((response) => {

        // AppResponse
        console.log(response);

    }).catch((error) => {

        // AppError or Error('Timeout');
        console.log(error);

    }).finally(() => {

        // disconnect so our script is finished
        rustplus.disconnect();

    });
    
});

// connect to rust server
rustplus.connect();