# Download Rust+ Bundle

You can use the following bash snippet to fetch the latest Rust+ bundle URL.

```bash
curl -s -H 'Exponent-SDK-Version: 44.0.0' -H 'Exponent-Platform: android' -H 'Exponent-Version: 0.0.25' -H 'Accept: application/expo+json,application/json' -H 'Expo-Release-Channel: default' -H 'Expo-Api-Version: 1' -H 'Expo-Client-Environment: STANDALONE' -H 'Exponent-Accept-Signature: true' -H 'Expo-JSON-Error: true' -H 'Host: exp.host' -H 'User-Agent: okhttp/3.12.1' --compressed 'https://exp.host/@facepunch/RustCompanion' | python -c 'import sys, json; print(json.loads(json.load(sys.stdin)["manifestString"])["bundleUrl"])'
```
