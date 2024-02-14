import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "rustplus";
export declare enum AppEntityType {
    Switch = 1,
    Alarm = 2,
    StorageMonitor = 3,
    UNRECOGNIZED = -1
}
export declare function appEntityTypeFromJSON(object: any): AppEntityType;
export declare function appEntityTypeToJSON(object: AppEntityType): string;
export declare enum AppMarkerType {
    Undefined = 0,
    Player = 1,
    Explosion = 2,
    VendingMachine = 3,
    CH47 = 4,
    CargoShip = 5,
    Crate = 6,
    GenericRadius = 7,
    PatrolHelicopter = 8,
    UNRECOGNIZED = -1
}
export declare function appMarkerTypeFromJSON(object: any): AppMarkerType;
export declare function appMarkerTypeToJSON(object: AppMarkerType): string;
export interface Vector2 {
    x: number;
    y: number;
}
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export interface Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface Half3 {
    x: number;
    y: number;
    z: number;
}
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface Ray {
    origin: Vector3 | undefined;
    direction: Vector3 | undefined;
}
export interface ClanActionResult {
    requestId: number;
    result: number;
    hasClanInfo: boolean;
    clanInfo: ClanInfo | undefined;
}
export interface ClanInfo {
    clanId: Long;
    name: string;
    created: Long;
    creator: Long;
    motd: string;
    motdTimestamp: Long;
    motdAuthor: Long;
    logo: Uint8Array;
    color: number;
    roles: ClanInfo_Role[];
    members: ClanInfo_Member[];
    invites: ClanInfo_Invite[];
    maxMemberCount: number;
}
export interface ClanInfo_Role {
    roleId: number;
    rank: number;
    name: string;
    canSetMotd: boolean;
    canSetLogo: boolean;
    canInvite: boolean;
    canKick: boolean;
    canPromote: boolean;
    canDemote: boolean;
    canSetPlayerNotes: boolean;
    canAccessLogs: boolean;
}
export interface ClanInfo_Member {
    steamId: Long;
    roleId: number;
    joined: Long;
    lastSeen: Long;
    notes: string;
    online: boolean;
}
export interface ClanInfo_Invite {
    steamId: Long;
    recruiter: Long;
    timestamp: Long;
}
export interface ClanLog {
    clanId: Long;
    logEntries: ClanLog_Entry[];
}
export interface ClanLog_Entry {
    timestamp: Long;
    eventKey: string;
    arg1: string;
    arg2: string;
    arg3: string;
    arg4: string;
}
export interface ClanInvitations {
    invitations: ClanInvitations_Invitation[];
}
export interface ClanInvitations_Invitation {
    clanId: Long;
    recruiter: Long;
    timestamp: Long;
}
export interface AppRequest {
    seq: number;
    playerId: Long;
    playerToken: number;
    entityId: number;
    getInfo: AppEmpty | undefined;
    getTime: AppEmpty | undefined;
    getMap: AppEmpty | undefined;
    getTeamInfo: AppEmpty | undefined;
    getTeamChat: AppEmpty | undefined;
    sendTeamMessage: AppSendMessage | undefined;
    getEntityInfo: AppEmpty | undefined;
    setEntityValue: AppSetEntityValue | undefined;
    checkSubscription: AppEmpty | undefined;
    setSubscription: AppFlag | undefined;
    getMapMarkers: AppEmpty | undefined;
    promoteToLeader: AppPromoteToLeader | undefined;
    getClanInfo: AppEmpty | undefined;
    setClanMotd: AppSendMessage | undefined;
    getClanChat: AppEmpty | undefined;
    sendClanMessage: AppSendMessage | undefined;
    getNexusAuth: AppGetNexusAuth | undefined;
    cameraSubscribe: AppCameraSubscribe | undefined;
    cameraUnsubscribe: AppEmpty | undefined;
    cameraInput: AppCameraInput | undefined;
}
export interface AppMessage {
    response: AppResponse | undefined;
    broadcast: AppBroadcast | undefined;
}
export interface AppResponse {
    seq: number;
    success: AppSuccess | undefined;
    error: AppError | undefined;
    info: AppInfo | undefined;
    time: AppTime | undefined;
    map: AppMap | undefined;
    teamInfo: AppTeamInfo | undefined;
    teamChat: AppTeamChat | undefined;
    entityInfo: AppEntityInfo | undefined;
    flag: AppFlag | undefined;
    mapMarkers: AppMapMarkers | undefined;
    clanInfo: AppClanInfo | undefined;
    clanChat: AppClanChat | undefined;
    nexusAuth: AppNexusAuth | undefined;
    cameraSubscribeInfo: AppCameraInfo | undefined;
}
export interface AppBroadcast {
    teamChanged: AppTeamChanged | undefined;
    teamMessage: AppNewTeamMessage | undefined;
    entityChanged: AppEntityChanged | undefined;
    clanChanged: AppClanChanged | undefined;
    clanMessage: AppNewClanMessage | undefined;
    cameraRays: AppCameraRays | undefined;
}
export interface AppEmpty {
}
export interface AppSendMessage {
    message: string;
}
export interface AppSetEntityValue {
    value: boolean;
}
export interface AppPromoteToLeader {
    steamId: Long;
}
export interface AppGetNexusAuth {
    appKey: string;
}
export interface AppSuccess {
}
export interface AppError {
    error: string;
}
export interface AppFlag {
    value: boolean;
}
export interface AppInfo {
    name: string;
    headerImage: string;
    url: string;
    map: string;
    mapSize: number;
    wipeTime: number;
    players: number;
    maxPlayers: number;
    queuedPlayers: number;
    seed: number;
    salt: number;
    logoImage: string;
    nexus: string;
    nexusId: number;
    nexusZone: string;
}
export interface AppTime {
    dayLengthMinutes: number;
    timeScale: number;
    sunrise: number;
    sunset: number;
    time: number;
}
export interface AppMap {
    width: number;
    height: number;
    jpgImage: Uint8Array;
    oceanMargin: number;
    monuments: AppMap_Monument[];
    background: string;
}
export interface AppMap_Monument {
    token: string;
    x: number;
    y: number;
}
export interface AppEntityInfo {
    type: AppEntityType;
    payload: AppEntityPayload | undefined;
}
export interface AppEntityPayload {
    value: boolean;
    items: AppEntityPayload_Item[];
    capacity: number;
    hasProtection: boolean;
    protectionExpiry: number;
}
export interface AppEntityPayload_Item {
    itemId: number;
    quantity: number;
    itemIsBlueprint: boolean;
}
export interface AppTeamInfo {
    leaderSteamId: Long;
    members: AppTeamInfo_Member[];
    mapNotes: AppTeamInfo_Note[];
    leaderMapNotes: AppTeamInfo_Note[];
}
export interface AppTeamInfo_Member {
    steamId: Long;
    name: string;
    x: number;
    y: number;
    isOnline: boolean;
    spawnTime: number;
    isAlive: boolean;
    deathTime: number;
}
export interface AppTeamInfo_Note {
    type: number;
    x: number;
    y: number;
}
export interface AppTeamMessage {
    steamId: Long;
    name: string;
    message: string;
    color: string;
    time: number;
}
export interface AppTeamChat {
    messages: AppTeamMessage[];
}
export interface AppMarker {
    id: number;
    type: AppMarkerType;
    x: number;
    y: number;
    steamId: Long;
    rotation: number;
    radius: number;
    color1: Vector4 | undefined;
    color2: Vector4 | undefined;
    alpha: number;
    name: string;
    outOfStock: boolean;
    sellOrders: AppMarker_SellOrder[];
}
export interface AppMarker_SellOrder {
    itemId: number;
    quantity: number;
    currencyId: number;
    costPerItem: number;
    amountInStock: number;
    itemIsBlueprint: boolean;
    currencyIsBlueprint: boolean;
    itemCondition: number;
    itemConditionMax: number;
}
export interface AppMapMarkers {
    markers: AppMarker[];
}
export interface AppClanInfo {
    clanInfo: ClanInfo | undefined;
}
export interface AppClanMessage {
    steamId: Long;
    name: string;
    message: string;
    time: Long;
}
export interface AppClanChat {
    messages: AppClanMessage[];
}
export interface AppNexusAuth {
    serverId: string;
    playerToken: number;
}
export interface AppTeamChanged {
    playerId: Long;
    teamInfo: AppTeamInfo | undefined;
}
export interface AppNewTeamMessage {
    message: AppTeamMessage | undefined;
}
export interface AppEntityChanged {
    entityId: number;
    payload: AppEntityPayload | undefined;
}
export interface AppClanChanged {
    clanInfo: ClanInfo | undefined;
}
export interface AppNewClanMessage {
    clanId: Long;
    message: AppClanMessage | undefined;
}
export interface AppCameraSubscribe {
    cameraId: string;
}
export interface AppCameraInput {
    buttons: number;
    mouseDelta: Vector2 | undefined;
}
export interface AppCameraInfo {
    width: number;
    height: number;
    nearPlane: number;
    farPlane: number;
    controlFlags: number;
}
export interface AppCameraRays {
    verticalFov: number;
    sampleOffset: number;
    rayData: Uint8Array;
    distance: number;
    entities: AppCameraRays_Entity[];
}
export declare enum AppCameraRays_EntityType {
    Tree = 1,
    Player = 2,
    UNRECOGNIZED = -1
}
export declare function appCameraRays_EntityTypeFromJSON(object: any): AppCameraRays_EntityType;
export declare function appCameraRays_EntityTypeToJSON(object: AppCameraRays_EntityType): string;
export interface AppCameraRays_Entity {
    entityId: number;
    type: AppCameraRays_EntityType;
    position: Vector3 | undefined;
    rotation: Vector3 | undefined;
    size: Vector3 | undefined;
    name: string;
}
export declare const Vector2: {
    encode(message: Vector2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector2;
    fromJSON(object: any): Vector2;
    toJSON(message: Vector2): unknown;
    create<I extends unknown>(base?: I): Vector2;
    fromPartial<I_1 extends unknown>(object: I_1): Vector2;
};
export declare const Vector3: {
    encode(message: Vector3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector3;
    fromJSON(object: any): Vector3;
    toJSON(message: Vector3): unknown;
    create<I extends unknown>(base?: I): Vector3;
    fromPartial<I_1 extends unknown>(object: I_1): Vector3;
};
export declare const Vector4: {
    encode(message: Vector4, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector4;
    fromJSON(object: any): Vector4;
    toJSON(message: Vector4): unknown;
    create<I extends unknown>(base?: I): Vector4;
    fromPartial<I_1 extends unknown>(object: I_1): Vector4;
};
export declare const Half3: {
    encode(message: Half3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Half3;
    fromJSON(object: any): Half3;
    toJSON(message: Half3): unknown;
    create<I extends unknown>(base?: I): Half3;
    fromPartial<I_1 extends unknown>(object: I_1): Half3;
};
export declare const Color: {
    encode(message: Color, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Color;
    fromJSON(object: any): Color;
    toJSON(message: Color): unknown;
    create<I extends unknown>(base?: I): Color;
    fromPartial<I_1 extends unknown>(object: I_1): Color;
};
export declare const Ray: {
    encode(message: Ray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ray;
    fromJSON(object: any): Ray;
    toJSON(message: Ray): unknown;
    create<I extends unknown>(base?: I): Ray;
    fromPartial<I_1 extends unknown>(object: I_1): Ray;
};
export declare const ClanActionResult: {
    encode(message: ClanActionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanActionResult;
    fromJSON(object: any): ClanActionResult;
    toJSON(message: ClanActionResult): unknown;
    create<I extends unknown>(base?: I): ClanActionResult;
    fromPartial<I_1 extends unknown>(object: I_1): ClanActionResult;
};
export declare const ClanInfo: {
    encode(message: ClanInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo;
    fromJSON(object: any): ClanInfo;
    toJSON(message: ClanInfo): unknown;
    create<I extends unknown>(base?: I): ClanInfo;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInfo;
};
export declare const ClanInfo_Role: {
    encode(message: ClanInfo_Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Role;
    fromJSON(object: any): ClanInfo_Role;
    toJSON(message: ClanInfo_Role): unknown;
    create<I extends unknown>(base?: I): ClanInfo_Role;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInfo_Role;
};
export declare const ClanInfo_Member: {
    encode(message: ClanInfo_Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Member;
    fromJSON(object: any): ClanInfo_Member;
    toJSON(message: ClanInfo_Member): unknown;
    create<I extends unknown>(base?: I): ClanInfo_Member;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInfo_Member;
};
export declare const ClanInfo_Invite: {
    encode(message: ClanInfo_Invite, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Invite;
    fromJSON(object: any): ClanInfo_Invite;
    toJSON(message: ClanInfo_Invite): unknown;
    create<I extends unknown>(base?: I): ClanInfo_Invite;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInfo_Invite;
};
export declare const ClanLog: {
    encode(message: ClanLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog;
    fromJSON(object: any): ClanLog;
    toJSON(message: ClanLog): unknown;
    create<I extends unknown>(base?: I): ClanLog;
    fromPartial<I_1 extends unknown>(object: I_1): ClanLog;
};
export declare const ClanLog_Entry: {
    encode(message: ClanLog_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog_Entry;
    fromJSON(object: any): ClanLog_Entry;
    toJSON(message: ClanLog_Entry): unknown;
    create<I extends unknown>(base?: I): ClanLog_Entry;
    fromPartial<I_1 extends unknown>(object: I_1): ClanLog_Entry;
};
export declare const ClanInvitations: {
    encode(message: ClanInvitations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations;
    fromJSON(object: any): ClanInvitations;
    toJSON(message: ClanInvitations): unknown;
    create<I extends unknown>(base?: I): ClanInvitations;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInvitations;
};
export declare const ClanInvitations_Invitation: {
    encode(message: ClanInvitations_Invitation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations_Invitation;
    fromJSON(object: any): ClanInvitations_Invitation;
    toJSON(message: ClanInvitations_Invitation): unknown;
    create<I extends unknown>(base?: I): ClanInvitations_Invitation;
    fromPartial<I_1 extends unknown>(object: I_1): ClanInvitations_Invitation;
};
export declare const AppRequest: {
    encode(message: AppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppRequest;
    fromJSON(object: any): AppRequest;
    toJSON(message: AppRequest): unknown;
    create<I extends unknown>(base?: I): AppRequest;
    fromPartial<I_1 extends unknown>(object: I_1): AppRequest;
};
export declare const AppMessage: {
    encode(message: AppMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMessage;
    fromJSON(object: any): AppMessage;
    toJSON(message: AppMessage): unknown;
    create<I extends unknown>(base?: I): AppMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppMessage;
};
export declare const AppResponse: {
    encode(message: AppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppResponse;
    fromJSON(object: any): AppResponse;
    toJSON(message: AppResponse): unknown;
    create<I extends unknown>(base?: I): AppResponse;
    fromPartial<I_1 extends unknown>(object: I_1): AppResponse;
};
export declare const AppBroadcast: {
    encode(message: AppBroadcast, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppBroadcast;
    fromJSON(object: any): AppBroadcast;
    toJSON(message: AppBroadcast): unknown;
    create<I extends unknown>(base?: I): AppBroadcast;
    fromPartial<I_1 extends unknown>(object: I_1): AppBroadcast;
};
export declare const AppEmpty: {
    encode(_: AppEmpty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEmpty;
    fromJSON(_: any): AppEmpty;
    toJSON(_: AppEmpty): unknown;
    create<I extends unknown>(base?: I): AppEmpty;
    fromPartial<I_1 extends unknown>(_: I_1): AppEmpty;
};
export declare const AppSendMessage: {
    encode(message: AppSendMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSendMessage;
    fromJSON(object: any): AppSendMessage;
    toJSON(message: AppSendMessage): unknown;
    create<I extends unknown>(base?: I): AppSendMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppSendMessage;
};
export declare const AppSetEntityValue: {
    encode(message: AppSetEntityValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSetEntityValue;
    fromJSON(object: any): AppSetEntityValue;
    toJSON(message: AppSetEntityValue): unknown;
    create<I extends unknown>(base?: I): AppSetEntityValue;
    fromPartial<I_1 extends unknown>(object: I_1): AppSetEntityValue;
};
export declare const AppPromoteToLeader: {
    encode(message: AppPromoteToLeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppPromoteToLeader;
    fromJSON(object: any): AppPromoteToLeader;
    toJSON(message: AppPromoteToLeader): unknown;
    create<I extends unknown>(base?: I): AppPromoteToLeader;
    fromPartial<I_1 extends unknown>(object: I_1): AppPromoteToLeader;
};
export declare const AppGetNexusAuth: {
    encode(message: AppGetNexusAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppGetNexusAuth;
    fromJSON(object: any): AppGetNexusAuth;
    toJSON(message: AppGetNexusAuth): unknown;
    create<I extends unknown>(base?: I): AppGetNexusAuth;
    fromPartial<I_1 extends unknown>(object: I_1): AppGetNexusAuth;
};
export declare const AppSuccess: {
    encode(_: AppSuccess, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSuccess;
    fromJSON(_: any): AppSuccess;
    toJSON(_: AppSuccess): unknown;
    create<I extends unknown>(base?: I): AppSuccess;
    fromPartial<I_1 extends unknown>(_: I_1): AppSuccess;
};
export declare const AppError: {
    encode(message: AppError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppError;
    fromJSON(object: any): AppError;
    toJSON(message: AppError): unknown;
    create<I extends unknown>(base?: I): AppError;
    fromPartial<I_1 extends unknown>(object: I_1): AppError;
};
export declare const AppFlag: {
    encode(message: AppFlag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppFlag;
    fromJSON(object: any): AppFlag;
    toJSON(message: AppFlag): unknown;
    create<I extends unknown>(base?: I): AppFlag;
    fromPartial<I_1 extends unknown>(object: I_1): AppFlag;
};
export declare const AppInfo: {
    encode(message: AppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppInfo;
    fromJSON(object: any): AppInfo;
    toJSON(message: AppInfo): unknown;
    create<I extends unknown>(base?: I): AppInfo;
    fromPartial<I_1 extends unknown>(object: I_1): AppInfo;
};
export declare const AppTime: {
    encode(message: AppTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTime;
    fromJSON(object: any): AppTime;
    toJSON(message: AppTime): unknown;
    create<I extends unknown>(base?: I): AppTime;
    fromPartial<I_1 extends unknown>(object: I_1): AppTime;
};
export declare const AppMap: {
    encode(message: AppMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMap;
    fromJSON(object: any): AppMap;
    toJSON(message: AppMap): unknown;
    create<I extends unknown>(base?: I): AppMap;
    fromPartial<I_1 extends unknown>(object: I_1): AppMap;
};
export declare const AppMap_Monument: {
    encode(message: AppMap_Monument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMap_Monument;
    fromJSON(object: any): AppMap_Monument;
    toJSON(message: AppMap_Monument): unknown;
    create<I extends unknown>(base?: I): AppMap_Monument;
    fromPartial<I_1 extends unknown>(object: I_1): AppMap_Monument;
};
export declare const AppEntityInfo: {
    encode(message: AppEntityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityInfo;
    fromJSON(object: any): AppEntityInfo;
    toJSON(message: AppEntityInfo): unknown;
    create<I extends unknown>(base?: I): AppEntityInfo;
    fromPartial<I_1 extends unknown>(object: I_1): AppEntityInfo;
};
export declare const AppEntityPayload: {
    encode(message: AppEntityPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload;
    fromJSON(object: any): AppEntityPayload;
    toJSON(message: AppEntityPayload): unknown;
    create<I extends unknown>(base?: I): AppEntityPayload;
    fromPartial<I_1 extends unknown>(object: I_1): AppEntityPayload;
};
export declare const AppEntityPayload_Item: {
    encode(message: AppEntityPayload_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload_Item;
    fromJSON(object: any): AppEntityPayload_Item;
    toJSON(message: AppEntityPayload_Item): unknown;
    create<I extends unknown>(base?: I): AppEntityPayload_Item;
    fromPartial<I_1 extends unknown>(object: I_1): AppEntityPayload_Item;
};
export declare const AppTeamInfo: {
    encode(message: AppTeamInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo;
    fromJSON(object: any): AppTeamInfo;
    toJSON(message: AppTeamInfo): unknown;
    create<I extends unknown>(base?: I): AppTeamInfo;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamInfo;
};
export declare const AppTeamInfo_Member: {
    encode(message: AppTeamInfo_Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Member;
    fromJSON(object: any): AppTeamInfo_Member;
    toJSON(message: AppTeamInfo_Member): unknown;
    create<I extends unknown>(base?: I): AppTeamInfo_Member;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamInfo_Member;
};
export declare const AppTeamInfo_Note: {
    encode(message: AppTeamInfo_Note, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Note;
    fromJSON(object: any): AppTeamInfo_Note;
    toJSON(message: AppTeamInfo_Note): unknown;
    create<I extends unknown>(base?: I): AppTeamInfo_Note;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamInfo_Note;
};
export declare const AppTeamMessage: {
    encode(message: AppTeamMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamMessage;
    fromJSON(object: any): AppTeamMessage;
    toJSON(message: AppTeamMessage): unknown;
    create<I extends unknown>(base?: I): AppTeamMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamMessage;
};
export declare const AppTeamChat: {
    encode(message: AppTeamChat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChat;
    fromJSON(object: any): AppTeamChat;
    toJSON(message: AppTeamChat): unknown;
    create<I extends unknown>(base?: I): AppTeamChat;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamChat;
};
export declare const AppMarker: {
    encode(message: AppMarker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker;
    fromJSON(object: any): AppMarker;
    toJSON(message: AppMarker): unknown;
    create<I extends unknown>(base?: I): AppMarker;
    fromPartial<I_1 extends unknown>(object: I_1): AppMarker;
};
export declare const AppMarker_SellOrder: {
    encode(message: AppMarker_SellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker_SellOrder;
    fromJSON(object: any): AppMarker_SellOrder;
    toJSON(message: AppMarker_SellOrder): unknown;
    create<I extends unknown>(base?: I): AppMarker_SellOrder;
    fromPartial<I_1 extends unknown>(object: I_1): AppMarker_SellOrder;
};
export declare const AppMapMarkers: {
    encode(message: AppMapMarkers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMapMarkers;
    fromJSON(object: any): AppMapMarkers;
    toJSON(message: AppMapMarkers): unknown;
    create<I extends unknown>(base?: I): AppMapMarkers;
    fromPartial<I_1 extends unknown>(object: I_1): AppMapMarkers;
};
export declare const AppClanInfo: {
    encode(message: AppClanInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanInfo;
    fromJSON(object: any): AppClanInfo;
    toJSON(message: AppClanInfo): unknown;
    create<I extends unknown>(base?: I): AppClanInfo;
    fromPartial<I_1 extends unknown>(object: I_1): AppClanInfo;
};
export declare const AppClanMessage: {
    encode(message: AppClanMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanMessage;
    fromJSON(object: any): AppClanMessage;
    toJSON(message: AppClanMessage): unknown;
    create<I extends unknown>(base?: I): AppClanMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppClanMessage;
};
export declare const AppClanChat: {
    encode(message: AppClanChat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChat;
    fromJSON(object: any): AppClanChat;
    toJSON(message: AppClanChat): unknown;
    create<I extends unknown>(base?: I): AppClanChat;
    fromPartial<I_1 extends unknown>(object: I_1): AppClanChat;
};
export declare const AppNexusAuth: {
    encode(message: AppNexusAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNexusAuth;
    fromJSON(object: any): AppNexusAuth;
    toJSON(message: AppNexusAuth): unknown;
    create<I extends unknown>(base?: I): AppNexusAuth;
    fromPartial<I_1 extends unknown>(object: I_1): AppNexusAuth;
};
export declare const AppTeamChanged: {
    encode(message: AppTeamChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChanged;
    fromJSON(object: any): AppTeamChanged;
    toJSON(message: AppTeamChanged): unknown;
    create<I extends unknown>(base?: I): AppTeamChanged;
    fromPartial<I_1 extends unknown>(object: I_1): AppTeamChanged;
};
export declare const AppNewTeamMessage: {
    encode(message: AppNewTeamMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNewTeamMessage;
    fromJSON(object: any): AppNewTeamMessage;
    toJSON(message: AppNewTeamMessage): unknown;
    create<I extends unknown>(base?: I): AppNewTeamMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppNewTeamMessage;
};
export declare const AppEntityChanged: {
    encode(message: AppEntityChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityChanged;
    fromJSON(object: any): AppEntityChanged;
    toJSON(message: AppEntityChanged): unknown;
    create<I extends unknown>(base?: I): AppEntityChanged;
    fromPartial<I_1 extends unknown>(object: I_1): AppEntityChanged;
};
export declare const AppClanChanged: {
    encode(message: AppClanChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChanged;
    fromJSON(object: any): AppClanChanged;
    toJSON(message: AppClanChanged): unknown;
    create<I extends unknown>(base?: I): AppClanChanged;
    fromPartial<I_1 extends unknown>(object: I_1): AppClanChanged;
};
export declare const AppNewClanMessage: {
    encode(message: AppNewClanMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNewClanMessage;
    fromJSON(object: any): AppNewClanMessage;
    toJSON(message: AppNewClanMessage): unknown;
    create<I extends unknown>(base?: I): AppNewClanMessage;
    fromPartial<I_1 extends unknown>(object: I_1): AppNewClanMessage;
};
export declare const AppCameraSubscribe: {
    encode(message: AppCameraSubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraSubscribe;
    fromJSON(object: any): AppCameraSubscribe;
    toJSON(message: AppCameraSubscribe): unknown;
    create<I extends unknown>(base?: I): AppCameraSubscribe;
    fromPartial<I_1 extends unknown>(object: I_1): AppCameraSubscribe;
};
export declare const AppCameraInput: {
    encode(message: AppCameraInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraInput;
    fromJSON(object: any): AppCameraInput;
    toJSON(message: AppCameraInput): unknown;
    create<I extends unknown>(base?: I): AppCameraInput;
    fromPartial<I_1 extends unknown>(object: I_1): AppCameraInput;
};
export declare const AppCameraInfo: {
    encode(message: AppCameraInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraInfo;
    fromJSON(object: any): AppCameraInfo;
    toJSON(message: AppCameraInfo): unknown;
    create<I extends unknown>(base?: I): AppCameraInfo;
    fromPartial<I_1 extends unknown>(object: I_1): AppCameraInfo;
};
export declare const AppCameraRays: {
    encode(message: AppCameraRays, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraRays;
    fromJSON(object: any): AppCameraRays;
    toJSON(message: AppCameraRays): unknown;
    create<I extends unknown>(base?: I): AppCameraRays;
    fromPartial<I_1 extends unknown>(object: I_1): AppCameraRays;
};
export declare const AppCameraRays_Entity: {
    encode(message: AppCameraRays_Entity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppCameraRays_Entity;
    fromJSON(object: any): AppCameraRays_Entity;
    toJSON(message: AppCameraRays_Entity): unknown;
    create<I extends unknown>(base?: I): AppCameraRays_Entity;
    fromPartial<I_1 extends unknown>(object: I_1): AppCameraRays_Entity;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
