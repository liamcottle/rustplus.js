<p align="center">
<img src="./rustplus.js.svg" width="400"></a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@liamcottle/rustplus.js"><img src="https://img.shields.io/npm/dt/@liamcottle/rustplus.js" alt="npm"/></a>
<a href="https://discord.com/channels/@me"><img src="https://img.shields.io/badge/Discord-Liam%20Cottle%230001-%237289DA?style=flat&logo=discord" alt="discord"/></a>
<a href="https://twitter.com/liamcottle"><img src="https://img.shields.io/badge/Twitter-@liamcottle-%231DA1F2?style=flat&logo=twitter" alt="twitter"/></a>
<br/>
<a href="https://ko-fi.com/liamcottle"><img src="https://img.shields.io/badge/Donate%20a%20Coffee-liamcottle-yellow?style=flat&logo=buy-me-a-coffee" alt="donate on ko-fi"/></a>
<a href="bitcoin:3FPBfiEwioWHFix3kZqe5bdU9F5o8mG8dh"><img src="https://img.shields.io/badge/Donate%20Bitcoin-3FPBfiEwioWHFix3kZqe5bdU9F5o8mG8dh-%23FF9900?style=flat&logo=bitcoin" alt="donate bitcoin"/></a>
</p>

This is an **unofficial** NodeJS library for interacting with Smart Switches, Smart Alarms and various other things in the PC game [Rust](https://store.steampowered.com/app/252490/Rust/).

It communicates with the [Rust Game Server](https://developer.valvesoftware.com/wiki/Rust_Dedicated_Server) via the WebSocket running on the port configured in your `server.cfg` as `app.port`.

The server owner needs to make sure their `app.port` has been configured and opened in their firewall.

## Install

To use this library in your own NodeJS app, you can install it via `npm`.

```
npm install @liamcottle/rustplus.js
```

## Features

Below is a list of features that are implemented in this library with helper methods. Examples of these are available in the [Examples](#examples) section.

- [x] Turn Smart Switch On
- [x] Turn Smart Switch Off
- [x] Send messages to Team Chat
- [x] Get Entity Info (Current state of Smart Switch / Smart Alarm)
- [x] Get CCTV Camera Frames (Currently disabled in the Rust+ app by Facepunch)

The CCTV Camera Frames are currently disabled in the Rust+ app and on the server by default, but you can enable it if you are a server admin by running the following command in the F1 console.

```
cctvrender.enabled true
```

Note: This will not enable CCTV in the Rust+ app, but will send jpeg packets back to you through the websocket.

Here is the full list of requests that you can send. These are from the `AppRequest` message in the [rustplus.proto](./rustplus.proto) protobuf file that I wrote by hand.

- `getInfo`
- `getTime`
- `getMap`
- `getTeamInfo`
- `sendTeamMessage`
- `getEntityInfo`
- `setEntityValue`
- `checkSubscription`
- `setSubscription`
- `getMapMarkers`
- `getCameraFrame`

At the moment, most of these aren't implemented in a helper method but you can still craft the requests manually. Have a look in the protobuf file to know what data you need to send.

```js
// Get the Server Info
rustplus.sendRequest({
    getInfo: {}
}, (message) => {
    console.log(message);
});
```

```js
// Get the Map
rustplus.sendRequest({
    getMap: {}
}, (message) => {
    console.log(message);
});
```

```js
// Send Team Message
rustplus.sendRequest({
    sendTeamMessage: {
        message: "Message for Team Chat",
    },
}, (message) => {
    console.log(message);
});
```

## Examples

### Connecting

The library will automatically connect to the server when you instantiate a `RustPlus` object. You will need to provide the following details to be able to connect:

- Server IP (or hostname)
- Server App Port
- Player Id (Your Steam ID)
- Player Token ([Token from Server Pairing](#pairing))

```js
const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('hostname', 28183, 'steamid', 1234567890);

// wait until connected before sending commands
rustplus.on('connected', () => {

    // ready to send requests
    rustplus.sendTeamMessage('Hello from rustplus.js!');

});
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

You need to be in a team before you can send messages to team chat.

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

#### Storage Monitor

The Storage Monitor that was recently added to Rust sends Entity Changed Broadcasts when items are added and removed from the Storage Container that the Storage Monitor is associated with.

You will receive two broadcasts for the Storage Monitor, one with the `entityChanged.payload.value` set to `true` and the second with the `entityChanged.payload.value` set to `false`. When using the official Rust+ app you'll see the storage monitor entity change to green, then back to grey.

You can use the following snippet as an idea of how to listen for changes to a Storage Monitor and print out the current items in it.

As above, make sure to call `getEntityInfo` with the Storage Monitor entity id so you are sent the broadcasts by the server.

```js
rustplus.on('message', (message) => {
    if(message.broadcast && message.broadcast.entityChanged){

        var entityChanged = message.broadcast.entityChanged;
    
        var entityId = entityChanged.entityId;
        var value = entityChanged.payload.value;
        var capacity = entityChanged.payload.capacity;
        var items = entityChanged.payload.items;
        
        // only print info when second broadcast is received
        if(!value){

            console.log(`entity ${entityId} has a capacity of ${capacity}`);
            console.log(`entity ${entityId} contains ${items.length} item(s)`);
            
            // print out the items in this storage entity
            items.forEach((item) => {
                console.log(item);
            });

        }

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

You can gather the required information in a couple of ways.

### As a Rust Server Admin

If you just want to interact with your own private server for testing, you won't need to utilize the Rust Companion API server as you can already access all of the information you need from the server itself.

- You already have access to your `Server IP` and `App Port` configured in your `server.cfg` file.
- You can find your `playerToken` in the sqlite3 database file `player.tokens.db` with the following command on a Linux server. `sqlite3 player.tokens.db "select * from data;" ".exit"`
- You will get output like so: `xxxxxxxxxxxxxxxxx|yyyyyyyyy`
    - `xxxxxxxxxxxxxxxxx` is the `playerId`
    - `yyyyyyyyy` is the `playerToken`. (It can be a positive or negative integer.)
- As an admin you can use the command `lookingat_debug` to show/hide the entity id of what you are currently looking at. I like to bind it to a key with `bind o lookingat_debug`.

### Using the CLI Pair Tool

I have put together a CLI tool which will do everything required to receive notifications from the Rust Companion API when you click the "Pair" buttons in game.

To use it, clone this repo, install the dependencies and then run the `pair.js` cli tool. You will be prompted to open a URL in your browser. This will take you to the Rust Companion website to log in with your Steam account.

Once your Steam Account is connected with the Rust Companion API server, you will receive pairing notifications in the console.

```
git clone https://github.com/liamcottle/rustplus.js
cd rustplus.js
npm install
node pair.js
```

Example Output

```
liamcottle@Liams-MacBook-Pro rustplus.js % node pair.js
Registering with FCM
Fetching Expo Push Token
Received Expo Push Token: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
Please open the following URL in your browser to link your Steam Account with rustplus.js.
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

## Hey Facepunch!

If you want this project taken down, feel free to message me! However this project only allows you to automate the same actions you can already do in the official Rust+ app.

I'm looking forward to seeing all of the projects the Rust community come up with! Some ideas I came up with, but haven't had a chance to build yet are:

- Discord Bot
    - Sync Team Chat in-game and on Discord.
    - Send messages to Discord when Smart Alarms are triggered.
    - Send messages to Discord when Cargo, Heli or Crate events spawn on the map.
    - Controlling Smart Devices via Discord messages.
- Vending Machine Search Tool
    - Find a specific item for sale on the map.
    - Statistics on what items are commonly sold, and for what prices.