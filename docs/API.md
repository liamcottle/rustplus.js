# Rust Companion API

Base URL

- https://companion-rust.facepunch.com

## App Endpoints

These endpoints are used by the Rust+ Companion App.

### `/api/avatar/{steamId}`

- Method: `GET`

Redirects to the Profile Image for the SteamId.

- POST /api/push/register
- DELETE /api/push/unregister
- POST /api/subscriptions/app/add
- POST /api/subscriptions/app/remove
- POST /api/subscriptions/app/check
- POST /api/channel/enable
- POST /api/channel/disable
- POST /api/channel/check

## Server Endpoints

These endpoints are used by the Rust Server.

### `/api/server/register`

- Method: `GET`

Registers a new Rust server with the Rust+ Companion API. This is called when the Rust server is initialized and has not registered, or refreshing the existing server token fails.

### `/api/server/refresh`

- Method: `POST`
- Headers:
    - `Content-Type`: `text/plain`
- Body: `Existing Server Token`

Refreshes an existing server token.

### `/api/push/send`

- Method: `POST`
- Headers:
    - `Content-Type`: `application/json`
- JSON Body:
    - `ServerToken` (string)
    - `SteamIds` (list of unsigned longs)
    - `Channel` (int)
      - `Pairing=1001`
      - `PlayerLoggedIn=1002`
      - `PlayerDied=1003`
      - `SmartAlarm=1004`
    - `Title` (string)
    - `Body` (string)
    - `Data` (dictionary<string, string>)

Sends a push notification to the Rust+ Companion App.
