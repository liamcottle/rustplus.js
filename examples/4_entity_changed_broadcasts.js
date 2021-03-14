const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    /**
     * getting an entities info will cause the rust server
     * to send an entity changed broadcast each time the
     * entities state changes.
     */
    rustplus.getEntityInfo(1234567, (message) => {

        /**
         * you can of course see the current entity state in this callback
         * as a 'one off' check. But broadcasts will still be sent.
         */
        console.log("getEntityInfo result: " + JSON.stringify(message));

        /**
         * we won't disconnect from the rust server in this example
         * as we want to receive broadcasts in the message handler below.
         */
        // rustplus.disconnect();

    });
    
});

// listen for messages from rust server
rustplus.on('message', (message) => {

    // check if message is an entity changed broadcast
    if(message.broadcast && message.broadcast.entityChanged){

        /**
         * since we called getEntityInfo, this message handler will be triggered
         * when the entity state has changed. for example, when a smart alarm is triggered,
         * a smart switch is toggled or a storage monitor has updated.
         */

        var entityChanged = message.broadcast.entityChanged;

        // log the broadcast
        console.log(message.broadcast);

        var entityId = entityChanged.entityId;
        var value = entityChanged.payload.value;

        // log the entity status
        console.log("entity " + entityId + " is now " + (value ? "active" : "inactive"));

    }

});

// connect to rust server
rustplus.connect();