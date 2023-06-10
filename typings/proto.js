"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMarker = exports.AppTeamChat = exports.AppTeamMessage = exports.AppTeamInfo_Note = exports.AppTeamInfo_Member = exports.AppTeamInfo = exports.AppEntityPayload_Item = exports.AppEntityPayload = exports.AppEntityInfo = exports.AppMap_Monument = exports.AppMap = exports.AppTime = exports.AppInfo = exports.AppFlag = exports.AppError = exports.AppSuccess = exports.AppGetNexusAuth = exports.AppPromoteToLeader = exports.AppSetEntityValue = exports.AppSendMessage = exports.AppEmpty = exports.AppBroadcast = exports.AppResponse = exports.AppMessage = exports.AppRequest = exports.ClanInvitations_Invitation = exports.ClanInvitations = exports.ClanLog_Entry = exports.ClanLog = exports.ClanInfo_Invite = exports.ClanInfo_Member = exports.ClanInfo_Role = exports.ClanInfo = exports.ClanActionResult = exports.Ray = exports.Color = exports.Half3 = exports.Vector4 = exports.Vector3 = exports.Vector2 = exports.appCameraRays_EntityTypeToJSON = exports.appCameraRays_EntityTypeFromJSON = exports.AppCameraRays_EntityType = exports.appMarkerTypeToJSON = exports.appMarkerTypeFromJSON = exports.AppMarkerType = exports.appEntityTypeToJSON = exports.appEntityTypeFromJSON = exports.AppEntityType = exports.protobufPackage = void 0;
exports.AppCameraRays_Entity = exports.AppCameraRays = exports.AppCameraInfo = exports.AppCameraInput = exports.AppCameraSubscribe = exports.AppNewClanMessage = exports.AppClanChanged = exports.AppEntityChanged = exports.AppNewTeamMessage = exports.AppTeamChanged = exports.AppNexusAuth = exports.AppClanChat = exports.AppClanMessage = exports.AppClanInfo = exports.AppMapMarkers = exports.AppMarker_SellOrder = void 0;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "rustplus";
var AppEntityType;
(function (AppEntityType) {
    AppEntityType[AppEntityType["Switch"] = 1] = "Switch";
    AppEntityType[AppEntityType["Alarm"] = 2] = "Alarm";
    AppEntityType[AppEntityType["StorageMonitor"] = 3] = "StorageMonitor";
    AppEntityType[AppEntityType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AppEntityType = exports.AppEntityType || (exports.AppEntityType = {}));
function appEntityTypeFromJSON(object) {
    switch (object) {
        case 1:
        case "Switch":
            return AppEntityType.Switch;
        case 2:
        case "Alarm":
            return AppEntityType.Alarm;
        case 3:
        case "StorageMonitor":
            return AppEntityType.StorageMonitor;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AppEntityType.UNRECOGNIZED;
    }
}
exports.appEntityTypeFromJSON = appEntityTypeFromJSON;
function appEntityTypeToJSON(object) {
    switch (object) {
        case AppEntityType.Switch:
            return "Switch";
        case AppEntityType.Alarm:
            return "Alarm";
        case AppEntityType.StorageMonitor:
            return "StorageMonitor";
        case AppEntityType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.appEntityTypeToJSON = appEntityTypeToJSON;
var AppMarkerType;
(function (AppMarkerType) {
    AppMarkerType[AppMarkerType["Undefined"] = 0] = "Undefined";
    AppMarkerType[AppMarkerType["Player"] = 1] = "Player";
    AppMarkerType[AppMarkerType["Explosion"] = 2] = "Explosion";
    AppMarkerType[AppMarkerType["VendingMachine"] = 3] = "VendingMachine";
    AppMarkerType[AppMarkerType["CH47"] = 4] = "CH47";
    AppMarkerType[AppMarkerType["CargoShip"] = 5] = "CargoShip";
    AppMarkerType[AppMarkerType["Crate"] = 6] = "Crate";
    AppMarkerType[AppMarkerType["GenericRadius"] = 7] = "GenericRadius";
    AppMarkerType[AppMarkerType["PatrolHelicopter"] = 8] = "PatrolHelicopter";
    AppMarkerType[AppMarkerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AppMarkerType = exports.AppMarkerType || (exports.AppMarkerType = {}));
function appMarkerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "Undefined":
            return AppMarkerType.Undefined;
        case 1:
        case "Player":
            return AppMarkerType.Player;
        case 2:
        case "Explosion":
            return AppMarkerType.Explosion;
        case 3:
        case "VendingMachine":
            return AppMarkerType.VendingMachine;
        case 4:
        case "CH47":
            return AppMarkerType.CH47;
        case 5:
        case "CargoShip":
            return AppMarkerType.CargoShip;
        case 6:
        case "Crate":
            return AppMarkerType.Crate;
        case 7:
        case "GenericRadius":
            return AppMarkerType.GenericRadius;
        case 8:
        case "PatrolHelicopter":
            return AppMarkerType.PatrolHelicopter;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AppMarkerType.UNRECOGNIZED;
    }
}
exports.appMarkerTypeFromJSON = appMarkerTypeFromJSON;
function appMarkerTypeToJSON(object) {
    switch (object) {
        case AppMarkerType.Undefined:
            return "Undefined";
        case AppMarkerType.Player:
            return "Player";
        case AppMarkerType.Explosion:
            return "Explosion";
        case AppMarkerType.VendingMachine:
            return "VendingMachine";
        case AppMarkerType.CH47:
            return "CH47";
        case AppMarkerType.CargoShip:
            return "CargoShip";
        case AppMarkerType.Crate:
            return "Crate";
        case AppMarkerType.GenericRadius:
            return "GenericRadius";
        case AppMarkerType.PatrolHelicopter:
            return "PatrolHelicopter";
        case AppMarkerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.appMarkerTypeToJSON = appMarkerTypeToJSON;
var AppCameraRays_EntityType;
(function (AppCameraRays_EntityType) {
    AppCameraRays_EntityType[AppCameraRays_EntityType["Tree"] = 1] = "Tree";
    AppCameraRays_EntityType[AppCameraRays_EntityType["Player"] = 2] = "Player";
    AppCameraRays_EntityType[AppCameraRays_EntityType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AppCameraRays_EntityType = exports.AppCameraRays_EntityType || (exports.AppCameraRays_EntityType = {}));
function appCameraRays_EntityTypeFromJSON(object) {
    switch (object) {
        case 1:
        case "Tree":
            return AppCameraRays_EntityType.Tree;
        case 2:
        case "Player":
            return AppCameraRays_EntityType.Player;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AppCameraRays_EntityType.UNRECOGNIZED;
    }
}
exports.appCameraRays_EntityTypeFromJSON = appCameraRays_EntityTypeFromJSON;
function appCameraRays_EntityTypeToJSON(object) {
    switch (object) {
        case AppCameraRays_EntityType.Tree:
            return "Tree";
        case AppCameraRays_EntityType.Player:
            return "Player";
        case AppCameraRays_EntityType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.appCameraRays_EntityTypeToJSON = appCameraRays_EntityTypeToJSON;
function createBaseVector2() {
    return { x: 0, y: 0 };
}
exports.Vector2 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVector2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    create: function (base) {
        return exports.Vector2.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseVector2();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseVector3() {
    return { x: 0, y: 0, z: 0 };
}
exports.Vector3 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVector3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.z = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
            z: isSet(object.z) ? Number(object.z) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        message.z !== undefined && (obj.z = message.z);
        return obj;
    },
    create: function (base) {
        return exports.Vector3.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseVector3();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.z = (_c = object.z) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseVector4() {
    return { x: 0, y: 0, z: 0, w: 0 };
}
exports.Vector4 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        if (message.w !== 0) {
            writer.uint32(37).float(message.w);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVector4();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.z = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.w = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
            z: isSet(object.z) ? Number(object.z) : 0,
            w: isSet(object.w) ? Number(object.w) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        message.z !== undefined && (obj.z = message.z);
        message.w !== undefined && (obj.w = message.w);
        return obj;
    },
    create: function (base) {
        return exports.Vector4.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseVector4();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.z = (_c = object.z) !== null && _c !== void 0 ? _c : 0;
        message.w = (_d = object.w) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseHalf3() {
    return { x: 0, y: 0, z: 0 };
}
exports.Half3 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.z !== 0) {
            writer.uint32(29).float(message.z);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHalf3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.z = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
            z: isSet(object.z) ? Number(object.z) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        message.z !== undefined && (obj.z = message.z);
        return obj;
    },
    create: function (base) {
        return exports.Half3.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseHalf3();
        message.x = (_a = object.x) !== null && _a !== void 0 ? _a : 0;
        message.y = (_b = object.y) !== null && _b !== void 0 ? _b : 0;
        message.z = (_c = object.z) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseColor() {
    return { r: 0, g: 0, b: 0, a: 0 };
}
exports.Color = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.r !== 0) {
            writer.uint32(13).float(message.r);
        }
        if (message.g !== 0) {
            writer.uint32(21).float(message.g);
        }
        if (message.b !== 0) {
            writer.uint32(29).float(message.b);
        }
        if (message.a !== 0) {
            writer.uint32(37).float(message.a);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseColor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.r = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.g = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.b = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.a = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            r: isSet(object.r) ? Number(object.r) : 0,
            g: isSet(object.g) ? Number(object.g) : 0,
            b: isSet(object.b) ? Number(object.b) : 0,
            a: isSet(object.a) ? Number(object.a) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.r !== undefined && (obj.r = message.r);
        message.g !== undefined && (obj.g = message.g);
        message.b !== undefined && (obj.b = message.b);
        message.a !== undefined && (obj.a = message.a);
        return obj;
    },
    create: function (base) {
        return exports.Color.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseColor();
        message.r = (_a = object.r) !== null && _a !== void 0 ? _a : 0;
        message.g = (_b = object.g) !== null && _b !== void 0 ? _b : 0;
        message.b = (_c = object.b) !== null && _c !== void 0 ? _c : 0;
        message.a = (_d = object.a) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseRay() {
    return { origin: undefined, direction: undefined };
}
exports.Ray = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.origin !== undefined) {
            exports.Vector3.encode(message.origin, writer.uint32(10).fork()).ldelim();
        }
        if (message.direction !== undefined) {
            exports.Vector3.encode(message.direction, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.origin = exports.Vector3.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.direction = exports.Vector3.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            origin: isSet(object.origin) ? exports.Vector3.fromJSON(object.origin) : undefined,
            direction: isSet(object.direction) ? exports.Vector3.fromJSON(object.direction) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.origin !== undefined && (obj.origin = message.origin ? exports.Vector3.toJSON(message.origin) : undefined);
        message.direction !== undefined &&
            (obj.direction = message.direction ? exports.Vector3.toJSON(message.direction) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.Ray.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseRay();
        message.origin = (object.origin !== undefined && object.origin !== null)
            ? exports.Vector3.fromPartial(object.origin)
            : undefined;
        message.direction = (object.direction !== undefined && object.direction !== null)
            ? exports.Vector3.fromPartial(object.direction)
            : undefined;
        return message;
    },
};
function createBaseClanActionResult() {
    return { requestId: 0, result: 0, hasClanInfo: false, clanInfo: undefined };
}
exports.ClanActionResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.requestId !== 0) {
            writer.uint32(8).int32(message.requestId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.hasClanInfo === true) {
            writer.uint32(24).bool(message.hasClanInfo);
        }
        if (message.clanInfo !== undefined) {
            exports.ClanInfo.encode(message.clanInfo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanActionResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.requestId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.hasClanInfo = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clanInfo = exports.ClanInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
            result: isSet(object.result) ? Number(object.result) : 0,
            hasClanInfo: isSet(object.hasClanInfo) ? Boolean(object.hasClanInfo) : false,
            clanInfo: isSet(object.clanInfo) ? exports.ClanInfo.fromJSON(object.clanInfo) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
        message.result !== undefined && (obj.result = Math.round(message.result));
        message.hasClanInfo !== undefined && (obj.hasClanInfo = message.hasClanInfo);
        message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? exports.ClanInfo.toJSON(message.clanInfo) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.ClanActionResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseClanActionResult();
        message.requestId = (_a = object.requestId) !== null && _a !== void 0 ? _a : 0;
        message.result = (_b = object.result) !== null && _b !== void 0 ? _b : 0;
        message.hasClanInfo = (_c = object.hasClanInfo) !== null && _c !== void 0 ? _c : false;
        message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
            ? exports.ClanInfo.fromPartial(object.clanInfo)
            : undefined;
        return message;
    },
};
function createBaseClanInfo() {
    return {
        clanId: long_1.default.ZERO,
        name: "",
        created: long_1.default.ZERO,
        creator: long_1.default.UZERO,
        motd: "",
        motdTimestamp: long_1.default.ZERO,
        motdAuthor: long_1.default.UZERO,
        logo: new Uint8Array(),
        color: 0,
        roles: [],
        members: [],
        invites: [],
        maxMemberCount: 0,
    };
}
exports.ClanInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.clanId.isZero()) {
            writer.uint32(8).int64(message.clanId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (!message.created.isZero()) {
            writer.uint32(24).int64(message.created);
        }
        if (!message.creator.isZero()) {
            writer.uint32(32).uint64(message.creator);
        }
        if (message.motd !== "") {
            writer.uint32(42).string(message.motd);
        }
        if (!message.motdTimestamp.isZero()) {
            writer.uint32(48).int64(message.motdTimestamp);
        }
        if (!message.motdAuthor.isZero()) {
            writer.uint32(56).uint64(message.motdAuthor);
        }
        if (message.logo.length !== 0) {
            writer.uint32(66).bytes(message.logo);
        }
        if (message.color !== 0) {
            writer.uint32(72).sint32(message.color);
        }
        for (var _i = 0, _a = message.roles; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ClanInfo_Role.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (var _b = 0, _c = message.members; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ClanInfo_Member.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (var _d = 0, _e = message.invites; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.ClanInfo_Invite.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.maxMemberCount !== 0) {
            writer.uint32(104).int32(message.maxMemberCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clanId = reader.int64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.created = reader.int64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.creator = reader.uint64();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.motd = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.motdTimestamp = reader.int64();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.motdAuthor = reader.uint64();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.logo = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.color = reader.sint32();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.roles.push(exports.ClanInfo_Role.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.members.push(exports.ClanInfo_Member.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.invites.push(exports.ClanInfo_Invite.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.maxMemberCount = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            clanId: isSet(object.clanId) ? long_1.default.fromValue(object.clanId) : long_1.default.ZERO,
            name: isSet(object.name) ? String(object.name) : "",
            created: isSet(object.created) ? long_1.default.fromValue(object.created) : long_1.default.ZERO,
            creator: isSet(object.creator) ? long_1.default.fromValue(object.creator) : long_1.default.UZERO,
            motd: isSet(object.motd) ? String(object.motd) : "",
            motdTimestamp: isSet(object.motdTimestamp) ? long_1.default.fromValue(object.motdTimestamp) : long_1.default.ZERO,
            motdAuthor: isSet(object.motdAuthor) ? long_1.default.fromValue(object.motdAuthor) : long_1.default.UZERO,
            logo: isSet(object.logo) ? bytesFromBase64(object.logo) : new Uint8Array(),
            color: isSet(object.color) ? Number(object.color) : 0,
            roles: Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map(function (e) { return exports.ClanInfo_Role.fromJSON(e); }) : [],
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return exports.ClanInfo_Member.fromJSON(e); }) : [],
            invites: Array.isArray(object === null || object === void 0 ? void 0 : object.invites) ? object.invites.map(function (e) { return exports.ClanInfo_Invite.fromJSON(e); }) : [],
            maxMemberCount: isSet(object.maxMemberCount) ? Number(object.maxMemberCount) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanId !== undefined && (obj.clanId = (message.clanId || long_1.default.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.created !== undefined && (obj.created = (message.created || long_1.default.ZERO).toString());
        message.creator !== undefined && (obj.creator = (message.creator || long_1.default.UZERO).toString());
        message.motd !== undefined && (obj.motd = message.motd);
        message.motdTimestamp !== undefined && (obj.motdTimestamp = (message.motdTimestamp || long_1.default.ZERO).toString());
        message.motdAuthor !== undefined && (obj.motdAuthor = (message.motdAuthor || long_1.default.UZERO).toString());
        message.logo !== undefined &&
            (obj.logo = base64FromBytes(message.logo !== undefined ? message.logo : new Uint8Array()));
        message.color !== undefined && (obj.color = Math.round(message.color));
        if (message.roles) {
            obj.roles = message.roles.map(function (e) { return e ? exports.ClanInfo_Role.toJSON(e) : undefined; });
        }
        else {
            obj.roles = [];
        }
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? exports.ClanInfo_Member.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        if (message.invites) {
            obj.invites = message.invites.map(function (e) { return e ? exports.ClanInfo_Invite.toJSON(e) : undefined; });
        }
        else {
            obj.invites = [];
        }
        message.maxMemberCount !== undefined && (obj.maxMemberCount = Math.round(message.maxMemberCount));
        return obj;
    },
    create: function (base) {
        return exports.ClanInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseClanInfo();
        message.clanId = (object.clanId !== undefined && object.clanId !== null)
            ? long_1.default.fromValue(object.clanId)
            : long_1.default.ZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.created = (object.created !== undefined && object.created !== null)
            ? long_1.default.fromValue(object.created)
            : long_1.default.ZERO;
        message.creator = (object.creator !== undefined && object.creator !== null)
            ? long_1.default.fromValue(object.creator)
            : long_1.default.UZERO;
        message.motd = (_b = object.motd) !== null && _b !== void 0 ? _b : "";
        message.motdTimestamp = (object.motdTimestamp !== undefined && object.motdTimestamp !== null)
            ? long_1.default.fromValue(object.motdTimestamp)
            : long_1.default.ZERO;
        message.motdAuthor = (object.motdAuthor !== undefined && object.motdAuthor !== null)
            ? long_1.default.fromValue(object.motdAuthor)
            : long_1.default.UZERO;
        message.logo = (_c = object.logo) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.color = (_d = object.color) !== null && _d !== void 0 ? _d : 0;
        message.roles = ((_e = object.roles) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.ClanInfo_Role.fromPartial(e); })) || [];
        message.members = ((_f = object.members) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.ClanInfo_Member.fromPartial(e); })) || [];
        message.invites = ((_g = object.invites) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.ClanInfo_Invite.fromPartial(e); })) || [];
        message.maxMemberCount = (_h = object.maxMemberCount) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
function createBaseClanInfo_Role() {
    return {
        roleId: 0,
        rank: 0,
        name: "",
        canSetMotd: false,
        canSetLogo: false,
        canInvite: false,
        canKick: false,
        canPromote: false,
        canDemote: false,
        canSetPlayerNotes: false,
        canAccessLogs: false,
    };
}
exports.ClanInfo_Role = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.roleId !== 0) {
            writer.uint32(8).int32(message.roleId);
        }
        if (message.rank !== 0) {
            writer.uint32(16).int32(message.rank);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.canSetMotd === true) {
            writer.uint32(32).bool(message.canSetMotd);
        }
        if (message.canSetLogo === true) {
            writer.uint32(40).bool(message.canSetLogo);
        }
        if (message.canInvite === true) {
            writer.uint32(48).bool(message.canInvite);
        }
        if (message.canKick === true) {
            writer.uint32(56).bool(message.canKick);
        }
        if (message.canPromote === true) {
            writer.uint32(64).bool(message.canPromote);
        }
        if (message.canDemote === true) {
            writer.uint32(72).bool(message.canDemote);
        }
        if (message.canSetPlayerNotes === true) {
            writer.uint32(80).bool(message.canSetPlayerNotes);
        }
        if (message.canAccessLogs === true) {
            writer.uint32(88).bool(message.canAccessLogs);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInfo_Role();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.roleId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.rank = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.canSetMotd = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.canSetLogo = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.canInvite = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.canKick = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.canPromote = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.canDemote = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.canSetPlayerNotes = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.canAccessLogs = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
            rank: isSet(object.rank) ? Number(object.rank) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            canSetMotd: isSet(object.canSetMotd) ? Boolean(object.canSetMotd) : false,
            canSetLogo: isSet(object.canSetLogo) ? Boolean(object.canSetLogo) : false,
            canInvite: isSet(object.canInvite) ? Boolean(object.canInvite) : false,
            canKick: isSet(object.canKick) ? Boolean(object.canKick) : false,
            canPromote: isSet(object.canPromote) ? Boolean(object.canPromote) : false,
            canDemote: isSet(object.canDemote) ? Boolean(object.canDemote) : false,
            canSetPlayerNotes: isSet(object.canSetPlayerNotes) ? Boolean(object.canSetPlayerNotes) : false,
            canAccessLogs: isSet(object.canAccessLogs) ? Boolean(object.canAccessLogs) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
        message.rank !== undefined && (obj.rank = Math.round(message.rank));
        message.name !== undefined && (obj.name = message.name);
        message.canSetMotd !== undefined && (obj.canSetMotd = message.canSetMotd);
        message.canSetLogo !== undefined && (obj.canSetLogo = message.canSetLogo);
        message.canInvite !== undefined && (obj.canInvite = message.canInvite);
        message.canKick !== undefined && (obj.canKick = message.canKick);
        message.canPromote !== undefined && (obj.canPromote = message.canPromote);
        message.canDemote !== undefined && (obj.canDemote = message.canDemote);
        message.canSetPlayerNotes !== undefined && (obj.canSetPlayerNotes = message.canSetPlayerNotes);
        message.canAccessLogs !== undefined && (obj.canAccessLogs = message.canAccessLogs);
        return obj;
    },
    create: function (base) {
        return exports.ClanInfo_Role.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseClanInfo_Role();
        message.roleId = (_a = object.roleId) !== null && _a !== void 0 ? _a : 0;
        message.rank = (_b = object.rank) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.canSetMotd = (_d = object.canSetMotd) !== null && _d !== void 0 ? _d : false;
        message.canSetLogo = (_e = object.canSetLogo) !== null && _e !== void 0 ? _e : false;
        message.canInvite = (_f = object.canInvite) !== null && _f !== void 0 ? _f : false;
        message.canKick = (_g = object.canKick) !== null && _g !== void 0 ? _g : false;
        message.canPromote = (_h = object.canPromote) !== null && _h !== void 0 ? _h : false;
        message.canDemote = (_j = object.canDemote) !== null && _j !== void 0 ? _j : false;
        message.canSetPlayerNotes = (_k = object.canSetPlayerNotes) !== null && _k !== void 0 ? _k : false;
        message.canAccessLogs = (_l = object.canAccessLogs) !== null && _l !== void 0 ? _l : false;
        return message;
    },
};
function createBaseClanInfo_Member() {
    return { steamId: long_1.default.UZERO, roleId: 0, joined: long_1.default.ZERO, lastSeen: long_1.default.ZERO, notes: "", online: false };
}
exports.ClanInfo_Member = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        if (message.roleId !== 0) {
            writer.uint32(16).int32(message.roleId);
        }
        if (!message.joined.isZero()) {
            writer.uint32(24).int64(message.joined);
        }
        if (!message.lastSeen.isZero()) {
            writer.uint32(32).int64(message.lastSeen);
        }
        if (message.notes !== "") {
            writer.uint32(42).string(message.notes);
        }
        if (message.online === true) {
            writer.uint32(48).bool(message.online);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInfo_Member();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.roleId = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.joined = reader.int64();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.lastSeen = reader.int64();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.notes = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.online = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
            joined: isSet(object.joined) ? long_1.default.fromValue(object.joined) : long_1.default.ZERO,
            lastSeen: isSet(object.lastSeen) ? long_1.default.fromValue(object.lastSeen) : long_1.default.ZERO,
            notes: isSet(object.notes) ? String(object.notes) : "",
            online: isSet(object.online) ? Boolean(object.online) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
        message.joined !== undefined && (obj.joined = (message.joined || long_1.default.ZERO).toString());
        message.lastSeen !== undefined && (obj.lastSeen = (message.lastSeen || long_1.default.ZERO).toString());
        message.notes !== undefined && (obj.notes = message.notes);
        message.online !== undefined && (obj.online = message.online);
        return obj;
    },
    create: function (base) {
        return exports.ClanInfo_Member.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseClanInfo_Member();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.roleId = (_a = object.roleId) !== null && _a !== void 0 ? _a : 0;
        message.joined = (object.joined !== undefined && object.joined !== null)
            ? long_1.default.fromValue(object.joined)
            : long_1.default.ZERO;
        message.lastSeen = (object.lastSeen !== undefined && object.lastSeen !== null)
            ? long_1.default.fromValue(object.lastSeen)
            : long_1.default.ZERO;
        message.notes = (_b = object.notes) !== null && _b !== void 0 ? _b : "";
        message.online = (_c = object.online) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseClanInfo_Invite() {
    return { steamId: long_1.default.UZERO, recruiter: long_1.default.UZERO, timestamp: long_1.default.ZERO };
}
exports.ClanInfo_Invite = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        if (!message.recruiter.isZero()) {
            writer.uint32(16).uint64(message.recruiter);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(24).int64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInfo_Invite();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.recruiter = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.timestamp = reader.int64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            recruiter: isSet(object.recruiter) ? long_1.default.fromValue(object.recruiter) : long_1.default.UZERO,
            timestamp: isSet(object.timestamp) ? long_1.default.fromValue(object.timestamp) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.recruiter !== undefined && (obj.recruiter = (message.recruiter || long_1.default.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1.default.ZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.ClanInfo_Invite.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseClanInfo_Invite();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.recruiter = (object.recruiter !== undefined && object.recruiter !== null)
            ? long_1.default.fromValue(object.recruiter)
            : long_1.default.UZERO;
        message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
            ? long_1.default.fromValue(object.timestamp)
            : long_1.default.ZERO;
        return message;
    },
};
function createBaseClanLog() {
    return { clanId: long_1.default.ZERO, logEntries: [] };
}
exports.ClanLog = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.clanId.isZero()) {
            writer.uint32(8).int64(message.clanId);
        }
        for (var _i = 0, _a = message.logEntries; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ClanLog_Entry.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanLog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clanId = reader.int64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.logEntries.push(exports.ClanLog_Entry.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            clanId: isSet(object.clanId) ? long_1.default.fromValue(object.clanId) : long_1.default.ZERO,
            logEntries: Array.isArray(object === null || object === void 0 ? void 0 : object.logEntries) ? object.logEntries.map(function (e) { return exports.ClanLog_Entry.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanId !== undefined && (obj.clanId = (message.clanId || long_1.default.ZERO).toString());
        if (message.logEntries) {
            obj.logEntries = message.logEntries.map(function (e) { return e ? exports.ClanLog_Entry.toJSON(e) : undefined; });
        }
        else {
            obj.logEntries = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.ClanLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseClanLog();
        message.clanId = (object.clanId !== undefined && object.clanId !== null)
            ? long_1.default.fromValue(object.clanId)
            : long_1.default.ZERO;
        message.logEntries = ((_a = object.logEntries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ClanLog_Entry.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseClanLog_Entry() {
    return { timestamp: long_1.default.ZERO, eventKey: "", arg1: "", arg2: "", arg3: "", arg4: "" };
}
exports.ClanLog_Entry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.timestamp.isZero()) {
            writer.uint32(8).int64(message.timestamp);
        }
        if (message.eventKey !== "") {
            writer.uint32(18).string(message.eventKey);
        }
        if (message.arg1 !== "") {
            writer.uint32(26).string(message.arg1);
        }
        if (message.arg2 !== "") {
            writer.uint32(34).string(message.arg2);
        }
        if (message.arg3 !== "") {
            writer.uint32(42).string(message.arg3);
        }
        if (message.arg4 !== "") {
            writer.uint32(50).string(message.arg4);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanLog_Entry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timestamp = reader.int64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.eventKey = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.arg1 = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.arg2 = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.arg3 = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.arg4 = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            timestamp: isSet(object.timestamp) ? long_1.default.fromValue(object.timestamp) : long_1.default.ZERO,
            eventKey: isSet(object.eventKey) ? String(object.eventKey) : "",
            arg1: isSet(object.arg1) ? String(object.arg1) : "",
            arg2: isSet(object.arg2) ? String(object.arg2) : "",
            arg3: isSet(object.arg3) ? String(object.arg3) : "",
            arg4: isSet(object.arg4) ? String(object.arg4) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1.default.ZERO).toString());
        message.eventKey !== undefined && (obj.eventKey = message.eventKey);
        message.arg1 !== undefined && (obj.arg1 = message.arg1);
        message.arg2 !== undefined && (obj.arg2 = message.arg2);
        message.arg3 !== undefined && (obj.arg3 = message.arg3);
        message.arg4 !== undefined && (obj.arg4 = message.arg4);
        return obj;
    },
    create: function (base) {
        return exports.ClanLog_Entry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseClanLog_Entry();
        message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
            ? long_1.default.fromValue(object.timestamp)
            : long_1.default.ZERO;
        message.eventKey = (_a = object.eventKey) !== null && _a !== void 0 ? _a : "";
        message.arg1 = (_b = object.arg1) !== null && _b !== void 0 ? _b : "";
        message.arg2 = (_c = object.arg2) !== null && _c !== void 0 ? _c : "";
        message.arg3 = (_d = object.arg3) !== null && _d !== void 0 ? _d : "";
        message.arg4 = (_e = object.arg4) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseClanInvitations() {
    return { invitations: [] };
}
exports.ClanInvitations = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.invitations; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ClanInvitations_Invitation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInvitations();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.invitations.push(exports.ClanInvitations_Invitation.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            invitations: Array.isArray(object === null || object === void 0 ? void 0 : object.invitations)
                ? object.invitations.map(function (e) { return exports.ClanInvitations_Invitation.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.invitations) {
            obj.invitations = message.invitations.map(function (e) { return e ? exports.ClanInvitations_Invitation.toJSON(e) : undefined; });
        }
        else {
            obj.invitations = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.ClanInvitations.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseClanInvitations();
        message.invitations = ((_a = object.invitations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ClanInvitations_Invitation.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseClanInvitations_Invitation() {
    return { clanId: long_1.default.ZERO, recruiter: long_1.default.UZERO, timestamp: long_1.default.ZERO };
}
exports.ClanInvitations_Invitation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.clanId.isZero()) {
            writer.uint32(8).int64(message.clanId);
        }
        if (!message.recruiter.isZero()) {
            writer.uint32(16).uint64(message.recruiter);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(24).int64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseClanInvitations_Invitation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clanId = reader.int64();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.recruiter = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.timestamp = reader.int64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            clanId: isSet(object.clanId) ? long_1.default.fromValue(object.clanId) : long_1.default.ZERO,
            recruiter: isSet(object.recruiter) ? long_1.default.fromValue(object.recruiter) : long_1.default.UZERO,
            timestamp: isSet(object.timestamp) ? long_1.default.fromValue(object.timestamp) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanId !== undefined && (obj.clanId = (message.clanId || long_1.default.ZERO).toString());
        message.recruiter !== undefined && (obj.recruiter = (message.recruiter || long_1.default.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || long_1.default.ZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.ClanInvitations_Invitation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseClanInvitations_Invitation();
        message.clanId = (object.clanId !== undefined && object.clanId !== null)
            ? long_1.default.fromValue(object.clanId)
            : long_1.default.ZERO;
        message.recruiter = (object.recruiter !== undefined && object.recruiter !== null)
            ? long_1.default.fromValue(object.recruiter)
            : long_1.default.UZERO;
        message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
            ? long_1.default.fromValue(object.timestamp)
            : long_1.default.ZERO;
        return message;
    },
};
function createBaseAppRequest() {
    return {
        seq: 0,
        playerId: long_1.default.UZERO,
        playerToken: 0,
        entityId: 0,
        getInfo: undefined,
        getTime: undefined,
        getMap: undefined,
        getTeamInfo: undefined,
        getTeamChat: undefined,
        sendTeamMessage: undefined,
        getEntityInfo: undefined,
        setEntityValue: undefined,
        checkSubscription: undefined,
        setSubscription: undefined,
        getMapMarkers: undefined,
        promoteToLeader: undefined,
        getClanInfo: undefined,
        setClanMotd: undefined,
        getClanChat: undefined,
        sendClanMessage: undefined,
        getNexusAuth: undefined,
        cameraSubscribe: undefined,
        cameraUnsubscribe: undefined,
        cameraInput: undefined,
    };
}
exports.AppRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.seq !== 0) {
            writer.uint32(8).uint32(message.seq);
        }
        if (!message.playerId.isZero()) {
            writer.uint32(16).uint64(message.playerId);
        }
        if (message.playerToken !== 0) {
            writer.uint32(24).int32(message.playerToken);
        }
        if (message.entityId !== 0) {
            writer.uint32(32).uint32(message.entityId);
        }
        if (message.getInfo !== undefined) {
            exports.AppEmpty.encode(message.getInfo, writer.uint32(66).fork()).ldelim();
        }
        if (message.getTime !== undefined) {
            exports.AppEmpty.encode(message.getTime, writer.uint32(74).fork()).ldelim();
        }
        if (message.getMap !== undefined) {
            exports.AppEmpty.encode(message.getMap, writer.uint32(82).fork()).ldelim();
        }
        if (message.getTeamInfo !== undefined) {
            exports.AppEmpty.encode(message.getTeamInfo, writer.uint32(90).fork()).ldelim();
        }
        if (message.getTeamChat !== undefined) {
            exports.AppEmpty.encode(message.getTeamChat, writer.uint32(98).fork()).ldelim();
        }
        if (message.sendTeamMessage !== undefined) {
            exports.AppSendMessage.encode(message.sendTeamMessage, writer.uint32(106).fork()).ldelim();
        }
        if (message.getEntityInfo !== undefined) {
            exports.AppEmpty.encode(message.getEntityInfo, writer.uint32(114).fork()).ldelim();
        }
        if (message.setEntityValue !== undefined) {
            exports.AppSetEntityValue.encode(message.setEntityValue, writer.uint32(122).fork()).ldelim();
        }
        if (message.checkSubscription !== undefined) {
            exports.AppEmpty.encode(message.checkSubscription, writer.uint32(130).fork()).ldelim();
        }
        if (message.setSubscription !== undefined) {
            exports.AppFlag.encode(message.setSubscription, writer.uint32(138).fork()).ldelim();
        }
        if (message.getMapMarkers !== undefined) {
            exports.AppEmpty.encode(message.getMapMarkers, writer.uint32(146).fork()).ldelim();
        }
        if (message.promoteToLeader !== undefined) {
            exports.AppPromoteToLeader.encode(message.promoteToLeader, writer.uint32(162).fork()).ldelim();
        }
        if (message.getClanInfo !== undefined) {
            exports.AppEmpty.encode(message.getClanInfo, writer.uint32(170).fork()).ldelim();
        }
        if (message.setClanMotd !== undefined) {
            exports.AppSendMessage.encode(message.setClanMotd, writer.uint32(178).fork()).ldelim();
        }
        if (message.getClanChat !== undefined) {
            exports.AppEmpty.encode(message.getClanChat, writer.uint32(186).fork()).ldelim();
        }
        if (message.sendClanMessage !== undefined) {
            exports.AppSendMessage.encode(message.sendClanMessage, writer.uint32(194).fork()).ldelim();
        }
        if (message.getNexusAuth !== undefined) {
            exports.AppGetNexusAuth.encode(message.getNexusAuth, writer.uint32(202).fork()).ldelim();
        }
        if (message.cameraSubscribe !== undefined) {
            exports.AppCameraSubscribe.encode(message.cameraSubscribe, writer.uint32(242).fork()).ldelim();
        }
        if (message.cameraUnsubscribe !== undefined) {
            exports.AppEmpty.encode(message.cameraUnsubscribe, writer.uint32(250).fork()).ldelim();
        }
        if (message.cameraInput !== undefined) {
            exports.AppCameraInput.encode(message.cameraInput, writer.uint32(258).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.seq = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.playerId = reader.uint64();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.playerToken = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.entityId = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.getInfo = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.getTime = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.getMap = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.getTeamInfo = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.getTeamChat = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.sendTeamMessage = exports.AppSendMessage.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.getEntityInfo = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.setEntityValue = exports.AppSetEntityValue.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.checkSubscription = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.setSubscription = exports.AppFlag.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.getMapMarkers = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.promoteToLeader = exports.AppPromoteToLeader.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.getClanInfo = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.setClanMotd = exports.AppSendMessage.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.getClanChat = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.sendClanMessage = exports.AppSendMessage.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.getNexusAuth = exports.AppGetNexusAuth.decode(reader, reader.uint32());
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.cameraSubscribe = exports.AppCameraSubscribe.decode(reader, reader.uint32());
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.cameraUnsubscribe = exports.AppEmpty.decode(reader, reader.uint32());
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.cameraInput = exports.AppCameraInput.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            seq: isSet(object.seq) ? Number(object.seq) : 0,
            playerId: isSet(object.playerId) ? long_1.default.fromValue(object.playerId) : long_1.default.UZERO,
            playerToken: isSet(object.playerToken) ? Number(object.playerToken) : 0,
            entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
            getInfo: isSet(object.getInfo) ? exports.AppEmpty.fromJSON(object.getInfo) : undefined,
            getTime: isSet(object.getTime) ? exports.AppEmpty.fromJSON(object.getTime) : undefined,
            getMap: isSet(object.getMap) ? exports.AppEmpty.fromJSON(object.getMap) : undefined,
            getTeamInfo: isSet(object.getTeamInfo) ? exports.AppEmpty.fromJSON(object.getTeamInfo) : undefined,
            getTeamChat: isSet(object.getTeamChat) ? exports.AppEmpty.fromJSON(object.getTeamChat) : undefined,
            sendTeamMessage: isSet(object.sendTeamMessage) ? exports.AppSendMessage.fromJSON(object.sendTeamMessage) : undefined,
            getEntityInfo: isSet(object.getEntityInfo) ? exports.AppEmpty.fromJSON(object.getEntityInfo) : undefined,
            setEntityValue: isSet(object.setEntityValue) ? exports.AppSetEntityValue.fromJSON(object.setEntityValue) : undefined,
            checkSubscription: isSet(object.checkSubscription) ? exports.AppEmpty.fromJSON(object.checkSubscription) : undefined,
            setSubscription: isSet(object.setSubscription) ? exports.AppFlag.fromJSON(object.setSubscription) : undefined,
            getMapMarkers: isSet(object.getMapMarkers) ? exports.AppEmpty.fromJSON(object.getMapMarkers) : undefined,
            promoteToLeader: isSet(object.promoteToLeader) ? exports.AppPromoteToLeader.fromJSON(object.promoteToLeader) : undefined,
            getClanInfo: isSet(object.getClanInfo) ? exports.AppEmpty.fromJSON(object.getClanInfo) : undefined,
            setClanMotd: isSet(object.setClanMotd) ? exports.AppSendMessage.fromJSON(object.setClanMotd) : undefined,
            getClanChat: isSet(object.getClanChat) ? exports.AppEmpty.fromJSON(object.getClanChat) : undefined,
            sendClanMessage: isSet(object.sendClanMessage) ? exports.AppSendMessage.fromJSON(object.sendClanMessage) : undefined,
            getNexusAuth: isSet(object.getNexusAuth) ? exports.AppGetNexusAuth.fromJSON(object.getNexusAuth) : undefined,
            cameraSubscribe: isSet(object.cameraSubscribe) ? exports.AppCameraSubscribe.fromJSON(object.cameraSubscribe) : undefined,
            cameraUnsubscribe: isSet(object.cameraUnsubscribe) ? exports.AppEmpty.fromJSON(object.cameraUnsubscribe) : undefined,
            cameraInput: isSet(object.cameraInput) ? exports.AppCameraInput.fromJSON(object.cameraInput) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.seq !== undefined && (obj.seq = Math.round(message.seq));
        message.playerId !== undefined && (obj.playerId = (message.playerId || long_1.default.UZERO).toString());
        message.playerToken !== undefined && (obj.playerToken = Math.round(message.playerToken));
        message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
        message.getInfo !== undefined && (obj.getInfo = message.getInfo ? exports.AppEmpty.toJSON(message.getInfo) : undefined);
        message.getTime !== undefined && (obj.getTime = message.getTime ? exports.AppEmpty.toJSON(message.getTime) : undefined);
        message.getMap !== undefined && (obj.getMap = message.getMap ? exports.AppEmpty.toJSON(message.getMap) : undefined);
        message.getTeamInfo !== undefined &&
            (obj.getTeamInfo = message.getTeamInfo ? exports.AppEmpty.toJSON(message.getTeamInfo) : undefined);
        message.getTeamChat !== undefined &&
            (obj.getTeamChat = message.getTeamChat ? exports.AppEmpty.toJSON(message.getTeamChat) : undefined);
        message.sendTeamMessage !== undefined &&
            (obj.sendTeamMessage = message.sendTeamMessage ? exports.AppSendMessage.toJSON(message.sendTeamMessage) : undefined);
        message.getEntityInfo !== undefined &&
            (obj.getEntityInfo = message.getEntityInfo ? exports.AppEmpty.toJSON(message.getEntityInfo) : undefined);
        message.setEntityValue !== undefined &&
            (obj.setEntityValue = message.setEntityValue ? exports.AppSetEntityValue.toJSON(message.setEntityValue) : undefined);
        message.checkSubscription !== undefined &&
            (obj.checkSubscription = message.checkSubscription ? exports.AppEmpty.toJSON(message.checkSubscription) : undefined);
        message.setSubscription !== undefined &&
            (obj.setSubscription = message.setSubscription ? exports.AppFlag.toJSON(message.setSubscription) : undefined);
        message.getMapMarkers !== undefined &&
            (obj.getMapMarkers = message.getMapMarkers ? exports.AppEmpty.toJSON(message.getMapMarkers) : undefined);
        message.promoteToLeader !== undefined &&
            (obj.promoteToLeader = message.promoteToLeader ? exports.AppPromoteToLeader.toJSON(message.promoteToLeader) : undefined);
        message.getClanInfo !== undefined &&
            (obj.getClanInfo = message.getClanInfo ? exports.AppEmpty.toJSON(message.getClanInfo) : undefined);
        message.setClanMotd !== undefined &&
            (obj.setClanMotd = message.setClanMotd ? exports.AppSendMessage.toJSON(message.setClanMotd) : undefined);
        message.getClanChat !== undefined &&
            (obj.getClanChat = message.getClanChat ? exports.AppEmpty.toJSON(message.getClanChat) : undefined);
        message.sendClanMessage !== undefined &&
            (obj.sendClanMessage = message.sendClanMessage ? exports.AppSendMessage.toJSON(message.sendClanMessage) : undefined);
        message.getNexusAuth !== undefined &&
            (obj.getNexusAuth = message.getNexusAuth ? exports.AppGetNexusAuth.toJSON(message.getNexusAuth) : undefined);
        message.cameraSubscribe !== undefined &&
            (obj.cameraSubscribe = message.cameraSubscribe ? exports.AppCameraSubscribe.toJSON(message.cameraSubscribe) : undefined);
        message.cameraUnsubscribe !== undefined &&
            (obj.cameraUnsubscribe = message.cameraUnsubscribe ? exports.AppEmpty.toJSON(message.cameraUnsubscribe) : undefined);
        message.cameraInput !== undefined &&
            (obj.cameraInput = message.cameraInput ? exports.AppCameraInput.toJSON(message.cameraInput) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppRequest();
        message.seq = (_a = object.seq) !== null && _a !== void 0 ? _a : 0;
        message.playerId = (object.playerId !== undefined && object.playerId !== null)
            ? long_1.default.fromValue(object.playerId)
            : long_1.default.UZERO;
        message.playerToken = (_b = object.playerToken) !== null && _b !== void 0 ? _b : 0;
        message.entityId = (_c = object.entityId) !== null && _c !== void 0 ? _c : 0;
        message.getInfo = (object.getInfo !== undefined && object.getInfo !== null)
            ? exports.AppEmpty.fromPartial(object.getInfo)
            : undefined;
        message.getTime = (object.getTime !== undefined && object.getTime !== null)
            ? exports.AppEmpty.fromPartial(object.getTime)
            : undefined;
        message.getMap = (object.getMap !== undefined && object.getMap !== null)
            ? exports.AppEmpty.fromPartial(object.getMap)
            : undefined;
        message.getTeamInfo = (object.getTeamInfo !== undefined && object.getTeamInfo !== null)
            ? exports.AppEmpty.fromPartial(object.getTeamInfo)
            : undefined;
        message.getTeamChat = (object.getTeamChat !== undefined && object.getTeamChat !== null)
            ? exports.AppEmpty.fromPartial(object.getTeamChat)
            : undefined;
        message.sendTeamMessage = (object.sendTeamMessage !== undefined && object.sendTeamMessage !== null)
            ? exports.AppSendMessage.fromPartial(object.sendTeamMessage)
            : undefined;
        message.getEntityInfo = (object.getEntityInfo !== undefined && object.getEntityInfo !== null)
            ? exports.AppEmpty.fromPartial(object.getEntityInfo)
            : undefined;
        message.setEntityValue = (object.setEntityValue !== undefined && object.setEntityValue !== null)
            ? exports.AppSetEntityValue.fromPartial(object.setEntityValue)
            : undefined;
        message.checkSubscription = (object.checkSubscription !== undefined && object.checkSubscription !== null)
            ? exports.AppEmpty.fromPartial(object.checkSubscription)
            : undefined;
        message.setSubscription = (object.setSubscription !== undefined && object.setSubscription !== null)
            ? exports.AppFlag.fromPartial(object.setSubscription)
            : undefined;
        message.getMapMarkers = (object.getMapMarkers !== undefined && object.getMapMarkers !== null)
            ? exports.AppEmpty.fromPartial(object.getMapMarkers)
            : undefined;
        message.promoteToLeader = (object.promoteToLeader !== undefined && object.promoteToLeader !== null)
            ? exports.AppPromoteToLeader.fromPartial(object.promoteToLeader)
            : undefined;
        message.getClanInfo = (object.getClanInfo !== undefined && object.getClanInfo !== null)
            ? exports.AppEmpty.fromPartial(object.getClanInfo)
            : undefined;
        message.setClanMotd = (object.setClanMotd !== undefined && object.setClanMotd !== null)
            ? exports.AppSendMessage.fromPartial(object.setClanMotd)
            : undefined;
        message.getClanChat = (object.getClanChat !== undefined && object.getClanChat !== null)
            ? exports.AppEmpty.fromPartial(object.getClanChat)
            : undefined;
        message.sendClanMessage = (object.sendClanMessage !== undefined && object.sendClanMessage !== null)
            ? exports.AppSendMessage.fromPartial(object.sendClanMessage)
            : undefined;
        message.getNexusAuth = (object.getNexusAuth !== undefined && object.getNexusAuth !== null)
            ? exports.AppGetNexusAuth.fromPartial(object.getNexusAuth)
            : undefined;
        message.cameraSubscribe = (object.cameraSubscribe !== undefined && object.cameraSubscribe !== null)
            ? exports.AppCameraSubscribe.fromPartial(object.cameraSubscribe)
            : undefined;
        message.cameraUnsubscribe = (object.cameraUnsubscribe !== undefined && object.cameraUnsubscribe !== null)
            ? exports.AppEmpty.fromPartial(object.cameraUnsubscribe)
            : undefined;
        message.cameraInput = (object.cameraInput !== undefined && object.cameraInput !== null)
            ? exports.AppCameraInput.fromPartial(object.cameraInput)
            : undefined;
        return message;
    },
};
function createBaseAppMessage() {
    return { response: undefined, broadcast: undefined };
}
exports.AppMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.response !== undefined) {
            exports.AppResponse.encode(message.response, writer.uint32(10).fork()).ldelim();
        }
        if (message.broadcast !== undefined) {
            exports.AppBroadcast.encode(message.broadcast, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.response = exports.AppResponse.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.broadcast = exports.AppBroadcast.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            response: isSet(object.response) ? exports.AppResponse.fromJSON(object.response) : undefined,
            broadcast: isSet(object.broadcast) ? exports.AppBroadcast.fromJSON(object.broadcast) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.response !== undefined &&
            (obj.response = message.response ? exports.AppResponse.toJSON(message.response) : undefined);
        message.broadcast !== undefined &&
            (obj.broadcast = message.broadcast ? exports.AppBroadcast.toJSON(message.broadcast) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppMessage();
        message.response = (object.response !== undefined && object.response !== null)
            ? exports.AppResponse.fromPartial(object.response)
            : undefined;
        message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
            ? exports.AppBroadcast.fromPartial(object.broadcast)
            : undefined;
        return message;
    },
};
function createBaseAppResponse() {
    return {
        seq: 0,
        success: undefined,
        error: undefined,
        info: undefined,
        time: undefined,
        map: undefined,
        teamInfo: undefined,
        teamChat: undefined,
        entityInfo: undefined,
        flag: undefined,
        mapMarkers: undefined,
        clanInfo: undefined,
        clanChat: undefined,
        nexusAuth: undefined,
        cameraSubscribeInfo: undefined,
    };
}
exports.AppResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.seq !== 0) {
            writer.uint32(8).uint32(message.seq);
        }
        if (message.success !== undefined) {
            exports.AppSuccess.encode(message.success, writer.uint32(34).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.AppError.encode(message.error, writer.uint32(42).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.AppInfo.encode(message.info, writer.uint32(50).fork()).ldelim();
        }
        if (message.time !== undefined) {
            exports.AppTime.encode(message.time, writer.uint32(58).fork()).ldelim();
        }
        if (message.map !== undefined) {
            exports.AppMap.encode(message.map, writer.uint32(66).fork()).ldelim();
        }
        if (message.teamInfo !== undefined) {
            exports.AppTeamInfo.encode(message.teamInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.teamChat !== undefined) {
            exports.AppTeamChat.encode(message.teamChat, writer.uint32(82).fork()).ldelim();
        }
        if (message.entityInfo !== undefined) {
            exports.AppEntityInfo.encode(message.entityInfo, writer.uint32(90).fork()).ldelim();
        }
        if (message.flag !== undefined) {
            exports.AppFlag.encode(message.flag, writer.uint32(98).fork()).ldelim();
        }
        if (message.mapMarkers !== undefined) {
            exports.AppMapMarkers.encode(message.mapMarkers, writer.uint32(106).fork()).ldelim();
        }
        if (message.clanInfo !== undefined) {
            exports.AppClanInfo.encode(message.clanInfo, writer.uint32(122).fork()).ldelim();
        }
        if (message.clanChat !== undefined) {
            exports.AppClanChat.encode(message.clanChat, writer.uint32(130).fork()).ldelim();
        }
        if (message.nexusAuth !== undefined) {
            exports.AppNexusAuth.encode(message.nexusAuth, writer.uint32(138).fork()).ldelim();
        }
        if (message.cameraSubscribeInfo !== undefined) {
            exports.AppCameraInfo.encode(message.cameraSubscribeInfo, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.seq = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.success = exports.AppSuccess.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.error = exports.AppError.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.info = exports.AppInfo.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.time = exports.AppTime.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.map = exports.AppMap.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.teamInfo = exports.AppTeamInfo.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.teamChat = exports.AppTeamChat.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.entityInfo = exports.AppEntityInfo.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.flag = exports.AppFlag.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.mapMarkers = exports.AppMapMarkers.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.clanInfo = exports.AppClanInfo.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.clanChat = exports.AppClanChat.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.nexusAuth = exports.AppNexusAuth.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.cameraSubscribeInfo = exports.AppCameraInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            seq: isSet(object.seq) ? Number(object.seq) : 0,
            success: isSet(object.success) ? exports.AppSuccess.fromJSON(object.success) : undefined,
            error: isSet(object.error) ? exports.AppError.fromJSON(object.error) : undefined,
            info: isSet(object.info) ? exports.AppInfo.fromJSON(object.info) : undefined,
            time: isSet(object.time) ? exports.AppTime.fromJSON(object.time) : undefined,
            map: isSet(object.map) ? exports.AppMap.fromJSON(object.map) : undefined,
            teamInfo: isSet(object.teamInfo) ? exports.AppTeamInfo.fromJSON(object.teamInfo) : undefined,
            teamChat: isSet(object.teamChat) ? exports.AppTeamChat.fromJSON(object.teamChat) : undefined,
            entityInfo: isSet(object.entityInfo) ? exports.AppEntityInfo.fromJSON(object.entityInfo) : undefined,
            flag: isSet(object.flag) ? exports.AppFlag.fromJSON(object.flag) : undefined,
            mapMarkers: isSet(object.mapMarkers) ? exports.AppMapMarkers.fromJSON(object.mapMarkers) : undefined,
            clanInfo: isSet(object.clanInfo) ? exports.AppClanInfo.fromJSON(object.clanInfo) : undefined,
            clanChat: isSet(object.clanChat) ? exports.AppClanChat.fromJSON(object.clanChat) : undefined,
            nexusAuth: isSet(object.nexusAuth) ? exports.AppNexusAuth.fromJSON(object.nexusAuth) : undefined,
            cameraSubscribeInfo: isSet(object.cameraSubscribeInfo)
                ? exports.AppCameraInfo.fromJSON(object.cameraSubscribeInfo)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.seq !== undefined && (obj.seq = Math.round(message.seq));
        message.success !== undefined && (obj.success = message.success ? exports.AppSuccess.toJSON(message.success) : undefined);
        message.error !== undefined && (obj.error = message.error ? exports.AppError.toJSON(message.error) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.AppInfo.toJSON(message.info) : undefined);
        message.time !== undefined && (obj.time = message.time ? exports.AppTime.toJSON(message.time) : undefined);
        message.map !== undefined && (obj.map = message.map ? exports.AppMap.toJSON(message.map) : undefined);
        message.teamInfo !== undefined &&
            (obj.teamInfo = message.teamInfo ? exports.AppTeamInfo.toJSON(message.teamInfo) : undefined);
        message.teamChat !== undefined &&
            (obj.teamChat = message.teamChat ? exports.AppTeamChat.toJSON(message.teamChat) : undefined);
        message.entityInfo !== undefined &&
            (obj.entityInfo = message.entityInfo ? exports.AppEntityInfo.toJSON(message.entityInfo) : undefined);
        message.flag !== undefined && (obj.flag = message.flag ? exports.AppFlag.toJSON(message.flag) : undefined);
        message.mapMarkers !== undefined &&
            (obj.mapMarkers = message.mapMarkers ? exports.AppMapMarkers.toJSON(message.mapMarkers) : undefined);
        message.clanInfo !== undefined &&
            (obj.clanInfo = message.clanInfo ? exports.AppClanInfo.toJSON(message.clanInfo) : undefined);
        message.clanChat !== undefined &&
            (obj.clanChat = message.clanChat ? exports.AppClanChat.toJSON(message.clanChat) : undefined);
        message.nexusAuth !== undefined &&
            (obj.nexusAuth = message.nexusAuth ? exports.AppNexusAuth.toJSON(message.nexusAuth) : undefined);
        message.cameraSubscribeInfo !== undefined && (obj.cameraSubscribeInfo = message.cameraSubscribeInfo
            ? exports.AppCameraInfo.toJSON(message.cameraSubscribeInfo)
            : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppResponse();
        message.seq = (_a = object.seq) !== null && _a !== void 0 ? _a : 0;
        message.success = (object.success !== undefined && object.success !== null)
            ? exports.AppSuccess.fromPartial(object.success)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.AppError.fromPartial(object.error)
            : undefined;
        message.info = (object.info !== undefined && object.info !== null) ? exports.AppInfo.fromPartial(object.info) : undefined;
        message.time = (object.time !== undefined && object.time !== null) ? exports.AppTime.fromPartial(object.time) : undefined;
        message.map = (object.map !== undefined && object.map !== null) ? exports.AppMap.fromPartial(object.map) : undefined;
        message.teamInfo = (object.teamInfo !== undefined && object.teamInfo !== null)
            ? exports.AppTeamInfo.fromPartial(object.teamInfo)
            : undefined;
        message.teamChat = (object.teamChat !== undefined && object.teamChat !== null)
            ? exports.AppTeamChat.fromPartial(object.teamChat)
            : undefined;
        message.entityInfo = (object.entityInfo !== undefined && object.entityInfo !== null)
            ? exports.AppEntityInfo.fromPartial(object.entityInfo)
            : undefined;
        message.flag = (object.flag !== undefined && object.flag !== null) ? exports.AppFlag.fromPartial(object.flag) : undefined;
        message.mapMarkers = (object.mapMarkers !== undefined && object.mapMarkers !== null)
            ? exports.AppMapMarkers.fromPartial(object.mapMarkers)
            : undefined;
        message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
            ? exports.AppClanInfo.fromPartial(object.clanInfo)
            : undefined;
        message.clanChat = (object.clanChat !== undefined && object.clanChat !== null)
            ? exports.AppClanChat.fromPartial(object.clanChat)
            : undefined;
        message.nexusAuth = (object.nexusAuth !== undefined && object.nexusAuth !== null)
            ? exports.AppNexusAuth.fromPartial(object.nexusAuth)
            : undefined;
        message.cameraSubscribeInfo = (object.cameraSubscribeInfo !== undefined && object.cameraSubscribeInfo !== null)
            ? exports.AppCameraInfo.fromPartial(object.cameraSubscribeInfo)
            : undefined;
        return message;
    },
};
function createBaseAppBroadcast() {
    return {
        teamChanged: undefined,
        teamMessage: undefined,
        entityChanged: undefined,
        clanChanged: undefined,
        clanMessage: undefined,
        cameraRays: undefined,
    };
}
exports.AppBroadcast = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.teamChanged !== undefined) {
            exports.AppTeamChanged.encode(message.teamChanged, writer.uint32(34).fork()).ldelim();
        }
        if (message.teamMessage !== undefined) {
            exports.AppNewTeamMessage.encode(message.teamMessage, writer.uint32(42).fork()).ldelim();
        }
        if (message.entityChanged !== undefined) {
            exports.AppEntityChanged.encode(message.entityChanged, writer.uint32(50).fork()).ldelim();
        }
        if (message.clanChanged !== undefined) {
            exports.AppClanChanged.encode(message.clanChanged, writer.uint32(58).fork()).ldelim();
        }
        if (message.clanMessage !== undefined) {
            exports.AppNewClanMessage.encode(message.clanMessage, writer.uint32(66).fork()).ldelim();
        }
        if (message.cameraRays !== undefined) {
            exports.AppCameraRays.encode(message.cameraRays, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppBroadcast();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.teamChanged = exports.AppTeamChanged.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.teamMessage = exports.AppNewTeamMessage.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.entityChanged = exports.AppEntityChanged.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.clanChanged = exports.AppClanChanged.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.clanMessage = exports.AppNewClanMessage.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.cameraRays = exports.AppCameraRays.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            teamChanged: isSet(object.teamChanged) ? exports.AppTeamChanged.fromJSON(object.teamChanged) : undefined,
            teamMessage: isSet(object.teamMessage) ? exports.AppNewTeamMessage.fromJSON(object.teamMessage) : undefined,
            entityChanged: isSet(object.entityChanged) ? exports.AppEntityChanged.fromJSON(object.entityChanged) : undefined,
            clanChanged: isSet(object.clanChanged) ? exports.AppClanChanged.fromJSON(object.clanChanged) : undefined,
            clanMessage: isSet(object.clanMessage) ? exports.AppNewClanMessage.fromJSON(object.clanMessage) : undefined,
            cameraRays: isSet(object.cameraRays) ? exports.AppCameraRays.fromJSON(object.cameraRays) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.teamChanged !== undefined &&
            (obj.teamChanged = message.teamChanged ? exports.AppTeamChanged.toJSON(message.teamChanged) : undefined);
        message.teamMessage !== undefined &&
            (obj.teamMessage = message.teamMessage ? exports.AppNewTeamMessage.toJSON(message.teamMessage) : undefined);
        message.entityChanged !== undefined &&
            (obj.entityChanged = message.entityChanged ? exports.AppEntityChanged.toJSON(message.entityChanged) : undefined);
        message.clanChanged !== undefined &&
            (obj.clanChanged = message.clanChanged ? exports.AppClanChanged.toJSON(message.clanChanged) : undefined);
        message.clanMessage !== undefined &&
            (obj.clanMessage = message.clanMessage ? exports.AppNewClanMessage.toJSON(message.clanMessage) : undefined);
        message.cameraRays !== undefined &&
            (obj.cameraRays = message.cameraRays ? exports.AppCameraRays.toJSON(message.cameraRays) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppBroadcast.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppBroadcast();
        message.teamChanged = (object.teamChanged !== undefined && object.teamChanged !== null)
            ? exports.AppTeamChanged.fromPartial(object.teamChanged)
            : undefined;
        message.teamMessage = (object.teamMessage !== undefined && object.teamMessage !== null)
            ? exports.AppNewTeamMessage.fromPartial(object.teamMessage)
            : undefined;
        message.entityChanged = (object.entityChanged !== undefined && object.entityChanged !== null)
            ? exports.AppEntityChanged.fromPartial(object.entityChanged)
            : undefined;
        message.clanChanged = (object.clanChanged !== undefined && object.clanChanged !== null)
            ? exports.AppClanChanged.fromPartial(object.clanChanged)
            : undefined;
        message.clanMessage = (object.clanMessage !== undefined && object.clanMessage !== null)
            ? exports.AppNewClanMessage.fromPartial(object.clanMessage)
            : undefined;
        message.cameraRays = (object.cameraRays !== undefined && object.cameraRays !== null)
            ? exports.AppCameraRays.fromPartial(object.cameraRays)
            : undefined;
        return message;
    },
};
function createBaseAppEmpty() {
    return {};
}
exports.AppEmpty = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppEmpty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.AppEmpty.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseAppEmpty();
        return message;
    },
};
function createBaseAppSendMessage() {
    return { message: "" };
}
exports.AppSendMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppSendMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { message: isSet(object.message) ? String(object.message) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create: function (base) {
        return exports.AppSendMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppSendMessage();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppSetEntityValue() {
    return { value: false };
}
exports.AppSetEntityValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppSetEntityValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.value = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { value: isSet(object.value) ? Boolean(object.value) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create: function (base) {
        return exports.AppSetEntityValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppSetEntityValue();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseAppPromoteToLeader() {
    return { steamId: long_1.default.UZERO };
}
exports.AppPromoteToLeader = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppPromoteToLeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.AppPromoteToLeader.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppPromoteToLeader();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        return message;
    },
};
function createBaseAppGetNexusAuth() {
    return { appKey: "" };
}
exports.AppGetNexusAuth = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.appKey !== "") {
            writer.uint32(10).string(message.appKey);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppGetNexusAuth();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.appKey = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { appKey: isSet(object.appKey) ? String(object.appKey) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.appKey !== undefined && (obj.appKey = message.appKey);
        return obj;
    },
    create: function (base) {
        return exports.AppGetNexusAuth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppGetNexusAuth();
        message.appKey = (_a = object.appKey) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppSuccess() {
    return {};
}
exports.AppSuccess = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.AppSuccess.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseAppSuccess();
        return message;
    },
};
function createBaseAppError() {
    return { error: "" };
}
exports.AppError = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.error = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { error: isSet(object.error) ? String(object.error) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    create: function (base) {
        return exports.AppError.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppError();
        message.error = (_a = object.error) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppFlag() {
    return { value: false };
}
exports.AppFlag = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppFlag();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.value = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { value: isSet(object.value) ? Boolean(object.value) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create: function (base) {
        return exports.AppFlag.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppFlag();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseAppInfo() {
    return {
        name: "",
        headerImage: "",
        url: "",
        map: "",
        mapSize: 0,
        wipeTime: 0,
        players: 0,
        maxPlayers: 0,
        queuedPlayers: 0,
        seed: 0,
        salt: 0,
        logoImage: "",
        nexus: "",
        nexusId: 0,
        nexusZone: "",
    };
}
exports.AppInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.headerImage !== "") {
            writer.uint32(18).string(message.headerImage);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.map !== "") {
            writer.uint32(34).string(message.map);
        }
        if (message.mapSize !== 0) {
            writer.uint32(40).uint32(message.mapSize);
        }
        if (message.wipeTime !== 0) {
            writer.uint32(48).uint32(message.wipeTime);
        }
        if (message.players !== 0) {
            writer.uint32(56).uint32(message.players);
        }
        if (message.maxPlayers !== 0) {
            writer.uint32(64).uint32(message.maxPlayers);
        }
        if (message.queuedPlayers !== 0) {
            writer.uint32(72).uint32(message.queuedPlayers);
        }
        if (message.seed !== 0) {
            writer.uint32(80).uint32(message.seed);
        }
        if (message.salt !== 0) {
            writer.uint32(88).uint32(message.salt);
        }
        if (message.logoImage !== "") {
            writer.uint32(98).string(message.logoImage);
        }
        if (message.nexus !== "") {
            writer.uint32(106).string(message.nexus);
        }
        if (message.nexusId !== 0) {
            writer.uint32(112).int32(message.nexusId);
        }
        if (message.nexusZone !== "") {
            writer.uint32(122).string(message.nexusZone);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.headerImage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.map = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.mapSize = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.wipeTime = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.players = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.maxPlayers = reader.uint32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.queuedPlayers = reader.uint32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.seed = reader.uint32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.salt = reader.uint32();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.logoImage = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.nexus = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.nexusId = reader.int32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.nexusZone = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            headerImage: isSet(object.headerImage) ? String(object.headerImage) : "",
            url: isSet(object.url) ? String(object.url) : "",
            map: isSet(object.map) ? String(object.map) : "",
            mapSize: isSet(object.mapSize) ? Number(object.mapSize) : 0,
            wipeTime: isSet(object.wipeTime) ? Number(object.wipeTime) : 0,
            players: isSet(object.players) ? Number(object.players) : 0,
            maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
            queuedPlayers: isSet(object.queuedPlayers) ? Number(object.queuedPlayers) : 0,
            seed: isSet(object.seed) ? Number(object.seed) : 0,
            salt: isSet(object.salt) ? Number(object.salt) : 0,
            logoImage: isSet(object.logoImage) ? String(object.logoImage) : "",
            nexus: isSet(object.nexus) ? String(object.nexus) : "",
            nexusId: isSet(object.nexusId) ? Number(object.nexusId) : 0,
            nexusZone: isSet(object.nexusZone) ? String(object.nexusZone) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.headerImage !== undefined && (obj.headerImage = message.headerImage);
        message.url !== undefined && (obj.url = message.url);
        message.map !== undefined && (obj.map = message.map);
        message.mapSize !== undefined && (obj.mapSize = Math.round(message.mapSize));
        message.wipeTime !== undefined && (obj.wipeTime = Math.round(message.wipeTime));
        message.players !== undefined && (obj.players = Math.round(message.players));
        message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
        message.queuedPlayers !== undefined && (obj.queuedPlayers = Math.round(message.queuedPlayers));
        message.seed !== undefined && (obj.seed = Math.round(message.seed));
        message.salt !== undefined && (obj.salt = Math.round(message.salt));
        message.logoImage !== undefined && (obj.logoImage = message.logoImage);
        message.nexus !== undefined && (obj.nexus = message.nexus);
        message.nexusId !== undefined && (obj.nexusId = Math.round(message.nexusId));
        message.nexusZone !== undefined && (obj.nexusZone = message.nexusZone);
        return obj;
    },
    create: function (base) {
        return exports.AppInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var message = createBaseAppInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.headerImage = (_b = object.headerImage) !== null && _b !== void 0 ? _b : "";
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : "";
        message.map = (_d = object.map) !== null && _d !== void 0 ? _d : "";
        message.mapSize = (_e = object.mapSize) !== null && _e !== void 0 ? _e : 0;
        message.wipeTime = (_f = object.wipeTime) !== null && _f !== void 0 ? _f : 0;
        message.players = (_g = object.players) !== null && _g !== void 0 ? _g : 0;
        message.maxPlayers = (_h = object.maxPlayers) !== null && _h !== void 0 ? _h : 0;
        message.queuedPlayers = (_j = object.queuedPlayers) !== null && _j !== void 0 ? _j : 0;
        message.seed = (_k = object.seed) !== null && _k !== void 0 ? _k : 0;
        message.salt = (_l = object.salt) !== null && _l !== void 0 ? _l : 0;
        message.logoImage = (_m = object.logoImage) !== null && _m !== void 0 ? _m : "";
        message.nexus = (_o = object.nexus) !== null && _o !== void 0 ? _o : "";
        message.nexusId = (_p = object.nexusId) !== null && _p !== void 0 ? _p : 0;
        message.nexusZone = (_q = object.nexusZone) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
function createBaseAppTime() {
    return { dayLengthMinutes: 0, timeScale: 0, sunrise: 0, sunset: 0, time: 0 };
}
exports.AppTime = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.dayLengthMinutes !== 0) {
            writer.uint32(13).float(message.dayLengthMinutes);
        }
        if (message.timeScale !== 0) {
            writer.uint32(21).float(message.timeScale);
        }
        if (message.sunrise !== 0) {
            writer.uint32(29).float(message.sunrise);
        }
        if (message.sunset !== 0) {
            writer.uint32(37).float(message.sunset);
        }
        if (message.time !== 0) {
            writer.uint32(45).float(message.time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.dayLengthMinutes = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.timeScale = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.sunrise = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.sunset = reader.float();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.time = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            dayLengthMinutes: isSet(object.dayLengthMinutes) ? Number(object.dayLengthMinutes) : 0,
            timeScale: isSet(object.timeScale) ? Number(object.timeScale) : 0,
            sunrise: isSet(object.sunrise) ? Number(object.sunrise) : 0,
            sunset: isSet(object.sunset) ? Number(object.sunset) : 0,
            time: isSet(object.time) ? Number(object.time) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.dayLengthMinutes !== undefined && (obj.dayLengthMinutes = message.dayLengthMinutes);
        message.timeScale !== undefined && (obj.timeScale = message.timeScale);
        message.sunrise !== undefined && (obj.sunrise = message.sunrise);
        message.sunset !== undefined && (obj.sunset = message.sunset);
        message.time !== undefined && (obj.time = message.time);
        return obj;
    },
    create: function (base) {
        return exports.AppTime.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAppTime();
        message.dayLengthMinutes = (_a = object.dayLengthMinutes) !== null && _a !== void 0 ? _a : 0;
        message.timeScale = (_b = object.timeScale) !== null && _b !== void 0 ? _b : 0;
        message.sunrise = (_c = object.sunrise) !== null && _c !== void 0 ? _c : 0;
        message.sunset = (_d = object.sunset) !== null && _d !== void 0 ? _d : 0;
        message.time = (_e = object.time) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseAppMap() {
    return { width: 0, height: 0, jpgImage: new Uint8Array(), oceanMargin: 0, monuments: [], background: "" };
}
exports.AppMap = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.width !== 0) {
            writer.uint32(8).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint32(message.height);
        }
        if (message.jpgImage.length !== 0) {
            writer.uint32(26).bytes(message.jpgImage);
        }
        if (message.oceanMargin !== 0) {
            writer.uint32(32).int32(message.oceanMargin);
        }
        for (var _i = 0, _a = message.monuments; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppMap_Monument.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.background !== "") {
            writer.uint32(50).string(message.background);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMap();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.width = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.jpgImage = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.oceanMargin = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.monuments.push(exports.AppMap_Monument.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.background = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            jpgImage: isSet(object.jpgImage) ? bytesFromBase64(object.jpgImage) : new Uint8Array(),
            oceanMargin: isSet(object.oceanMargin) ? Number(object.oceanMargin) : 0,
            monuments: Array.isArray(object === null || object === void 0 ? void 0 : object.monuments) ? object.monuments.map(function (e) { return exports.AppMap_Monument.fromJSON(e); }) : [],
            background: isSet(object.background) ? String(object.background) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.jpgImage !== undefined &&
            (obj.jpgImage = base64FromBytes(message.jpgImage !== undefined ? message.jpgImage : new Uint8Array()));
        message.oceanMargin !== undefined && (obj.oceanMargin = Math.round(message.oceanMargin));
        if (message.monuments) {
            obj.monuments = message.monuments.map(function (e) { return e ? exports.AppMap_Monument.toJSON(e) : undefined; });
        }
        else {
            obj.monuments = [];
        }
        message.background !== undefined && (obj.background = message.background);
        return obj;
    },
    create: function (base) {
        return exports.AppMap.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseAppMap();
        message.width = (_a = object.width) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.jpgImage = (_c = object.jpgImage) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.oceanMargin = (_d = object.oceanMargin) !== null && _d !== void 0 ? _d : 0;
        message.monuments = ((_e = object.monuments) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.AppMap_Monument.fromPartial(e); })) || [];
        message.background = (_f = object.background) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseAppMap_Monument() {
    return { token: "", x: 0, y: 0 };
}
exports.AppMap_Monument = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.x !== 0) {
            writer.uint32(21).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(29).float(message.y);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMap_Monument();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            token: isSet(object.token) ? String(object.token) : "",
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    create: function (base) {
        return exports.AppMap_Monument.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppMap_Monument();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.x = (_b = object.x) !== null && _b !== void 0 ? _b : 0;
        message.y = (_c = object.y) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseAppEntityInfo() {
    return { type: 1, payload: undefined };
}
exports.AppEntityInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== 1) {
            writer.uint32(8).int32(message.type);
        }
        if (message.payload !== undefined) {
            exports.AppEntityPayload.encode(message.payload, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppEntityInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.payload = exports.AppEntityPayload.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            type: isSet(object.type) ? appEntityTypeFromJSON(object.type) : 1,
            payload: isSet(object.payload) ? exports.AppEntityPayload.fromJSON(object.payload) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = appEntityTypeToJSON(message.type));
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.AppEntityPayload.toJSON(message.payload) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppEntityInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppEntityInfo();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 1;
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.AppEntityPayload.fromPartial(object.payload)
            : undefined;
        return message;
    },
};
function createBaseAppEntityPayload() {
    return { value: false, items: [], capacity: 0, hasProtection: false, protectionExpiry: 0 };
}
exports.AppEntityPayload = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        for (var _i = 0, _a = message.items; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppEntityPayload_Item.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.capacity !== 0) {
            writer.uint32(24).int32(message.capacity);
        }
        if (message.hasProtection === true) {
            writer.uint32(32).bool(message.hasProtection);
        }
        if (message.protectionExpiry !== 0) {
            writer.uint32(40).uint32(message.protectionExpiry);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppEntityPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.value = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.items.push(exports.AppEntityPayload_Item.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.capacity = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.hasProtection = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.protectionExpiry = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? Boolean(object.value) : false,
            items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map(function (e) { return exports.AppEntityPayload_Item.fromJSON(e); }) : [],
            capacity: isSet(object.capacity) ? Number(object.capacity) : 0,
            hasProtection: isSet(object.hasProtection) ? Boolean(object.hasProtection) : false,
            protectionExpiry: isSet(object.protectionExpiry) ? Number(object.protectionExpiry) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        if (message.items) {
            obj.items = message.items.map(function (e) { return e ? exports.AppEntityPayload_Item.toJSON(e) : undefined; });
        }
        else {
            obj.items = [];
        }
        message.capacity !== undefined && (obj.capacity = Math.round(message.capacity));
        message.hasProtection !== undefined && (obj.hasProtection = message.hasProtection);
        message.protectionExpiry !== undefined && (obj.protectionExpiry = Math.round(message.protectionExpiry));
        return obj;
    },
    create: function (base) {
        return exports.AppEntityPayload.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAppEntityPayload();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : false;
        message.items = ((_b = object.items) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.AppEntityPayload_Item.fromPartial(e); })) || [];
        message.capacity = (_c = object.capacity) !== null && _c !== void 0 ? _c : 0;
        message.hasProtection = (_d = object.hasProtection) !== null && _d !== void 0 ? _d : false;
        message.protectionExpiry = (_e = object.protectionExpiry) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseAppEntityPayload_Item() {
    return { itemId: 0, quantity: 0, itemIsBlueprint: false };
}
exports.AppEntityPayload_Item = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.itemId !== 0) {
            writer.uint32(8).int32(message.itemId);
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int32(message.quantity);
        }
        if (message.itemIsBlueprint === true) {
            writer.uint32(24).bool(message.itemIsBlueprint);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppEntityPayload_Item();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.itemId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.quantity = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.itemIsBlueprint = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            itemIsBlueprint: isSet(object.itemIsBlueprint) ? Boolean(object.itemIsBlueprint) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.itemIsBlueprint !== undefined && (obj.itemIsBlueprint = message.itemIsBlueprint);
        return obj;
    },
    create: function (base) {
        return exports.AppEntityPayload_Item.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppEntityPayload_Item();
        message.itemId = (_a = object.itemId) !== null && _a !== void 0 ? _a : 0;
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        message.itemIsBlueprint = (_c = object.itemIsBlueprint) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseAppTeamInfo() {
    return { leaderSteamId: long_1.default.UZERO, members: [], mapNotes: [], leaderMapNotes: [] };
}
exports.AppTeamInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.leaderSteamId.isZero()) {
            writer.uint32(8).uint64(message.leaderSteamId);
        }
        for (var _i = 0, _a = message.members; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppTeamInfo_Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.mapNotes; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.AppTeamInfo_Note.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.leaderMapNotes; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.AppTeamInfo_Note.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.leaderSteamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.members.push(exports.AppTeamInfo_Member.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.mapNotes.push(exports.AppTeamInfo_Note.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.leaderMapNotes.push(exports.AppTeamInfo_Note.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            leaderSteamId: isSet(object.leaderSteamId) ? long_1.default.fromValue(object.leaderSteamId) : long_1.default.UZERO,
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map(function (e) { return exports.AppTeamInfo_Member.fromJSON(e); }) : [],
            mapNotes: Array.isArray(object === null || object === void 0 ? void 0 : object.mapNotes) ? object.mapNotes.map(function (e) { return exports.AppTeamInfo_Note.fromJSON(e); }) : [],
            leaderMapNotes: Array.isArray(object === null || object === void 0 ? void 0 : object.leaderMapNotes)
                ? object.leaderMapNotes.map(function (e) { return exports.AppTeamInfo_Note.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.leaderSteamId !== undefined && (obj.leaderSteamId = (message.leaderSteamId || long_1.default.UZERO).toString());
        if (message.members) {
            obj.members = message.members.map(function (e) { return e ? exports.AppTeamInfo_Member.toJSON(e) : undefined; });
        }
        else {
            obj.members = [];
        }
        if (message.mapNotes) {
            obj.mapNotes = message.mapNotes.map(function (e) { return e ? exports.AppTeamInfo_Note.toJSON(e) : undefined; });
        }
        else {
            obj.mapNotes = [];
        }
        if (message.leaderMapNotes) {
            obj.leaderMapNotes = message.leaderMapNotes.map(function (e) { return e ? exports.AppTeamInfo_Note.toJSON(e) : undefined; });
        }
        else {
            obj.leaderMapNotes = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppTeamInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppTeamInfo();
        message.leaderSteamId = (object.leaderSteamId !== undefined && object.leaderSteamId !== null)
            ? long_1.default.fromValue(object.leaderSteamId)
            : long_1.default.UZERO;
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AppTeamInfo_Member.fromPartial(e); })) || [];
        message.mapNotes = ((_b = object.mapNotes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.AppTeamInfo_Note.fromPartial(e); })) || [];
        message.leaderMapNotes = ((_c = object.leaderMapNotes) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.AppTeamInfo_Note.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppTeamInfo_Member() {
    return { steamId: long_1.default.UZERO, name: "", x: 0, y: 0, isOnline: false, spawnTime: 0, isAlive: false, deathTime: 0 };
}
exports.AppTeamInfo_Member = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.x !== 0) {
            writer.uint32(29).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(37).float(message.y);
        }
        if (message.isOnline === true) {
            writer.uint32(40).bool(message.isOnline);
        }
        if (message.spawnTime !== 0) {
            writer.uint32(48).uint32(message.spawnTime);
        }
        if (message.isAlive === true) {
            writer.uint32(56).bool(message.isAlive);
        }
        if (message.deathTime !== 0) {
            writer.uint32(64).uint32(message.deathTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamInfo_Member();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isOnline = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.spawnTime = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isAlive = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.deathTime = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            name: isSet(object.name) ? String(object.name) : "",
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
            isOnline: isSet(object.isOnline) ? Boolean(object.isOnline) : false,
            spawnTime: isSet(object.spawnTime) ? Number(object.spawnTime) : 0,
            isAlive: isSet(object.isAlive) ? Boolean(object.isAlive) : false,
            deathTime: isSet(object.deathTime) ? Number(object.deathTime) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        message.isOnline !== undefined && (obj.isOnline = message.isOnline);
        message.spawnTime !== undefined && (obj.spawnTime = Math.round(message.spawnTime));
        message.isAlive !== undefined && (obj.isAlive = message.isAlive);
        message.deathTime !== undefined && (obj.deathTime = Math.round(message.deathTime));
        return obj;
    },
    create: function (base) {
        return exports.AppTeamInfo_Member.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseAppTeamInfo_Member();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.x = (_b = object.x) !== null && _b !== void 0 ? _b : 0;
        message.y = (_c = object.y) !== null && _c !== void 0 ? _c : 0;
        message.isOnline = (_d = object.isOnline) !== null && _d !== void 0 ? _d : false;
        message.spawnTime = (_e = object.spawnTime) !== null && _e !== void 0 ? _e : 0;
        message.isAlive = (_f = object.isAlive) !== null && _f !== void 0 ? _f : false;
        message.deathTime = (_g = object.deathTime) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseAppTeamInfo_Note() {
    return { type: 0, x: 0, y: 0 };
}
exports.AppTeamInfo_Note = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.x !== 0) {
            writer.uint32(29).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(37).float(message.y);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamInfo_Note();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            type: isSet(object.type) ? Number(object.type) : 0,
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.type !== undefined && (obj.type = Math.round(message.type));
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        return obj;
    },
    create: function (base) {
        return exports.AppTeamInfo_Note.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppTeamInfo_Note();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.x = (_b = object.x) !== null && _b !== void 0 ? _b : 0;
        message.y = (_c = object.y) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseAppTeamMessage() {
    return { steamId: long_1.default.UZERO, name: "", message: "", color: "", time: 0 };
}
exports.AppTeamMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (message.color !== "") {
            writer.uint32(34).string(message.color);
        }
        if (message.time !== 0) {
            writer.uint32(40).uint32(message.time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.color = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.time = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            name: isSet(object.name) ? String(object.name) : "",
            message: isSet(object.message) ? String(object.message) : "",
            color: isSet(object.color) ? String(object.color) : "",
            time: isSet(object.time) ? Number(object.time) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.message !== undefined && (obj.message = message.message);
        message.color !== undefined && (obj.color = message.color);
        message.time !== undefined && (obj.time = Math.round(message.time));
        return obj;
    },
    create: function (base) {
        return exports.AppTeamMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseAppTeamMessage();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.color = (_c = object.color) !== null && _c !== void 0 ? _c : "";
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseAppTeamChat() {
    return { messages: [] };
}
exports.AppTeamChat = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppTeamMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamChat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messages.push(exports.AppTeamMessage.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) { return exports.AppTeamMessage.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? exports.AppTeamMessage.toJSON(e) : undefined; });
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppTeamChat.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppTeamChat();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AppTeamMessage.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppMarker() {
    return {
        id: 0,
        type: 0,
        x: 0,
        y: 0,
        steamId: long_1.default.UZERO,
        rotation: 0,
        radius: 0,
        color1: undefined,
        color2: undefined,
        alpha: 0,
        name: "",
        outOfStock: false,
        sellOrders: [],
    };
}
exports.AppMarker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.x !== 0) {
            writer.uint32(29).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(37).float(message.y);
        }
        if (!message.steamId.isZero()) {
            writer.uint32(40).uint64(message.steamId);
        }
        if (message.rotation !== 0) {
            writer.uint32(53).float(message.rotation);
        }
        if (message.radius !== 0) {
            writer.uint32(61).float(message.radius);
        }
        if (message.color1 !== undefined) {
            exports.Vector4.encode(message.color1, writer.uint32(66).fork()).ldelim();
        }
        if (message.color2 !== undefined) {
            exports.Vector4.encode(message.color2, writer.uint32(74).fork()).ldelim();
        }
        if (message.alpha !== 0) {
            writer.uint32(85).float(message.alpha);
        }
        if (message.name !== "") {
            writer.uint32(90).string(message.name);
        }
        if (message.outOfStock === true) {
            writer.uint32(96).bool(message.outOfStock);
        }
        for (var _i = 0, _a = message.sellOrders; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppMarker_SellOrder.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMarker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }
                    message.rotation = reader.float();
                    continue;
                case 7:
                    if (tag !== 61) {
                        break;
                    }
                    message.radius = reader.float();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.color1 = exports.Vector4.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.color2 = exports.Vector4.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 85) {
                        break;
                    }
                    message.alpha = reader.float();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.outOfStock = reader.bool();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.sellOrders.push(exports.AppMarker_SellOrder.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            type: isSet(object.type) ? appMarkerTypeFromJSON(object.type) : 0,
            x: isSet(object.x) ? Number(object.x) : 0,
            y: isSet(object.y) ? Number(object.y) : 0,
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
            radius: isSet(object.radius) ? Number(object.radius) : 0,
            color1: isSet(object.color1) ? exports.Vector4.fromJSON(object.color1) : undefined,
            color2: isSet(object.color2) ? exports.Vector4.fromJSON(object.color2) : undefined,
            alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            outOfStock: isSet(object.outOfStock) ? Boolean(object.outOfStock) : false,
            sellOrders: Array.isArray(object === null || object === void 0 ? void 0 : object.sellOrders)
                ? object.sellOrders.map(function (e) { return exports.AppMarker_SellOrder.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.type !== undefined && (obj.type = appMarkerTypeToJSON(message.type));
        message.x !== undefined && (obj.x = message.x);
        message.y !== undefined && (obj.y = message.y);
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.rotation !== undefined && (obj.rotation = message.rotation);
        message.radius !== undefined && (obj.radius = message.radius);
        message.color1 !== undefined && (obj.color1 = message.color1 ? exports.Vector4.toJSON(message.color1) : undefined);
        message.color2 !== undefined && (obj.color2 = message.color2 ? exports.Vector4.toJSON(message.color2) : undefined);
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.name !== undefined && (obj.name = message.name);
        message.outOfStock !== undefined && (obj.outOfStock = message.outOfStock);
        if (message.sellOrders) {
            obj.sellOrders = message.sellOrders.map(function (e) { return e ? exports.AppMarker_SellOrder.toJSON(e) : undefined; });
        }
        else {
            obj.sellOrders = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppMarker.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseAppMarker();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.x = (_c = object.x) !== null && _c !== void 0 ? _c : 0;
        message.y = (_d = object.y) !== null && _d !== void 0 ? _d : 0;
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.rotation = (_e = object.rotation) !== null && _e !== void 0 ? _e : 0;
        message.radius = (_f = object.radius) !== null && _f !== void 0 ? _f : 0;
        message.color1 = (object.color1 !== undefined && object.color1 !== null)
            ? exports.Vector4.fromPartial(object.color1)
            : undefined;
        message.color2 = (object.color2 !== undefined && object.color2 !== null)
            ? exports.Vector4.fromPartial(object.color2)
            : undefined;
        message.alpha = (_g = object.alpha) !== null && _g !== void 0 ? _g : 0;
        message.name = (_h = object.name) !== null && _h !== void 0 ? _h : "";
        message.outOfStock = (_j = object.outOfStock) !== null && _j !== void 0 ? _j : false;
        message.sellOrders = ((_k = object.sellOrders) === null || _k === void 0 ? void 0 : _k.map(function (e) { return exports.AppMarker_SellOrder.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppMarker_SellOrder() {
    return {
        itemId: 0,
        quantity: 0,
        currencyId: 0,
        costPerItem: 0,
        amountInStock: 0,
        itemIsBlueprint: false,
        currencyIsBlueprint: false,
        itemCondition: 0,
        itemConditionMax: 0,
    };
}
exports.AppMarker_SellOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.itemId !== 0) {
            writer.uint32(8).int32(message.itemId);
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int32(message.quantity);
        }
        if (message.currencyId !== 0) {
            writer.uint32(24).int32(message.currencyId);
        }
        if (message.costPerItem !== 0) {
            writer.uint32(32).int32(message.costPerItem);
        }
        if (message.amountInStock !== 0) {
            writer.uint32(40).int32(message.amountInStock);
        }
        if (message.itemIsBlueprint === true) {
            writer.uint32(48).bool(message.itemIsBlueprint);
        }
        if (message.currencyIsBlueprint === true) {
            writer.uint32(56).bool(message.currencyIsBlueprint);
        }
        if (message.itemCondition !== 0) {
            writer.uint32(69).float(message.itemCondition);
        }
        if (message.itemConditionMax !== 0) {
            writer.uint32(77).float(message.itemConditionMax);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMarker_SellOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.itemId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.quantity = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.currencyId = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.costPerItem = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.amountInStock = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.itemIsBlueprint = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.currencyIsBlueprint = reader.bool();
                    continue;
                case 8:
                    if (tag !== 69) {
                        break;
                    }
                    message.itemCondition = reader.float();
                    continue;
                case 9:
                    if (tag !== 77) {
                        break;
                    }
                    message.itemConditionMax = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            currencyId: isSet(object.currencyId) ? Number(object.currencyId) : 0,
            costPerItem: isSet(object.costPerItem) ? Number(object.costPerItem) : 0,
            amountInStock: isSet(object.amountInStock) ? Number(object.amountInStock) : 0,
            itemIsBlueprint: isSet(object.itemIsBlueprint) ? Boolean(object.itemIsBlueprint) : false,
            currencyIsBlueprint: isSet(object.currencyIsBlueprint) ? Boolean(object.currencyIsBlueprint) : false,
            itemCondition: isSet(object.itemCondition) ? Number(object.itemCondition) : 0,
            itemConditionMax: isSet(object.itemConditionMax) ? Number(object.itemConditionMax) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
        message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
        message.currencyId !== undefined && (obj.currencyId = Math.round(message.currencyId));
        message.costPerItem !== undefined && (obj.costPerItem = Math.round(message.costPerItem));
        message.amountInStock !== undefined && (obj.amountInStock = Math.round(message.amountInStock));
        message.itemIsBlueprint !== undefined && (obj.itemIsBlueprint = message.itemIsBlueprint);
        message.currencyIsBlueprint !== undefined && (obj.currencyIsBlueprint = message.currencyIsBlueprint);
        message.itemCondition !== undefined && (obj.itemCondition = message.itemCondition);
        message.itemConditionMax !== undefined && (obj.itemConditionMax = message.itemConditionMax);
        return obj;
    },
    create: function (base) {
        return exports.AppMarker_SellOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseAppMarker_SellOrder();
        message.itemId = (_a = object.itemId) !== null && _a !== void 0 ? _a : 0;
        message.quantity = (_b = object.quantity) !== null && _b !== void 0 ? _b : 0;
        message.currencyId = (_c = object.currencyId) !== null && _c !== void 0 ? _c : 0;
        message.costPerItem = (_d = object.costPerItem) !== null && _d !== void 0 ? _d : 0;
        message.amountInStock = (_e = object.amountInStock) !== null && _e !== void 0 ? _e : 0;
        message.itemIsBlueprint = (_f = object.itemIsBlueprint) !== null && _f !== void 0 ? _f : false;
        message.currencyIsBlueprint = (_g = object.currencyIsBlueprint) !== null && _g !== void 0 ? _g : false;
        message.itemCondition = (_h = object.itemCondition) !== null && _h !== void 0 ? _h : 0;
        message.itemConditionMax = (_j = object.itemConditionMax) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseAppMapMarkers() {
    return { markers: [] };
}
exports.AppMapMarkers = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.markers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppMarker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppMapMarkers();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.markers.push(exports.AppMarker.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { markers: Array.isArray(object === null || object === void 0 ? void 0 : object.markers) ? object.markers.map(function (e) { return exports.AppMarker.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.markers) {
            obj.markers = message.markers.map(function (e) { return e ? exports.AppMarker.toJSON(e) : undefined; });
        }
        else {
            obj.markers = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppMapMarkers.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppMapMarkers();
        message.markers = ((_a = object.markers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AppMarker.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppClanInfo() {
    return { clanInfo: undefined };
}
exports.AppClanInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clanInfo !== undefined) {
            exports.ClanInfo.encode(message.clanInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppClanInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clanInfo = exports.ClanInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { clanInfo: isSet(object.clanInfo) ? exports.ClanInfo.fromJSON(object.clanInfo) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? exports.ClanInfo.toJSON(message.clanInfo) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppClanInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppClanInfo();
        message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
            ? exports.ClanInfo.fromPartial(object.clanInfo)
            : undefined;
        return message;
    },
};
function createBaseAppClanMessage() {
    return { steamId: long_1.default.UZERO, name: "", message: "", time: long_1.default.ZERO };
}
exports.AppClanMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.steamId.isZero()) {
            writer.uint32(8).uint64(message.steamId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        if (!message.time.isZero()) {
            writer.uint32(32).int64(message.time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppClanMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.steamId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.time = reader.int64();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            steamId: isSet(object.steamId) ? long_1.default.fromValue(object.steamId) : long_1.default.UZERO,
            name: isSet(object.name) ? String(object.name) : "",
            message: isSet(object.message) ? String(object.message) : "",
            time: isSet(object.time) ? long_1.default.fromValue(object.time) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.steamId !== undefined && (obj.steamId = (message.steamId || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.message !== undefined && (obj.message = message.message);
        message.time !== undefined && (obj.time = (message.time || long_1.default.ZERO).toString());
        return obj;
    },
    create: function (base) {
        return exports.AppClanMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAppClanMessage();
        message.steamId = (object.steamId !== undefined && object.steamId !== null)
            ? long_1.default.fromValue(object.steamId)
            : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.time = (object.time !== undefined && object.time !== null) ? long_1.default.fromValue(object.time) : long_1.default.ZERO;
        return message;
    },
};
function createBaseAppClanChat() {
    return { messages: [] };
}
exports.AppClanChat = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppClanMessage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppClanChat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.messages.push(exports.AppClanMessage.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map(function (e) { return exports.AppClanMessage.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(function (e) { return e ? exports.AppClanMessage.toJSON(e) : undefined; });
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppClanChat.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppClanChat();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.AppClanMessage.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppNexusAuth() {
    return { serverId: "", playerToken: 0 };
}
exports.AppNexusAuth = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.serverId !== "") {
            writer.uint32(10).string(message.serverId);
        }
        if (message.playerToken !== 0) {
            writer.uint32(16).int32(message.playerToken);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppNexusAuth();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.serverId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.playerToken = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            serverId: isSet(object.serverId) ? String(object.serverId) : "",
            playerToken: isSet(object.playerToken) ? Number(object.playerToken) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.serverId !== undefined && (obj.serverId = message.serverId);
        message.playerToken !== undefined && (obj.playerToken = Math.round(message.playerToken));
        return obj;
    },
    create: function (base) {
        return exports.AppNexusAuth.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAppNexusAuth();
        message.serverId = (_a = object.serverId) !== null && _a !== void 0 ? _a : "";
        message.playerToken = (_b = object.playerToken) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseAppTeamChanged() {
    return { playerId: long_1.default.UZERO, teamInfo: undefined };
}
exports.AppTeamChanged = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.playerId.isZero()) {
            writer.uint32(8).uint64(message.playerId);
        }
        if (message.teamInfo !== undefined) {
            exports.AppTeamInfo.encode(message.teamInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppTeamChanged();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.playerId = reader.uint64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.teamInfo = exports.AppTeamInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            playerId: isSet(object.playerId) ? long_1.default.fromValue(object.playerId) : long_1.default.UZERO,
            teamInfo: isSet(object.teamInfo) ? exports.AppTeamInfo.fromJSON(object.teamInfo) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.playerId !== undefined && (obj.playerId = (message.playerId || long_1.default.UZERO).toString());
        message.teamInfo !== undefined &&
            (obj.teamInfo = message.teamInfo ? exports.AppTeamInfo.toJSON(message.teamInfo) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppTeamChanged.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppTeamChanged();
        message.playerId = (object.playerId !== undefined && object.playerId !== null)
            ? long_1.default.fromValue(object.playerId)
            : long_1.default.UZERO;
        message.teamInfo = (object.teamInfo !== undefined && object.teamInfo !== null)
            ? exports.AppTeamInfo.fromPartial(object.teamInfo)
            : undefined;
        return message;
    },
};
function createBaseAppNewTeamMessage() {
    return { message: undefined };
}
exports.AppNewTeamMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== undefined) {
            exports.AppTeamMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppNewTeamMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = exports.AppTeamMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { message: isSet(object.message) ? exports.AppTeamMessage.fromJSON(object.message) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined &&
            (obj.message = message.message ? exports.AppTeamMessage.toJSON(message.message) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppNewTeamMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppNewTeamMessage();
        message.message = (object.message !== undefined && object.message !== null)
            ? exports.AppTeamMessage.fromPartial(object.message)
            : undefined;
        return message;
    },
};
function createBaseAppEntityChanged() {
    return { entityId: 0, payload: undefined };
}
exports.AppEntityChanged = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.entityId !== 0) {
            writer.uint32(8).uint32(message.entityId);
        }
        if (message.payload !== undefined) {
            exports.AppEntityPayload.encode(message.payload, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppEntityChanged();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.entityId = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.payload = exports.AppEntityPayload.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
            payload: isSet(object.payload) ? exports.AppEntityPayload.fromJSON(object.payload) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.AppEntityPayload.toJSON(message.payload) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppEntityChanged.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppEntityChanged();
        message.entityId = (_a = object.entityId) !== null && _a !== void 0 ? _a : 0;
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.AppEntityPayload.fromPartial(object.payload)
            : undefined;
        return message;
    },
};
function createBaseAppClanChanged() {
    return { clanInfo: undefined };
}
exports.AppClanChanged = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clanInfo !== undefined) {
            exports.ClanInfo.encode(message.clanInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppClanChanged();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clanInfo = exports.ClanInfo.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { clanInfo: isSet(object.clanInfo) ? exports.ClanInfo.fromJSON(object.clanInfo) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanInfo !== undefined && (obj.clanInfo = message.clanInfo ? exports.ClanInfo.toJSON(message.clanInfo) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppClanChanged.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppClanChanged();
        message.clanInfo = (object.clanInfo !== undefined && object.clanInfo !== null)
            ? exports.ClanInfo.fromPartial(object.clanInfo)
            : undefined;
        return message;
    },
};
function createBaseAppNewClanMessage() {
    return { clanId: long_1.default.ZERO, message: undefined };
}
exports.AppNewClanMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.clanId.isZero()) {
            writer.uint32(8).int64(message.clanId);
        }
        if (message.message !== undefined) {
            exports.AppClanMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppNewClanMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.clanId = reader.int64();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = exports.AppClanMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            clanId: isSet(object.clanId) ? long_1.default.fromValue(object.clanId) : long_1.default.ZERO,
            message: isSet(object.message) ? exports.AppClanMessage.fromJSON(object.message) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clanId !== undefined && (obj.clanId = (message.clanId || long_1.default.ZERO).toString());
        message.message !== undefined &&
            (obj.message = message.message ? exports.AppClanMessage.toJSON(message.message) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppNewClanMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseAppNewClanMessage();
        message.clanId = (object.clanId !== undefined && object.clanId !== null)
            ? long_1.default.fromValue(object.clanId)
            : long_1.default.ZERO;
        message.message = (object.message !== undefined && object.message !== null)
            ? exports.AppClanMessage.fromPartial(object.message)
            : undefined;
        return message;
    },
};
function createBaseAppCameraSubscribe() {
    return { cameraId: "" };
}
exports.AppCameraSubscribe = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.cameraId !== "") {
            writer.uint32(10).string(message.cameraId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppCameraSubscribe();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cameraId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { cameraId: isSet(object.cameraId) ? String(object.cameraId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.cameraId !== undefined && (obj.cameraId = message.cameraId);
        return obj;
    },
    create: function (base) {
        return exports.AppCameraSubscribe.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppCameraSubscribe();
        message.cameraId = (_a = object.cameraId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAppCameraInput() {
    return { buttons: 0, mouseDelta: undefined };
}
exports.AppCameraInput = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.buttons !== 0) {
            writer.uint32(8).int32(message.buttons);
        }
        if (message.mouseDelta !== undefined) {
            exports.Vector2.encode(message.mouseDelta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppCameraInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.buttons = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.mouseDelta = exports.Vector2.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            buttons: isSet(object.buttons) ? Number(object.buttons) : 0,
            mouseDelta: isSet(object.mouseDelta) ? exports.Vector2.fromJSON(object.mouseDelta) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.buttons !== undefined && (obj.buttons = Math.round(message.buttons));
        message.mouseDelta !== undefined &&
            (obj.mouseDelta = message.mouseDelta ? exports.Vector2.toJSON(message.mouseDelta) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.AppCameraInput.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAppCameraInput();
        message.buttons = (_a = object.buttons) !== null && _a !== void 0 ? _a : 0;
        message.mouseDelta = (object.mouseDelta !== undefined && object.mouseDelta !== null)
            ? exports.Vector2.fromPartial(object.mouseDelta)
            : undefined;
        return message;
    },
};
function createBaseAppCameraInfo() {
    return { width: 0, height: 0, nearPlane: 0, farPlane: 0, controlFlags: 0 };
}
exports.AppCameraInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.width !== 0) {
            writer.uint32(8).int32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(16).int32(message.height);
        }
        if (message.nearPlane !== 0) {
            writer.uint32(29).float(message.nearPlane);
        }
        if (message.farPlane !== 0) {
            writer.uint32(37).float(message.farPlane);
        }
        if (message.controlFlags !== 0) {
            writer.uint32(40).int32(message.controlFlags);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppCameraInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.width = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.nearPlane = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.farPlane = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.controlFlags = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            nearPlane: isSet(object.nearPlane) ? Number(object.nearPlane) : 0,
            farPlane: isSet(object.farPlane) ? Number(object.farPlane) : 0,
            controlFlags: isSet(object.controlFlags) ? Number(object.controlFlags) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.nearPlane !== undefined && (obj.nearPlane = message.nearPlane);
        message.farPlane !== undefined && (obj.farPlane = message.farPlane);
        message.controlFlags !== undefined && (obj.controlFlags = Math.round(message.controlFlags));
        return obj;
    },
    create: function (base) {
        return exports.AppCameraInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAppCameraInfo();
        message.width = (_a = object.width) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.nearPlane = (_c = object.nearPlane) !== null && _c !== void 0 ? _c : 0;
        message.farPlane = (_d = object.farPlane) !== null && _d !== void 0 ? _d : 0;
        message.controlFlags = (_e = object.controlFlags) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseAppCameraRays() {
    return { verticalFov: 0, sampleOffset: 0, rayData: new Uint8Array(), distance: 0, entities: [] };
}
exports.AppCameraRays = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.verticalFov !== 0) {
            writer.uint32(13).float(message.verticalFov);
        }
        if (message.sampleOffset !== 0) {
            writer.uint32(16).int32(message.sampleOffset);
        }
        if (message.rayData.length !== 0) {
            writer.uint32(26).bytes(message.rayData);
        }
        if (message.distance !== 0) {
            writer.uint32(37).float(message.distance);
        }
        for (var _i = 0, _a = message.entities; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.AppCameraRays_Entity.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppCameraRays();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.verticalFov = reader.float();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.sampleOffset = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rayData = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.distance = reader.float();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.entities.push(exports.AppCameraRays_Entity.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            verticalFov: isSet(object.verticalFov) ? Number(object.verticalFov) : 0,
            sampleOffset: isSet(object.sampleOffset) ? Number(object.sampleOffset) : 0,
            rayData: isSet(object.rayData) ? bytesFromBase64(object.rayData) : new Uint8Array(),
            distance: isSet(object.distance) ? Number(object.distance) : 0,
            entities: Array.isArray(object === null || object === void 0 ? void 0 : object.entities)
                ? object.entities.map(function (e) { return exports.AppCameraRays_Entity.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.verticalFov !== undefined && (obj.verticalFov = message.verticalFov);
        message.sampleOffset !== undefined && (obj.sampleOffset = Math.round(message.sampleOffset));
        message.rayData !== undefined &&
            (obj.rayData = base64FromBytes(message.rayData !== undefined ? message.rayData : new Uint8Array()));
        message.distance !== undefined && (obj.distance = message.distance);
        if (message.entities) {
            obj.entities = message.entities.map(function (e) { return e ? exports.AppCameraRays_Entity.toJSON(e) : undefined; });
        }
        else {
            obj.entities = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.AppCameraRays.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAppCameraRays();
        message.verticalFov = (_a = object.verticalFov) !== null && _a !== void 0 ? _a : 0;
        message.sampleOffset = (_b = object.sampleOffset) !== null && _b !== void 0 ? _b : 0;
        message.rayData = (_c = object.rayData) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.distance = (_d = object.distance) !== null && _d !== void 0 ? _d : 0;
        message.entities = ((_e = object.entities) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.AppCameraRays_Entity.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseAppCameraRays_Entity() {
    return { entityId: 0, type: 1, position: undefined, rotation: undefined, size: undefined, name: "" };
}
exports.AppCameraRays_Entity = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.entityId !== 0) {
            writer.uint32(8).uint32(message.entityId);
        }
        if (message.type !== 1) {
            writer.uint32(16).int32(message.type);
        }
        if (message.position !== undefined) {
            exports.Vector3.encode(message.position, writer.uint32(26).fork()).ldelim();
        }
        if (message.rotation !== undefined) {
            exports.Vector3.encode(message.rotation, writer.uint32(34).fork()).ldelim();
        }
        if (message.size !== undefined) {
            exports.Vector3.encode(message.size, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAppCameraRays_Entity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.entityId = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.position = exports.Vector3.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.rotation = exports.Vector3.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.size = exports.Vector3.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            entityId: isSet(object.entityId) ? Number(object.entityId) : 0,
            type: isSet(object.type) ? appCameraRays_EntityTypeFromJSON(object.type) : 1,
            position: isSet(object.position) ? exports.Vector3.fromJSON(object.position) : undefined,
            rotation: isSet(object.rotation) ? exports.Vector3.fromJSON(object.rotation) : undefined,
            size: isSet(object.size) ? exports.Vector3.fromJSON(object.size) : undefined,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.entityId !== undefined && (obj.entityId = Math.round(message.entityId));
        message.type !== undefined && (obj.type = appCameraRays_EntityTypeToJSON(message.type));
        message.position !== undefined && (obj.position = message.position ? exports.Vector3.toJSON(message.position) : undefined);
        message.rotation !== undefined && (obj.rotation = message.rotation ? exports.Vector3.toJSON(message.rotation) : undefined);
        message.size !== undefined && (obj.size = message.size ? exports.Vector3.toJSON(message.size) : undefined);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.AppCameraRays_Entity.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseAppCameraRays_Entity();
        message.entityId = (_a = object.entityId) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 1;
        message.position = (object.position !== undefined && object.position !== null)
            ? exports.Vector3.fromPartial(object.position)
            : undefined;
        message.rotation = (object.rotation !== undefined && object.rotation !== null)
            ? exports.Vector3.fromPartial(object.rotation)
            : undefined;
        message.size = (object.size !== undefined && object.size !== null) ? exports.Vector3.fromPartial(object.size) : undefined;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = tsProtoGlobalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin_1.join(""));
    }
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
