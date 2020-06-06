# Rust+ Pairing Flow

The procedure for pairing with a Rust Server and Smart Devices in the official Rust+ app is like so:

- Player installs Rust+ mobile app from Apple App Store or Google Play Store.
- Player logs in to Rust+ mobile app with Steam Account.
- Player gets redirected back to the Rust+ mobile app with a Steam OpenId Auth Token.
- Rust+ mobile app sends the `ExponentPushToken` ([expo app](https://expo.io/) notification token) for your device along with your Steam Auth Token to the `/api/push/register` endpoint of the Rust Companion API.
- Rust Companion API returns a refreshed Steam Auth Token which expires after 2 weeks.
- Player connects to Rust Server in game.
- Player goes to Rust+ menu in game.
- Player clicks "Pair with Server".
- Rust game server communicates with Rust Companion API with `serverToken` from `companion.id` file in Rust game server folder. (I haven't checked this, but assume that's how it works)
- Rust Companion API sends a notification to the registered device via the `ExponentPushToken`.
- The received Pairing Notification contains the Server Information required for the Rust+ app to connect to the WebSocket running on `app.port` configured in `server.cfg` while also authenticating as the Steam Account associated with the Steam OpenId token sent in previous steps.
- Player clicks "Pair" on "Smart Alarms" and "Smart Switches" in game.
- Rust game server communicates with Rust Companion API. (like above, I haven't checked this, but assume so)
- Rust Companion API sends another notification to the registered device.
- The received Pairing Notification contains the Entity Id and Entity Type (such as Smart Alarm or Smart Switch) as well as the Server Information you get from the normal Server Pairing process.
