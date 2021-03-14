const fs = require('fs');
const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // get the map
    rustplus.getMap((message) => {

        // save jpg image of map to file
        fs.writeFileSync('map.jpg', message.response.map.jpgImage);

        // disconnect from rust server
        rustplus.disconnect();

    });
    
});

// connect to rust server
rustplus.connect();