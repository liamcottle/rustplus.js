<p align="center">
<img src="./rustplus.js.svg" width="400"></a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@liamcottle/rustplus.js"><img src="https://img.shields.io/npm/dt/@liamcottle/rustplus.js" alt="npm"/></a>
<a href="https://discord.gg/APQSQZNV7t"><img src="https://img.shields.io/badge/Discord-Liam%20Cottle's%20Discord-%237289DA?style=flat&logo=discord" alt="discord"/></a>
<a href="https://twitter.com/liamcottle"><img src="https://img.shields.io/badge/Twitter-@liamcottle-%231DA1F2?style=flat&logo=twitter" alt="twitter"/></a>
<br/>
<a href="https://ko-fi.com/liamcottle"><img src="https://img.shields.io/badge/Donate%20a%20Coffee-liamcottle-yellow?style=flat&logo=buy-me-a-coffee" alt="donate on ko-fi"/></a>
<a href="./donate.md"><img src="https://img.shields.io/badge/Donate%20Bitcoin-3FPBfiEwioWHFix3kZqe5bdU9F5o8mG8dh-%23FF9900?style=flat&logo=bitcoin" alt="donate bitcoin"/></a>
</p>

This is an **unofficial** NodeJS library for interacting with Smart Switches, Smart Alarms and various other things in the PC game [Rust](https://store.steampowered.com/app/252490/Rust/).

It communicates with the [Rust Game Server](https://developer.valvesoftware.com/wiki/Rust_Dedicated_Server) via the WebSocket running on the port configured in your `server.cfg` as `app.port`.

The server owner needs to make sure their `app.port` has been configured and opened in their firewall.

Also, feel free to check out my new rust project [Atlas](https://github.com/liamcottle/atlas-for-rust). It's an interactive map experience for Rust.

## Install

To use this library in your own NodeJS app, you can install it via `npm`.

```
npm install @liamcottle/rustplus.js
```

## Features

Below is a list of convenience methods that are implemented for common requests in the RustPlus library. Examples of these can be found in the [examples](#examples) section.

- `turnSmartSwitchOn` Turn Smart Switch on
- `turnSmartSwitchOff` Turn Smart Switch off
- `sendTeamMessage` Send messages to Team Chat
- `getEntityInfo` Get current state of a Smart Device
- `setEntityValue` Set the value of a Smart Device
- `getInfo` Get info about the Rust Server
- `getMap` Fetch map info, which inclues a jpeg image
- `getTime` Get the current in game time
- `getMapMarkers` Get map markers, such as vending machines and cargo/heli
- `getTeamInfo` Get list of team members and positions on map

More requests are available and can be found in the `AppRequest` message section of the [rustplus.proto](./rustplus.proto) protobuf file that I wrote by hand.

For requests that aren't available through a convenience method, you can still craft and send the requests manually with `sendRequest`, as shown below. Have a look in the protobuf file to know what data you need to send.

```js
// Send Team Message without using convenience method
rustplus.sendRequest({
    sendTeamMessage: {
        message: "Message for Team Chat",
    },
}, (message) => {
    console.log(message);
});
```

If you want a promise based API for sending requests, you can use `sendRequestAsync`. You won't be able to use the convenience methods, but it's very straightforward to craft the request payloads manually. Check [this example](./examples/6_async_requests.js) for using `sendRequestAsync`.

## Examples

More code examples can be found in the [examples](./examples) directory.

### Connecting

You will need to provide the following details to be able to connect:

- Server IP (or hostname)
- App Port (`app.port` in `server.cfg`)
- Player Id (Your Steam ID)
- Player Token ([Token from Server Pairing](#pairing))

```js
const RustPlus = require('@liamcottle/rustplus.js');
var rustplus = new RustPlus('ip', 'port', 'playerId', 'playerToken');

// wait until connected before sending commands
rustplus.on('connected', () => {

    // ready to send requests
    rustplus.sendTeamMessage('Hello from rustplus.js!');

});

// connect to rust server
rustplus.connect();
```

> Note: You now need to call `connect` manually after creating a `RustPlus` instance. The library no longer automatically connects.

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

Note that broadcasts are sent without player interaction only if tool cupboard changes to decaying state. Resources removed from a decay tick does not send a broadcast.

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

## CCTV Camera Frames

Check the [examples](./examples) on how to render and control CCTV Cameras, PTZ Cameras, Auto Turrets and Drones.

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

### Using the Command Line Tool

I have put together a command line tool which will do everything required to receive Pairing Notifications from the Rust Companion API when you click the "Pair" buttons in game.

Before you can listen for Pairing Notifications, you need to register with FCM, Expo and link your Steam Account with Rust+. Conveniently, you can do this by running the following command.

```
npx @liamcottle/rustplus.js fcm-register
```

A custom Google Chrome browser will be launched. This will take you to the Rust Companion website to log in with your Steam account.

> Note: You must have Google Chrome installed to use `fcm-register`

After successfully registering, you can listen for Pairing Notifications

```
npx @liamcottle/rustplus.js fcm-listen
```

Example Output

```
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

The command line tool allows you to set a custom config file for saving and loading your credentials. This is helpful if you want to register on your local pc, and copy the config to another server.

```
npx @liamcottle/rustplus.js --config-file=/path/to/config.json <command>
```

If you want to run the latest changes to the CLI tool, you can run it like so:

```
git clone https://github.com/liamcottle/rustplus.js
cd rustplus.js
npm install
node cli/index.js <command>
```

## Connection Limits

The Rust game server enforces a limit on how many connections can be made to the Rust+ websocket, and how many connections can be made by the same IP Address at once.

- Max Connections: `500` is default
    - Can be adjusted with server var `app.maxconnections`
- Max Connections per IP: `5` is default
    - Can be adjusted with server var `app.maxconnectionsperip`

## Rate Limits

The Rust game server enforces rate limits on requests sent to the Rust+ websocket. This is done with a [token bucket](https://en.wikipedia.org/wiki/Token_bucket) approach.

The token bucket gives you a maximum amount of tokens, and replenishes them over time at a fixed rate.

Here is a list of the rate limits enforced by the Rust game server:

- Requests per IP Address
    - `50 tokens limit, 15 tokens replenished per second.`
- Requests per Player ID
    - `25 tokens limit, 3 tokens replenished per second.`
- Requests for Server Pairing
    - `5 tokens limit, 0.1 tokens replenished per second.`
    
Rate limits can be found in the `CompanionServer.Listener` class in `Assembly-CSharp.dll` from the game server files.

Below is the token cost per request type:

```
Default: 1
--
CheckSubscription: 1
EntityInfo: 1
Info: 1
Map: 5
MapMarkers: 1
PromoteToLeader: 1
SendTeamChat: 2
SetEntityValue: 1
SetSubscription: 1
TeamInfo: 1
Time: 1
Camera Subscription: 1
Camera Movement: 0.01
```

## Hey Facepunch!

If you want this project taken down, feel free to message me! However this project only allows you to automate the same actions you can already do in the official Rust+ app.

I'm looking forward to seeing all of the projects the Rust community come up with! Here are some ideas I came up with:

- Discord Bot
    - Sync Team Chat in-game and on Discord.
    - Send messages to Discord when Smart Alarms are triggered.
    - Send messages to Discord when Cargo, Heli or Crate events spawn on the map.
    - Controlling Smart Devices via Discord messages.
- [Vending Machine Search Tool](https://github.com/liamcottle/atlas-for-rust)
    - Find a specific item for sale on the map
    - Statistics on what items are commonly sold, and for what prices.
