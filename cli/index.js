#!/usr/bin/env node

const axios = require('axios');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const ChromeLauncher = require('chrome-launcher');
const path = require('path');
const fs = require('fs');
const AndroidFCM = require('@liamcottle/push-receiver/src/android/fcm');
const PushReceiverClient = require("@liamcottle/push-receiver/src/client");

let server;
let fcmClient;

/**
 * Get the path to the config file defined in command line options,
 * or fallback to default config file in current directory.
 */
function getConfigFile(options) {
    return options['config-file'] || path.join(process.cwd(), 'rustplus.config.json');
}

/**
 * Reads config file, or returns empty config on error
 */
function readConfig(configFile) {
    try {
        return JSON.parse(fs.readFileSync(configFile));
    } catch (err) {
        return {};
    }
}

/**
 * Merges new config into existing config and saves to config file
 * @param configFile
 * @param config
 */
function updateConfig(configFile, config) {
    // get current config
    const currentConfig = readConfig(configFile);

    // merge config into current config
    const updatedConfig = {...currentConfig, ...config};

    // convert to pretty json
    const json = JSON.stringify(updatedConfig, null, 2);

    // save updated config to config file
    fs.writeFileSync(configFile, json, "utf8");
}

async function getExpoPushToken(fcmToken) {
    const response = await axios.post('https://exp.host/--/api/v2/push/getExpoPushToken', {
        type: 'fcm',
        deviceId: uuidv4(),
        development: false,
        appId: 'com.facepunch.rust.companion',
        deviceToken: fcmToken,
        projectId: "49451aca-a822-41e6-ad59-955718d0ff9c",
    });
    return response.data.data.expoPushToken;
}

async function registerWithRustPlus(authToken, expoPushToken) {
    return axios.post('https://companion-rust.facepunch.com:443/api/push/register', {
        AuthToken: authToken,
        DeviceId: 'rustplus.js',
        PushKind: 3,
        PushToken: expoPushToken,
    })
}

