# RustPlus API

This is an unofficial NodeJS library for controlling Smart Switches and various other things in the PC game [Rust](https://store.steampowered.com/app/252490/Rust/).

It communicates with the Rust Game Server via the WebSocket running on the port configured in your `server.cfg` as `app.port`.

You can find the port your server is using for the Rust+ App by typing `app.port` into the F1 console. I recommend you to set the port to something static in your `server.cfg` file and then make sure you have configured port forwarding on your router.

## Features

Below is a list of features that are implemented in this library.

- [x] Turn Smart Switch On
- [x] Turn Smart Switch Off
- [x] Send messages to Team Chat
- [x] Get Entity Info (Current state of Smart Switch / Smart Alarm)
- [ ] Get CCTV Camera Frames (Currently disabled by Facepunch)

There are other things that you can do, such as fetching an image of the map along with all of the player markers and player positions.

However, at the moment these aren't implemented in a helper method but you can still craft the requests manually like so:

```js
rustplus.sendRequest({
    getMap: {}
});
```

Have a look at the `AppRequest` message in the [rustplus.proto](./rustplus.proto) protobuf definition file for ideas on other requests you can send. 

## Example

### Connecting

The library will automatically connect to the server when you instantiate a `RustPlus` object. You will need to provide the following details to be able to connect:

- Server Hostname/IP
- Server App Port
- Player Id (Your Steam ID)
- Player Token (Token from Server Pairing)

```js
const RustPlus = require('./rustplus');
var rustplus = new RustPlus('hostname', 28183, 'steamid', 1234567890);
```

### Turn Smart Switch On/Off

You can turn a Smart Switch on or off by calling `turnSmartSwitchOn` or `turnSmartSwitchOff` with the entity id of the Smart Switch.

An optional callback function can be provided as the second parameter which will be called when a response has been received from the server for this specific request.

```js
rustplus.turnSmartSwitchOn(1234567, (message) => {
  console.log("turnSmartSwitchOn response message: " + JSON.stringify(message));
  return true;
});
```

### Send messages to Team Chat

```js
rustplus.sendTeamMessage('message to team chat');
```

### Get Entity Info

You can check the current status of a Smart Switch or Smart Alarm by calling `getEntityInfo` with the entity id.

```js
rustplus.getEntityInfo(1234567, (message) => {
  console.log("getEntityInfo response message: " + JSON.stringify(message));
  return true;
});
```

Note: Once you have called `getEntityInfo` at least once for an entity id, you will receive broadcast messages automatically from the Rust server when the entity's state changes between on and off. These broadcasts won't be sent until you do so.

### Entity Changed Broadcasts

Once you have called `getEntityInfo` at least once for an entity id, you can capture the broadcast messages when its state changes like so:

```js
rustplus.on('message', (message) => {
    if(message.broadcast && message.broadcast.entityChanged){

        var entityChanged = message.broadcast.entityChanged;
    
        var entityId = entityChanged.entityId;
        var value = entityChanged.payload.value;
        
        console.log("entity " + entityId + " is now " + (value ? "active" : "inactive"));

    }
});
```

## Handle Messages

A message is a payload of data sent to you from the Rust Server. This shouldn't be confused with Chat Messages.

When you send a request to the Rust Server, you can optionally provide a callback which will be invoked when a response is received from the server for that specific request.

If you return `true` from the callback, the response will be treated as handled.

When a message has been received and has not been handled by your callback, it will be emitted via the `message` event.

You can register a listener to catch all received messages like so:

```js
rustplus.on('message', (message) => {
    console.log("message received: " + JSON.stringify(message));
});
```

Here's a list of the emitted events:

- `connecting`: When we are connecting to the Rust Server.
- `connected`: When we are connected to the Rust Server.
- `disconnected`: When we are disconnected from the Rust Server.
- `error`: When something goes wrong.
- `message`: When an `AppMessage` has been received from the Rust Server.
- `request`: When an `AppRequest` has been sent to the Rust Server.

## Pairing

### How to Pair with Server

todo: document how to get player token

### How to Pair with Smart Alarm and Smart Switch

todo: document how to get entity id