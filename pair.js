const axios = require('axios');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { register, listen } = require('push-receiver');
const ChromeLauncher = require('chrome-launcher');
const path = require('path');

const app = express();
const port = 3000;
const server = app.listen(port);

var expoPushToken = null;
var authToken = null;

async function run() {

    console.log("Registering with FCM");
    const credentials = await register('976529667804');

    console.log("Fetching Expo Push Token");
    axios.post('https://exp.host/--/api/v2/push/getExpoPushToken', {
        deviceId: uuidv4(),
        experienceId: '@facepunch/RustCompanion',
        appId: 'com.facepunch.rust.companion',
        deviceToken: credentials.fcm.token,
        type: 'fcm',
        development: false,
    }).then(async (response) => {

        expoPushToken = response.data.data.expoPushToken;
        console.log("Received Expo Push Token: " + expoPushToken);

        // register pair web page
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname + '/pair.html'));
        });

        // register callback
        app.get('/callback', async (req, res) => {

            // we no longer need the Google Chrome instance
            await ChromeLauncher.killAll();

            // get token from callback
            authToken = req.query.token;

            if(authToken){

                console.log("Steam Account Connected.");
                res.send('Steam Account successfully linked with rustplus.js, you can now close this window and go back to the console.');

                // register with Rust Companion API
                console.log("Registering with Rust Companion API");
                axios.post('https://companion-rust.facepunch.com:443/api/push/register', {
                    AuthToken: authToken,
                    DeviceId: 'rustplus.js',
                    PushKind: 0,
                    PushToken: expoPushToken,
                }).then((response) => {
                    console.log("Successfully registered with Rust Companion API.");
                    console.log("When you Pair with Servers or Smart Devices in game, notifications will appear here.");
                }).catch((error) => {
                    console.log("Failed to register with Rust Companion API");
                    console.log(error);
                });

            } else {
                console.log("token missing from request!");
                res.send('token missing from request!');
            }

        });

        // tell user to login in Google Chrome
        console.log("Google Chrome is launching so you can link rustplus.js to Rust+");

        /**
         * FIXME: Google Chrome is launched with Web Security disabled.
         * This is bad, but it allows us to modify the window object of other domains, such as Rust+
         * By doing so, we can inject a custom ReactNativeWebView.postMessage handler to capture Rust+ auth data.
         *
         * Rust+ recently changed the login flow, which no longer sends auth data in the URL callback.
         * Auth data is now sent to a ReactNative.postMessage handler, which is available to the Rust+ app since
         * it is a ReactNative app.
         *
         * We don't have access to ReactNative, but we can emulate the behaviour by registering our own window objects.
         * However, to do so we need to disable Web Security to be able to manipulate the window of other origins.
         */
        await ChromeLauncher.launch({
            startingUrl: `http://localhost:${port}`,
            chromeFlags: [
                '--disable-web-security', // allows us to manipulate rust+ window
                '--disable-popup-blocking', // allows us to open rust+ login from our main window
                '--disable-site-isolation-trials', // required for --disable-web-security to work
                '--user-data-dir=/tmp/temporary-chrome-profile-dir-rustplus', // create a new chrome profile for pair.js
            ],
            handleSIGINT: false, // handled manually in shutdown
        }).then(chrome => {
            console.log("Continue the pairing process in Google Chrome.");
        }).catch((error) => {
            console.log(error);
            console.log("pair.js failed to launch Google Chrome. Do you have it installed?");
            process.exit(0);
        });

        console.log("Listening for FCM Notifications");
        await listen(credentials, ({ notification, persistentId }) => {

            // parse notification body
            const body = JSON.parse(notification.data.body);

            // log notification body
            console.log(body);

        });

    }).catch((error) => {
        console.log("Failed to fetch Expo Push Token");
        console.log(error);
    });

}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

async function shutdown() {

    // close chrome instances launched by pair.js
    await ChromeLauncher.killAll();

    // unregister with Rust Companion API
    if(authToken && expoPushToken){
        console.log("Unregistering from Rust Companion API");
        await axios.delete('https://companion-rust.facepunch.com:443/api/push/unregister', {
            data: {
                AuthToken: authToken,
                PushToken: expoPushToken,
                DeviceId: 'rustplus.js',
            },
        }).then((response) => {
            console.log("Successfully unregistered from Rust Companion API");
        }).catch((error) => {
            console.log(error);
        });
    }

    // stop http server
    server.close(() => {
        process.exit(0);
    });

}

run();