async function linkSteamWithRustPlus() {
    return new Promise((resolve, reject) => {
        const app = express();

        // register pair web page
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname + '/pair.html'));
        });

        // register callback
        app.get('/callback', async (req, res) => {
            // we no longer need the Google Chrome instance
            await ChromeLauncher.killAll();

            // get token from callback
            const authToken = req.query.token;
            if (authToken) {
                res.send('Steam Account successfully linked with rustplus.js, you can now close this window and go back to the console.');
                resolve(authToken)
            } else {
                res.status(400).send('Token missing from request!');
                reject(new Error('Token missing from request!'))
            }

            // we no longer need the express web server
            server.close()
        });

        /**
         * Start the express server before Google Chrome is launched.
         * If the port is updated, make sure to also update it in pair.html
         */
        const port = 3000;
        server = app.listen(port, async () => {
            /**
             * FIXME: Google Chrome is launched with Web Security disabled.
             * This is bad, but it allows us to modify the window object of other domains, such as Rust+
             * By doing so, we can inject a custom ReactNativeWebView.postMessage handler to capture Rust+ auth data.
             *
             * Rust+ recently changed the login flow, which no longer sends auth data in the URL callback.
             * Auth data is now sent to a ReactNativeWebView.postMessage handler, which is available to the Rust+ app since
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
            }).catch((error) => {
                console.log(error);
                console.log("pair.js failed to launch Google Chrome. Do you have it installed?");
                process.exit(1);
            });
        });
    });
}

var expoPushToken = null;
var rustplusAuthToken = null;

async function fcmRegister(options) {
    console.log("Registering with FCM");
    const apiKey = "AIzaSyB5y2y-Tzqb4-I4Qnlsh_9naYv_TD8pCvY";
    const projectId = "rust-companion-app";
    const gcmSenderId = "976529667804";
    const gmsAppId = "1:976529667804:android:d6f1ddeb4403b338fea619";
    const androidPackageName = "com.facepunch.rust.companion";
    const androidPackageCert = "E28D05345FB78A7A1A63D70F4A302DBF426CA5AD";
    const fcmCredentials = await AndroidFCM.register(apiKey, projectId, gcmSenderId, gmsAppId, androidPackageName, androidPackageCert);

    console.log("Fetching Expo Push Token");
    expoPushToken = await getExpoPushToken(fcmCredentials.fcm.token).catch((error) => {
        console.log("Failed to fetch Expo Push Token");
        console.log(error);
        process.exit(1);
    });

    // show expo push token to user
    console.log("Successfully fetched Expo Push Token");
    console.log("Expo Push Token: " + expoPushToken);

    // tell user to link steam with rust+ through Google Chrome
    console.log("Google Chrome is launching so you can link your Steam account with Rust+");
    rustplusAuthToken = await linkSteamWithRustPlus();

    // show rust+ auth token to user
    console.log("Successfully linked Steam account with Rust+");
    console.log("Rust+ AuthToken: " + rustplusAuthToken);

    console.log("Registering with Rust Companion API");
    await registerWithRustPlus(rustplusAuthToken, expoPushToken).catch((error) => {
        console.log("Failed to register with Rust Companion API");
        console.log(error);
        process.exit(1);
    });
    console.log("Successfully registered with Rust Companion API.");

    // save to config
    const configFile = getConfigFile(options);
    updateConfig(configFile, {
        fcm_credentials: fcmCredentials,
        expo_push_token: expoPushToken,
        rustplus_auth_token: rustplusAuthToken,
    });
    console.log("FCM, Expo and Rust+ auth tokens have been saved to " + configFile);
}

async function fcmListen(options) {
    // read config file
    const configFile = getConfigFile(options);
    const config = readConfig(configFile);

    // make sure fcm credentials are in config
    if(!config.fcm_credentials){
        console.error("FCM Credentials missing. Please run `fcm-register` first.");
        process.exit(1);
        return;
    }

    console.log("Listening for FCM Notifications");
    const androidId = config.fcm_credentials.gcm.androidId;
    const securityToken = config.fcm_credentials.gcm.securityToken;
    const client = new PushReceiverClient(androidId, securityToken, []);
    client.on('ON_DATA_RECEIVED', (data) => {

        // generate timestamp
        const timestamp = new Date().toLocaleString();

        // log timestamp the notification was received (in green colour)
        console.log('\x1b[32m%s\x1b[0m', `[${timestamp}] Notification Received`)

        // log notification body
        console.log(data);

    });

    // force exit on ctrl + c
    process.on('SIGINT', async () => {
        process.exit(0);
    });

    await client.connect();

}

function showUsage() {
    const usage = commandLineUsage([
        {
            header: 'RustPlus',
            content: 'A command line tool for things related to Rust+',
        },
        {
            header: 'Usage',
            content: '$ rustplus <options> <command>'
        },
        {
            header: 'Command List',
            content: [
                { name: 'help', summary: 'Print this usage guide.' },
                { name: 'fcm-register', summary: 'Registers with FCM, Expo and links your Steam account with Rust+ so you can listen for Pairing Notifications.' },
                { name: 'fcm-listen', summary: 'Listens to notifications received from FCM, such as Rust+ Pairing Notifications.' },
            ]
        },
        {
            header: 'Options',
            optionList: [
                {
                    name: 'config-file',
                    typeLabel: '{underline file}',
                    description: 'Path to config file. (default: rustplus.config.json)',
                },
            ],
        },
    ]);
    console.log(usage);
}

async function run() {
    // parse command line args
    const options = commandLineArgs([
        { name: 'command', type: String, defaultOption: true },
        { name: 'config-file', type: String },
    ]);

    // run command
    switch(options.command){
        case 'fcm-register': {
            await fcmRegister(options);
            break;
        }
        case 'fcm-listen': {
            await fcmListen(options);
            break;
        }
        case 'help': {
            showUsage();
            break;
        }
        default: {
            showUsage();
            break;
        }
    }
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

async function shutdown() {
    // close chrome instances launched by pair.js
    await ChromeLauncher.killAll();

    // close express server
    if(server){
        server.close()
    }

    // destroy fcm client
    if(fcmClient){
        fcmClient.destroy();
    }
}

run();
