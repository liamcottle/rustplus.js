# Major changes in 3.0.0
- Types such as `AppEntityType` are now exported and can be destructured from the main export.
- The `RustPlus` class should be destructured from the main export.
  - Enivronments like mjs and ts may still allow for importing the class directly.
- `int64` will be decoded into `string` type instead of `long` type.
  

This would work in 2.x.x:
```ts
import RustPlus from '@liamcottle/rustplus.js';
const instance = new RustPlus('...');
instance.once("connected", () => {
  console.log("connected");
  instance.sendRequest({ getTeamInfo: {} }, (m) => {
    // SteamId will be a long type
    if (m.response.error) return;
    console.log(m.response?.teamInfo.members[0].steamId.toString());
  });
});
instance.connect();
```
This will work in 3.x.x:
```ts
import { RustPlus } from '@liamcottle/rustplus.js';
const instance = new RustPlus('...');
instance.once("connected", () => {
  console.log("connected");
  instance.sendRequest({ getTeamInfo: {} }, (m) => {
      // SteamId will be a string type
    if (m.response.error) return;
    console.log(m.response?.teamInfo.members[0].steamId);
  });
});
```
