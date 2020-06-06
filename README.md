# RustPlus API

This is an unofficial NodeJS library for controlling Smart Switches and various other things in the PC game [Rust](https://store.steampowered.com/app/252490/Rust/).

It communicates with the Rust Game Server via the WebSocket running on the port configured in your `server.cfg` as `app.port`.

You can find the port your server is using for the Rust+ App by typing `app.port` into the F1 console. I recommend you to set the port to something static in your `server.cfg` file and then make sure you have configured port forwarding on your router.

## Install

```
npm install liamcottle/rustplus-api
```

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
- Player Token ([Token from Server Pairing](#pairing))

```js
const RustPlus = require('rustplus-api');
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

### Entity Changed Broadcasts

Once you have called `getEntityInfo` at least once for an entity id, you will receive broadcast messages automatically from the Rust server when the entity's state changes between on and off.

If you don't call `getEntityInfo` at least once, you will never receive the broadcast.

You can capture the broadcast like so:

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

In order to use this library, we need to get the Server Information to connect to the App WebSocket as well as get the Entity Ids of the Smart Alarms and Smart switches we want to interact with.

The way this works in the official Rust+ app is documented in the [Pairing Flow](docs/PairingFlow.md) document in the docs folder.

You can gather the required information in several ways.

### As a Rust Server Admin

- You already have access to your `Server IP` and `App Port` configured in your `server.cfg` file.
- You can find your `playerToken` in the sqlite3 database file `player.tokens.db` with the following command on a Linux server. `sqlite3 player.tokens.db "select * from data;" ".exit"`
- You will get output like so: `xxxxxxxxxxxxxxxxx|yyyyyyyyy`
- `xxxxxxxxxxxxxxxxx` is the `playerId` associated with `yyyyyyyyy` which is the `playerToken`. It can be a positive or negative integer.
- As an admin you can use the command `lookingat_debug` to show/hide the entity id of what you are currently looking at. I like to bind it to a key with `bind o lookingat_debug`.

### Using the Pair script via CLI

Clone this repo, install the dependencies and then run the script. You will be prompted to open a URL in your browser. This will take you to the Rust Companion site to log in with your Steam account.

```
git clone https://github.com/liamcottle/rustplus-api
cd rustplus-api
npm install
node pair.js
```

Example Output

```
liamcottle@Liams-MacBook-Pro rustplus-api % node pair.js
Registering with FCM
Fetching Expo Push Token
Received Expo Push Token: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
Please open the following URL in your browser to link your Steam Account with rustplus-api.
https://companion-rust.facepunch.com/login?returnUrl=http%3A%2F%2Flocalhost%3A3000%2Fcallback
Listening for FCM Notifications
Steam Account Connected.
Registering with Rust Companion API
Successfully registered with Rust Companion API.
When you Pair with Servers or Smart Devices in game, notifications will appear here.
{
  img: '',
  port: '28017',
  ip: 'your-server-ip',
  name: "your-server-name",
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  type: 'server',
  url: '',
  desc: 'your-server-description',
  playerId: 'your-steam-id',
  playerToken: 'your-player-token'
}
```
    