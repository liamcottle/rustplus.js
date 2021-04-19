# Rust Companion API

Base URL

- https://companion-rust.facepunch.com

## App Endpoints

These endpoints are used by the Rust+ Companion App.

- GET /api/avatar/{steamId}
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

- GET /api/server/register
- POST /api/server/refresh
- POST /api/push/send
