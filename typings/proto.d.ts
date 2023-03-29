import * as _m0 from "protobufjs/minimal";
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
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export interface Half3 {
    x: number;
    y: number;
    z: number;
}
export interface Ray {
    origin: Vector3 | undefined;
    direction: Vector3 | undefined;
}
export interface Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
}
export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface Vector2 {
    x: number;
    y: number;
}
export interface ClanActionResult {
    requestId: number;
    result: number;
    hasClanInfo: boolean;
    clanInfo: ClanInfo | undefined;
}
export interface ClanInfo {
    clanId: number;
    name: string;
    created: number;
    creator: number;
    motd: string;
    motdTimestamp: number;
    motdAuthor: number;
    logo: Uint8Array;
    color: number;
    roles: ClanInfo_Role[];
    members: ClanInfo_Member[];
    invites: ClanInfo_Invite[];
    maxMemberCount: number[];
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
    steamId: number;
    roleId: number;
    joined: number;
    lastSeen: number;
    notes: string;
    online: boolean;
}
export interface ClanInfo_Invite {
    steamId: number;
    recruiter: number;
    timestamp: number;
}
export interface ClanLog {
    clanId: number;
    logEntries: ClanLog_Entry[];
}
export interface ClanLog_Entry {
    timestamp: number;
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
    clanId: number;
    recruiter: number;
    timestamp: number;
}
export interface AppRequest {
    seq: number;
    playerId: number;
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
}
export interface AppBroadcast {
    teamChanged: AppTeamChanged | undefined;
    teamMessage: AppNewTeamMessage | undefined;
    entityChanged: AppEntityChanged | undefined;
    clanChanged: AppClanChanged | undefined;
    clanMessage: AppNewClanMessage | undefined;
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
    steamId: number;
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
    leaderSteamId: number;
    members: AppTeamInfo_Member[];
    mapNotes: AppTeamInfo_Note[];
    leaderMapNotes: AppTeamInfo_Note[];
}
export interface AppTeamInfo_Member {
    steamId: number;
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
    steamId: number;
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
    steamId: number;
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
    steamId: number;
    name: string;
    message: string;
    time: number;
}
export interface AppClanChat {
    messages: AppClanMessage[];
}
export interface AppNexusAuth {
    serverId: string;
    playerToken: number;
}
export interface AppTeamChanged {
    playerId: number;
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
    clanId: number;
    message: AppClanMessage | undefined;
}
export declare const Vector3: {
    encode(message: Vector3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector3;
    fromJSON(object: any): Vector3;
    toJSON(message: Vector3): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K in Exclude<keyof I, keyof Vector3>]: never; }>(base?: I): Vector3;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Vector3>]: never; }>(object: I_1): Vector3;
};
export declare const Half3: {
    encode(message: Half3, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Half3;
    fromJSON(object: any): Half3;
    toJSON(message: Half3): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K in Exclude<keyof I, keyof Half3>]: never; }>(base?: I): Half3;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Half3>]: never; }>(object: I_1): Half3;
};
export declare const Ray: {
    encode(message: Ray, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Ray;
    fromJSON(object: any): Ray;
    toJSON(message: Ray): unknown;
    create<I extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
        };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K in Exclude<keyof I["origin"], keyof Vector3>]: never; };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_1 in Exclude<keyof I["direction"], keyof Vector3>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof Ray>]: never; }>(base?: I): Ray;
    fromPartial<I_1 extends {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
        };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
        };
    } & {
        origin?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_3 in Exclude<keyof I_1["origin"], keyof Vector3>]: never; };
        direction?: {
            x?: number;
            y?: number;
            z?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
        } & { [K_4 in Exclude<keyof I_1["direction"], keyof Vector3>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof Ray>]: never; }>(object: I_1): Ray;
};
export declare const Vector4: {
    encode(message: Vector4, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector4;
    fromJSON(object: any): Vector4;
    toJSON(message: Vector4): unknown;
    create<I extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K in Exclude<keyof I, keyof Vector4>]: never; }>(base?: I): Vector4;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & {
        x?: number;
        y?: number;
        z?: number;
        w?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Vector4>]: never; }>(object: I_1): Vector4;
};
export declare const Color: {
    encode(message: Color, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Color;
    fromJSON(object: any): Color;
    toJSON(message: Color): unknown;
    create<I extends {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & { [K in Exclude<keyof I, keyof Color>]: never; }>(base?: I): Color;
    fromPartial<I_1 extends {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & {
        r?: number;
        g?: number;
        b?: number;
        a?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Color>]: never; }>(object: I_1): Color;
};
export declare const Vector2: {
    encode(message: Vector2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vector2;
    fromJSON(object: any): Vector2;
    toJSON(message: Vector2): unknown;
    create<I extends {
        x?: number;
        y?: number;
    } & {
        x?: number;
        y?: number;
    } & { [K in Exclude<keyof I, keyof Vector2>]: never; }>(base?: I): Vector2;
    fromPartial<I_1 extends {
        x?: number;
        y?: number;
    } & {
        x?: number;
        y?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof Vector2>]: never; }>(object: I_1): Vector2;
};
export declare const ClanActionResult: {
    encode(message: ClanActionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanActionResult;
    fromJSON(object: any): ClanActionResult;
    toJSON(message: ClanActionResult): unknown;
    create<I extends {
        requestId?: number;
        result?: number;
        hasClanInfo?: boolean;
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        requestId?: number;
        result?: number;
        hasClanInfo?: boolean;
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K in Exclude<keyof I["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_1 in Exclude<keyof I["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_2 in Exclude<keyof I["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_3 in Exclude<keyof I["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_4 in Exclude<keyof I["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_5 in Exclude<keyof I["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_6 in Exclude<keyof I["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_7 in Exclude<keyof I["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof ClanActionResult>]: never; }>(base?: I): ClanActionResult;
    fromPartial<I_1 extends {
        requestId?: number;
        result?: number;
        hasClanInfo?: boolean;
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        requestId?: number;
        result?: number;
        hasClanInfo?: boolean;
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K_9 in Exclude<keyof I_1["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_10 in Exclude<keyof I_1["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_11 in Exclude<keyof I_1["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_12 in Exclude<keyof I_1["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_13 in Exclude<keyof I_1["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_14 in Exclude<keyof I_1["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_15 in Exclude<keyof I_1["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_17 in Exclude<keyof I_1, keyof ClanActionResult>]: never; }>(object: I_1): ClanActionResult;
};
export declare const ClanInfo: {
    encode(message: ClanInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo;
    fromJSON(object: any): ClanInfo;
    toJSON(message: ClanInfo): unknown;
    create<I extends {
        clanId?: number;
        name?: string;
        created?: number;
        creator?: number;
        motd?: string;
        motdTimestamp?: number;
        motdAuthor?: number;
        logo?: Uint8Array;
        color?: number;
        roles?: {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[];
        members?: {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[];
        invites?: {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[];
        maxMemberCount?: number[];
    } & {
        clanId?: number;
        name?: string;
        created?: number;
        creator?: number;
        motd?: string;
        motdTimestamp?: number;
        motdAuthor?: number;
        logo?: Uint8Array;
        color?: number;
        roles?: {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[] & ({
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        } & {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        } & { [K in Exclude<keyof I["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_1 in Exclude<keyof I["roles"], keyof {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[]>]: never; };
        members?: {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[] & ({
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        } & {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        } & { [K_2 in Exclude<keyof I["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_3 in Exclude<keyof I["members"], keyof {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[]>]: never; };
        invites?: {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[] & ({
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        } & {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        } & { [K_4 in Exclude<keyof I["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_5 in Exclude<keyof I["invites"], keyof {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[]>]: never; };
        maxMemberCount?: number[] & number[] & { [K_6 in Exclude<keyof I["maxMemberCount"], keyof number[]>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof ClanInfo>]: never; }>(base?: I): ClanInfo;
    fromPartial<I_1 extends {
        clanId?: number;
        name?: string;
        created?: number;
        creator?: number;
        motd?: string;
        motdTimestamp?: number;
        motdAuthor?: number;
        logo?: Uint8Array;
        color?: number;
        roles?: {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[];
        members?: {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[];
        invites?: {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[];
        maxMemberCount?: number[];
    } & {
        clanId?: number;
        name?: string;
        created?: number;
        creator?: number;
        motd?: string;
        motdTimestamp?: number;
        motdAuthor?: number;
        logo?: Uint8Array;
        color?: number;
        roles?: {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[] & ({
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        } & {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        } & { [K_8 in Exclude<keyof I_1["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_9 in Exclude<keyof I_1["roles"], keyof {
            roleId?: number;
            rank?: number;
            name?: string;
            canSetMotd?: boolean;
            canSetLogo?: boolean;
            canInvite?: boolean;
            canKick?: boolean;
            canPromote?: boolean;
            canDemote?: boolean;
            canSetPlayerNotes?: boolean;
            canAccessLogs?: boolean;
        }[]>]: never; };
        members?: {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[] & ({
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        } & {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        } & { [K_10 in Exclude<keyof I_1["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_11 in Exclude<keyof I_1["members"], keyof {
            steamId?: number;
            roleId?: number;
            joined?: number;
            lastSeen?: number;
            notes?: string;
            online?: boolean;
        }[]>]: never; };
        invites?: {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[] & ({
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        } & {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        } & { [K_12 in Exclude<keyof I_1["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_13 in Exclude<keyof I_1["invites"], keyof {
            steamId?: number;
            recruiter?: number;
            timestamp?: number;
        }[]>]: never; };
        maxMemberCount?: number[] & number[] & { [K_14 in Exclude<keyof I_1["maxMemberCount"], keyof number[]>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof ClanInfo>]: never; }>(object: I_1): ClanInfo;
};
export declare const ClanInfo_Role: {
    encode(message: ClanInfo_Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Role;
    fromJSON(object: any): ClanInfo_Role;
    toJSON(message: ClanInfo_Role): unknown;
    create<I extends {
        roleId?: number;
        rank?: number;
        name?: string;
        canSetMotd?: boolean;
        canSetLogo?: boolean;
        canInvite?: boolean;
        canKick?: boolean;
        canPromote?: boolean;
        canDemote?: boolean;
        canSetPlayerNotes?: boolean;
        canAccessLogs?: boolean;
    } & {
        roleId?: number;
        rank?: number;
        name?: string;
        canSetMotd?: boolean;
        canSetLogo?: boolean;
        canInvite?: boolean;
        canKick?: boolean;
        canPromote?: boolean;
        canDemote?: boolean;
        canSetPlayerNotes?: boolean;
        canAccessLogs?: boolean;
    } & { [K in Exclude<keyof I, keyof ClanInfo_Role>]: never; }>(base?: I): ClanInfo_Role;
    fromPartial<I_1 extends {
        roleId?: number;
        rank?: number;
        name?: string;
        canSetMotd?: boolean;
        canSetLogo?: boolean;
        canInvite?: boolean;
        canKick?: boolean;
        canPromote?: boolean;
        canDemote?: boolean;
        canSetPlayerNotes?: boolean;
        canAccessLogs?: boolean;
    } & {
        roleId?: number;
        rank?: number;
        name?: string;
        canSetMotd?: boolean;
        canSetLogo?: boolean;
        canInvite?: boolean;
        canKick?: boolean;
        canPromote?: boolean;
        canDemote?: boolean;
        canSetPlayerNotes?: boolean;
        canAccessLogs?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof ClanInfo_Role>]: never; }>(object: I_1): ClanInfo_Role;
};
export declare const ClanInfo_Member: {
    encode(message: ClanInfo_Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Member;
    fromJSON(object: any): ClanInfo_Member;
    toJSON(message: ClanInfo_Member): unknown;
    create<I extends {
        steamId?: number;
        roleId?: number;
        joined?: number;
        lastSeen?: number;
        notes?: string;
        online?: boolean;
    } & {
        steamId?: number;
        roleId?: number;
        joined?: number;
        lastSeen?: number;
        notes?: string;
        online?: boolean;
    } & { [K in Exclude<keyof I, keyof ClanInfo_Member>]: never; }>(base?: I): ClanInfo_Member;
    fromPartial<I_1 extends {
        steamId?: number;
        roleId?: number;
        joined?: number;
        lastSeen?: number;
        notes?: string;
        online?: boolean;
    } & {
        steamId?: number;
        roleId?: number;
        joined?: number;
        lastSeen?: number;
        notes?: string;
        online?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof ClanInfo_Member>]: never; }>(object: I_1): ClanInfo_Member;
};
export declare const ClanInfo_Invite: {
    encode(message: ClanInfo_Invite, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInfo_Invite;
    fromJSON(object: any): ClanInfo_Invite;
    toJSON(message: ClanInfo_Invite): unknown;
    create<I extends {
        steamId?: number;
        recruiter?: number;
        timestamp?: number;
    } & {
        steamId?: number;
        recruiter?: number;
        timestamp?: number;
    } & { [K in Exclude<keyof I, keyof ClanInfo_Invite>]: never; }>(base?: I): ClanInfo_Invite;
    fromPartial<I_1 extends {
        steamId?: number;
        recruiter?: number;
        timestamp?: number;
    } & {
        steamId?: number;
        recruiter?: number;
        timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ClanInfo_Invite>]: never; }>(object: I_1): ClanInfo_Invite;
};
export declare const ClanLog: {
    encode(message: ClanLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog;
    fromJSON(object: any): ClanLog;
    toJSON(message: ClanLog): unknown;
    create<I extends {
        clanId?: number;
        logEntries?: {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[];
    } & {
        clanId?: number;
        logEntries?: {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[] & ({
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        } & {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        } & { [K in Exclude<keyof I["logEntries"][number], keyof ClanLog_Entry>]: never; })[] & { [K_1 in Exclude<keyof I["logEntries"], keyof {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof ClanLog>]: never; }>(base?: I): ClanLog;
    fromPartial<I_1 extends {
        clanId?: number;
        logEntries?: {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[];
    } & {
        clanId?: number;
        logEntries?: {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[] & ({
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        } & {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        } & { [K_3 in Exclude<keyof I_1["logEntries"][number], keyof ClanLog_Entry>]: never; })[] & { [K_4 in Exclude<keyof I_1["logEntries"], keyof {
            timestamp?: number;
            eventKey?: string;
            arg1?: string;
            arg2?: string;
            arg3?: string;
            arg4?: string;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof ClanLog>]: never; }>(object: I_1): ClanLog;
};
export declare const ClanLog_Entry: {
    encode(message: ClanLog_Entry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanLog_Entry;
    fromJSON(object: any): ClanLog_Entry;
    toJSON(message: ClanLog_Entry): unknown;
    create<I extends {
        timestamp?: number;
        eventKey?: string;
        arg1?: string;
        arg2?: string;
        arg3?: string;
        arg4?: string;
    } & {
        timestamp?: number;
        eventKey?: string;
        arg1?: string;
        arg2?: string;
        arg3?: string;
        arg4?: string;
    } & { [K in Exclude<keyof I, keyof ClanLog_Entry>]: never; }>(base?: I): ClanLog_Entry;
    fromPartial<I_1 extends {
        timestamp?: number;
        eventKey?: string;
        arg1?: string;
        arg2?: string;
        arg3?: string;
        arg4?: string;
    } & {
        timestamp?: number;
        eventKey?: string;
        arg1?: string;
        arg2?: string;
        arg3?: string;
        arg4?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof ClanLog_Entry>]: never; }>(object: I_1): ClanLog_Entry;
};
export declare const ClanInvitations: {
    encode(message: ClanInvitations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations;
    fromJSON(object: any): ClanInvitations;
    toJSON(message: ClanInvitations): unknown;
    create<I extends {
        invitations?: {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[];
    } & {
        invitations?: {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[] & ({
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        } & {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        } & { [K in Exclude<keyof I["invitations"][number], keyof ClanInvitations_Invitation>]: never; })[] & { [K_1 in Exclude<keyof I["invitations"], keyof {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "invitations">]: never; }>(base?: I): ClanInvitations;
    fromPartial<I_1 extends {
        invitations?: {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[];
    } & {
        invitations?: {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[] & ({
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        } & {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        } & { [K_3 in Exclude<keyof I_1["invitations"][number], keyof ClanInvitations_Invitation>]: never; })[] & { [K_4 in Exclude<keyof I_1["invitations"], keyof {
            clanId?: number;
            recruiter?: number;
            timestamp?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "invitations">]: never; }>(object: I_1): ClanInvitations;
};
export declare const ClanInvitations_Invitation: {
    encode(message: ClanInvitations_Invitation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClanInvitations_Invitation;
    fromJSON(object: any): ClanInvitations_Invitation;
    toJSON(message: ClanInvitations_Invitation): unknown;
    create<I extends {
        clanId?: number;
        recruiter?: number;
        timestamp?: number;
    } & {
        clanId?: number;
        recruiter?: number;
        timestamp?: number;
    } & { [K in Exclude<keyof I, keyof ClanInvitations_Invitation>]: never; }>(base?: I): ClanInvitations_Invitation;
    fromPartial<I_1 extends {
        clanId?: number;
        recruiter?: number;
        timestamp?: number;
    } & {
        clanId?: number;
        recruiter?: number;
        timestamp?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof ClanInvitations_Invitation>]: never; }>(object: I_1): ClanInvitations_Invitation;
};
export declare const AppRequest: {
    encode(message: AppRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppRequest;
    fromJSON(object: any): AppRequest;
    toJSON(message: AppRequest): unknown;
    create<I extends {
        seq?: number;
        playerId?: number;
        playerToken?: number;
        entityId?: number;
        getInfo?: {};
        getTime?: {};
        getMap?: {};
        getTeamInfo?: {};
        getTeamChat?: {};
        sendTeamMessage?: {
            message?: string;
        };
        getEntityInfo?: {};
        setEntityValue?: {
            value?: boolean;
        };
        checkSubscription?: {};
        setSubscription?: {
            value?: boolean;
        };
        getMapMarkers?: {};
        promoteToLeader?: {
            steamId?: number;
        };
        getClanInfo?: {};
        setClanMotd?: {
            message?: string;
        };
        getClanChat?: {};
        sendClanMessage?: {
            message?: string;
        };
        getNexusAuth?: {
            appKey?: string;
        };
    } & {
        seq?: number;
        playerId?: number;
        playerToken?: number;
        entityId?: number;
        getInfo?: {} & {} & { [K in Exclude<keyof I["getInfo"], never>]: never; };
        getTime?: {} & {} & { [K_1 in Exclude<keyof I["getTime"], never>]: never; };
        getMap?: {} & {} & { [K_2 in Exclude<keyof I["getMap"], never>]: never; };
        getTeamInfo?: {} & {} & { [K_3 in Exclude<keyof I["getTeamInfo"], never>]: never; };
        getTeamChat?: {} & {} & { [K_4 in Exclude<keyof I["getTeamChat"], never>]: never; };
        sendTeamMessage?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_5 in Exclude<keyof I["sendTeamMessage"], "message">]: never; };
        getEntityInfo?: {} & {} & { [K_6 in Exclude<keyof I["getEntityInfo"], never>]: never; };
        setEntityValue?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_7 in Exclude<keyof I["setEntityValue"], "value">]: never; };
        checkSubscription?: {} & {} & { [K_8 in Exclude<keyof I["checkSubscription"], never>]: never; };
        setSubscription?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_9 in Exclude<keyof I["setSubscription"], "value">]: never; };
        getMapMarkers?: {} & {} & { [K_10 in Exclude<keyof I["getMapMarkers"], never>]: never; };
        promoteToLeader?: {
            steamId?: number;
        } & {
            steamId?: number;
        } & { [K_11 in Exclude<keyof I["promoteToLeader"], "steamId">]: never; };
        getClanInfo?: {} & {} & { [K_12 in Exclude<keyof I["getClanInfo"], never>]: never; };
        setClanMotd?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_13 in Exclude<keyof I["setClanMotd"], "message">]: never; };
        getClanChat?: {} & {} & { [K_14 in Exclude<keyof I["getClanChat"], never>]: never; };
        sendClanMessage?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_15 in Exclude<keyof I["sendClanMessage"], "message">]: never; };
        getNexusAuth?: {
            appKey?: string;
        } & {
            appKey?: string;
        } & { [K_16 in Exclude<keyof I["getNexusAuth"], "appKey">]: never; };
    } & { [K_17 in Exclude<keyof I, keyof AppRequest>]: never; }>(base?: I): AppRequest;
    fromPartial<I_1 extends {
        seq?: number;
        playerId?: number;
        playerToken?: number;
        entityId?: number;
        getInfo?: {};
        getTime?: {};
        getMap?: {};
        getTeamInfo?: {};
        getTeamChat?: {};
        sendTeamMessage?: {
            message?: string;
        };
        getEntityInfo?: {};
        setEntityValue?: {
            value?: boolean;
        };
        checkSubscription?: {};
        setSubscription?: {
            value?: boolean;
        };
        getMapMarkers?: {};
        promoteToLeader?: {
            steamId?: number;
        };
        getClanInfo?: {};
        setClanMotd?: {
            message?: string;
        };
        getClanChat?: {};
        sendClanMessage?: {
            message?: string;
        };
        getNexusAuth?: {
            appKey?: string;
        };
    } & {
        seq?: number;
        playerId?: number;
        playerToken?: number;
        entityId?: number;
        getInfo?: {} & {} & { [K_18 in Exclude<keyof I_1["getInfo"], never>]: never; };
        getTime?: {} & {} & { [K_19 in Exclude<keyof I_1["getTime"], never>]: never; };
        getMap?: {} & {} & { [K_20 in Exclude<keyof I_1["getMap"], never>]: never; };
        getTeamInfo?: {} & {} & { [K_21 in Exclude<keyof I_1["getTeamInfo"], never>]: never; };
        getTeamChat?: {} & {} & { [K_22 in Exclude<keyof I_1["getTeamChat"], never>]: never; };
        sendTeamMessage?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_23 in Exclude<keyof I_1["sendTeamMessage"], "message">]: never; };
        getEntityInfo?: {} & {} & { [K_24 in Exclude<keyof I_1["getEntityInfo"], never>]: never; };
        setEntityValue?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_25 in Exclude<keyof I_1["setEntityValue"], "value">]: never; };
        checkSubscription?: {} & {} & { [K_26 in Exclude<keyof I_1["checkSubscription"], never>]: never; };
        setSubscription?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_27 in Exclude<keyof I_1["setSubscription"], "value">]: never; };
        getMapMarkers?: {} & {} & { [K_28 in Exclude<keyof I_1["getMapMarkers"], never>]: never; };
        promoteToLeader?: {
            steamId?: number;
        } & {
            steamId?: number;
        } & { [K_29 in Exclude<keyof I_1["promoteToLeader"], "steamId">]: never; };
        getClanInfo?: {} & {} & { [K_30 in Exclude<keyof I_1["getClanInfo"], never>]: never; };
        setClanMotd?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_31 in Exclude<keyof I_1["setClanMotd"], "message">]: never; };
        getClanChat?: {} & {} & { [K_32 in Exclude<keyof I_1["getClanChat"], never>]: never; };
        sendClanMessage?: {
            message?: string;
        } & {
            message?: string;
        } & { [K_33 in Exclude<keyof I_1["sendClanMessage"], "message">]: never; };
        getNexusAuth?: {
            appKey?: string;
        } & {
            appKey?: string;
        } & { [K_34 in Exclude<keyof I_1["getNexusAuth"], "appKey">]: never; };
    } & { [K_35 in Exclude<keyof I_1, keyof AppRequest>]: never; }>(object: I_1): AppRequest;
};
export declare const AppMessage: {
    encode(message: AppMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMessage;
    fromJSON(object: any): AppMessage;
    toJSON(message: AppMessage): unknown;
    create<I extends {
        response?: {
            seq?: number;
            success?: {};
            error?: {
                error?: string;
            };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            flag?: {
                value?: boolean;
            };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            };
        };
        broadcast?: {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            };
        };
    } & {
        response?: {
            seq?: number;
            success?: {};
            error?: {
                error?: string;
            };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            flag?: {
                value?: boolean;
            };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            };
        } & {
            seq?: number;
            success?: {} & {} & { [K in Exclude<keyof I["response"]["success"], never>]: never; };
            error?: {
                error?: string;
            } & {
                error?: string;
            } & { [K_1 in Exclude<keyof I["response"]["error"], "error">]: never; };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            } & {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            } & { [K_2 in Exclude<keyof I["response"]["info"], keyof AppInfo>]: never; };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            } & {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            } & { [K_3 in Exclude<keyof I["response"]["time"], keyof AppTime>]: never; };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            } & {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[] & ({
                    token?: string;
                    x?: number;
                    y?: number;
                } & {
                    token?: string;
                    x?: number;
                    y?: number;
                } & { [K_4 in Exclude<keyof I["response"]["map"]["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_5 in Exclude<keyof I["response"]["map"]["monuments"], keyof {
                    token?: string;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                background?: string;
            } & { [K_6 in Exclude<keyof I["response"]["map"], keyof AppMap>]: never; };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            } & {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & { [K_7 in Exclude<keyof I["response"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_8 in Exclude<keyof I["response"]["teamInfo"]["members"], keyof {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[]>]: never; };
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_9 in Exclude<keyof I["response"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_10 in Exclude<keyof I["response"]["teamInfo"]["mapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_11 in Exclude<keyof I["response"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_12 in Exclude<keyof I["response"]["teamInfo"]["leaderMapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
            } & { [K_13 in Exclude<keyof I["response"]["teamInfo"], keyof AppTeamInfo>]: never; };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            } & {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & { [K_14 in Exclude<keyof I["response"]["teamChat"]["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_15 in Exclude<keyof I["response"]["teamChat"]["messages"], keyof {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[]>]: never; };
            } & { [K_16 in Exclude<keyof I["response"]["teamChat"], "messages">]: never; };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            } & {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & { [K_17 in Exclude<keyof I["response"]["entityInfo"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_18 in Exclude<keyof I["response"]["entityInfo"]["payload"]["items"], keyof {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[]>]: never; };
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & { [K_19 in Exclude<keyof I["response"]["entityInfo"]["payload"], keyof AppEntityPayload>]: never; };
            } & { [K_20 in Exclude<keyof I["response"]["entityInfo"], keyof AppEntityInfo>]: never; };
            flag?: {
                value?: boolean;
            } & {
                value?: boolean;
            } & { [K_21 in Exclude<keyof I["response"]["flag"], "value">]: never; };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            } & {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[] & ({
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                } & {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & { [K_22 in Exclude<keyof I["response"]["mapMarkers"]["markers"][number]["color1"], keyof Vector4>]: never; };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & { [K_23 in Exclude<keyof I["response"]["mapMarkers"]["markers"][number]["color2"], keyof Vector4>]: never; };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    } & { [K_24 in Exclude<keyof I["response"]["mapMarkers"]["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_25 in Exclude<keyof I["response"]["mapMarkers"]["markers"][number]["sellOrders"], keyof {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[]>]: never; };
                } & { [K_26 in Exclude<keyof I["response"]["mapMarkers"]["markers"][number], keyof AppMarker>]: never; })[] & { [K_27 in Exclude<keyof I["response"]["mapMarkers"]["markers"], keyof {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[]>]: never; };
            } & { [K_28 in Exclude<keyof I["response"]["mapMarkers"], "markers">]: never; };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            } & {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                } & {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[] & ({
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & { [K_29 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_30 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["roles"], keyof {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[]>]: never; };
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[] & ({
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & { [K_31 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_32 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["members"], keyof {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[]>]: never; };
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[] & ({
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & { [K_33 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_34 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["invites"], keyof {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[]>]: never; };
                    maxMemberCount?: number[] & number[] & { [K_35 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
                } & { [K_36 in Exclude<keyof I["response"]["clanInfo"]["clanInfo"], keyof ClanInfo>]: never; };
            } & { [K_37 in Exclude<keyof I["response"]["clanInfo"], "clanInfo">]: never; };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            } & {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & { [K_38 in Exclude<keyof I["response"]["clanChat"]["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_39 in Exclude<keyof I["response"]["clanChat"]["messages"], keyof {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[]>]: never; };
            } & { [K_40 in Exclude<keyof I["response"]["clanChat"], "messages">]: never; };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            } & {
                serverId?: string;
                playerToken?: number;
            } & { [K_41 in Exclude<keyof I["response"]["nexusAuth"], keyof AppNexusAuth>]: never; };
        } & { [K_42 in Exclude<keyof I["response"], keyof AppResponse>]: never; };
        broadcast?: {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            };
        } & {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            } & {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                } & {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[] & ({
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    } & {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    } & { [K_43 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_44 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["members"], keyof {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[]>]: never; };
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[] & ({
                        type?: number;
                        x?: number;
                        y?: number;
                    } & {
                        type?: number;
                        x?: number;
                        y?: number;
                    } & { [K_45 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_46 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["mapNotes"], keyof {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[]>]: never; };
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[] & ({
                        type?: number;
                        x?: number;
                        y?: number;
                    } & {
                        type?: number;
                        x?: number;
                        y?: number;
                    } & { [K_47 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_48 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"]["leaderMapNotes"], keyof {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[]>]: never; };
                } & { [K_49 in Exclude<keyof I["broadcast"]["teamChanged"]["teamInfo"], keyof AppTeamInfo>]: never; };
            } & { [K_50 in Exclude<keyof I["broadcast"]["teamChanged"], keyof AppTeamChanged>]: never; };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            } & {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & { [K_51 in Exclude<keyof I["broadcast"]["teamMessage"]["message"], keyof AppTeamMessage>]: never; };
            } & { [K_52 in Exclude<keyof I["broadcast"]["teamMessage"], "message">]: never; };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            } & {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & { [K_53 in Exclude<keyof I["broadcast"]["entityChanged"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_54 in Exclude<keyof I["broadcast"]["entityChanged"]["payload"]["items"], keyof {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[]>]: never; };
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & { [K_55 in Exclude<keyof I["broadcast"]["entityChanged"]["payload"], keyof AppEntityPayload>]: never; };
            } & { [K_56 in Exclude<keyof I["broadcast"]["entityChanged"], keyof AppEntityChanged>]: never; };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            } & {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                } & {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[] & ({
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & { [K_57 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_58 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["roles"], keyof {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[]>]: never; };
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[] & ({
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & { [K_59 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_60 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["members"], keyof {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[]>]: never; };
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[] & ({
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & { [K_61 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_62 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["invites"], keyof {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[]>]: never; };
                    maxMemberCount?: number[] & number[] & { [K_63 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
                } & { [K_64 in Exclude<keyof I["broadcast"]["clanChanged"]["clanInfo"], keyof ClanInfo>]: never; };
            } & { [K_65 in Exclude<keyof I["broadcast"]["clanChanged"], "clanInfo">]: never; };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            } & {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & { [K_66 in Exclude<keyof I["broadcast"]["clanMessage"]["message"], keyof AppClanMessage>]: never; };
            } & { [K_67 in Exclude<keyof I["broadcast"]["clanMessage"], keyof AppNewClanMessage>]: never; };
        } & { [K_68 in Exclude<keyof I["broadcast"], keyof AppBroadcast>]: never; };
    } & { [K_69 in Exclude<keyof I, keyof AppMessage>]: never; }>(base?: I): AppMessage;
    fromPartial<I_1 extends {
        response?: {
            seq?: number;
            success?: {};
            error?: {
                error?: string;
            };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            flag?: {
                value?: boolean;
            };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            };
        };
        broadcast?: {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            };
        };
    } & {
        response?: {
            seq?: number;
            success?: {};
            error?: {
                error?: string;
            };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            flag?: {
                value?: boolean;
            };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            };
        } & {
            seq?: number;
            success?: {} & {} & { [K_70 in Exclude<keyof I_1["response"]["success"], never>]: never; };
            error?: {
                error?: string;
            } & {
                error?: string;
            } & { [K_71 in Exclude<keyof I_1["response"]["error"], "error">]: never; };
            info?: {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            } & {
                name?: string;
                headerImage?: string;
                url?: string;
                map?: string;
                mapSize?: number;
                wipeTime?: number;
                players?: number;
                maxPlayers?: number;
                queuedPlayers?: number;
                seed?: number;
                salt?: number;
                logoImage?: string;
                nexus?: string;
                nexusId?: number;
                nexusZone?: string;
            } & { [K_72 in Exclude<keyof I_1["response"]["info"], keyof AppInfo>]: never; };
            time?: {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            } & {
                dayLengthMinutes?: number;
                timeScale?: number;
                sunrise?: number;
                sunset?: number;
                time?: number;
            } & { [K_73 in Exclude<keyof I_1["response"]["time"], keyof AppTime>]: never; };
            map?: {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[];
                background?: string;
            } & {
                width?: number;
                height?: number;
                jpgImage?: Uint8Array;
                oceanMargin?: number;
                monuments?: {
                    token?: string;
                    x?: number;
                    y?: number;
                }[] & ({
                    token?: string;
                    x?: number;
                    y?: number;
                } & {
                    token?: string;
                    x?: number;
                    y?: number;
                } & { [K_74 in Exclude<keyof I_1["response"]["map"]["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_75 in Exclude<keyof I_1["response"]["map"]["monuments"], keyof {
                    token?: string;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                background?: string;
            } & { [K_76 in Exclude<keyof I_1["response"]["map"], keyof AppMap>]: never; };
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            } & {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & { [K_77 in Exclude<keyof I_1["response"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_78 in Exclude<keyof I_1["response"]["teamInfo"]["members"], keyof {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[]>]: never; };
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_79 in Exclude<keyof I_1["response"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_80 in Exclude<keyof I_1["response"]["teamInfo"]["mapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_81 in Exclude<keyof I_1["response"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_82 in Exclude<keyof I_1["response"]["teamInfo"]["leaderMapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
            } & { [K_83 in Exclude<keyof I_1["response"]["teamInfo"], keyof AppTeamInfo>]: never; };
            teamChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[];
            } & {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & { [K_84 in Exclude<keyof I_1["response"]["teamChat"]["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_85 in Exclude<keyof I_1["response"]["teamChat"]["messages"], keyof {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                }[]>]: never; };
            } & { [K_86 in Exclude<keyof I_1["response"]["teamChat"], "messages">]: never; };
            entityInfo?: {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            } & {
                type?: AppEntityType;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & { [K_87 in Exclude<keyof I_1["response"]["entityInfo"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_88 in Exclude<keyof I_1["response"]["entityInfo"]["payload"]["items"], keyof {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[]>]: never; };
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & { [K_89 in Exclude<keyof I_1["response"]["entityInfo"]["payload"], keyof AppEntityPayload>]: never; };
            } & { [K_90 in Exclude<keyof I_1["response"]["entityInfo"], keyof AppEntityInfo>]: never; };
            flag?: {
                value?: boolean;
            } & {
                value?: boolean;
            } & { [K_91 in Exclude<keyof I_1["response"]["flag"], "value">]: never; };
            mapMarkers?: {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[];
            } & {
                markers?: {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[] & ({
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                } & {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & { [K_92 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"][number]["color1"], keyof Vector4>]: never; };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    } & { [K_93 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"][number]["color2"], keyof Vector4>]: never; };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    } & { [K_94 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_95 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"][number]["sellOrders"], keyof {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[]>]: never; };
                } & { [K_96 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"][number], keyof AppMarker>]: never; })[] & { [K_97 in Exclude<keyof I_1["response"]["mapMarkers"]["markers"], keyof {
                    id?: number;
                    type?: AppMarkerType;
                    x?: number;
                    y?: number;
                    steamId?: number;
                    rotation?: number;
                    radius?: number;
                    color1?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    color2?: {
                        x?: number;
                        y?: number;
                        z?: number;
                        w?: number;
                    };
                    alpha?: number;
                    name?: string;
                    outOfStock?: boolean;
                    sellOrders?: {
                        itemId?: number;
                        quantity?: number;
                        currencyId?: number;
                        costPerItem?: number;
                        amountInStock?: number;
                        itemIsBlueprint?: boolean;
                        currencyIsBlueprint?: boolean;
                        itemCondition?: number;
                        itemConditionMax?: number;
                    }[];
                }[]>]: never; };
            } & { [K_98 in Exclude<keyof I_1["response"]["mapMarkers"], "markers">]: never; };
            clanInfo?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            } & {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                } & {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[] & ({
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & { [K_99 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_100 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["roles"], keyof {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[]>]: never; };
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[] & ({
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & { [K_101 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_102 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["members"], keyof {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[]>]: never; };
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[] & ({
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & { [K_103 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_104 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["invites"], keyof {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[]>]: never; };
                    maxMemberCount?: number[] & number[] & { [K_105 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
                } & { [K_106 in Exclude<keyof I_1["response"]["clanInfo"]["clanInfo"], keyof ClanInfo>]: never; };
            } & { [K_107 in Exclude<keyof I_1["response"]["clanInfo"], "clanInfo">]: never; };
            clanChat?: {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[];
            } & {
                messages?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & { [K_108 in Exclude<keyof I_1["response"]["clanChat"]["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_109 in Exclude<keyof I_1["response"]["clanChat"]["messages"], keyof {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                }[]>]: never; };
            } & { [K_110 in Exclude<keyof I_1["response"]["clanChat"], "messages">]: never; };
            nexusAuth?: {
                serverId?: string;
                playerToken?: number;
            } & {
                serverId?: string;
                playerToken?: number;
            } & { [K_111 in Exclude<keyof I_1["response"]["nexusAuth"], keyof AppNexusAuth>]: never; };
        } & { [K_112 in Exclude<keyof I_1["response"], keyof AppResponse>]: never; };
        broadcast?: {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            };
        } & {
            teamChanged?: {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                };
            } & {
                playerId?: number;
                teamInfo?: {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[];
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[];
                } & {
                    leaderSteamId?: number;
                    members?: {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[] & ({
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    } & {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    } & { [K_113 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_114 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["members"], keyof {
                        steamId?: number;
                        name?: string;
                        x?: number;
                        y?: number;
                        isOnline?: boolean;
                        spawnTime?: number;
                        isAlive?: boolean;
                        deathTime?: number;
                    }[]>]: never; };
                    mapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[] & ({
                        type?: number;
                        x?: number;
                        y?: number;
                    } & {
                        type?: number;
                        x?: number;
                        y?: number;
                    } & { [K_115 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_116 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["mapNotes"], keyof {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[]>]: never; };
                    leaderMapNotes?: {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[] & ({
                        type?: number;
                        x?: number;
                        y?: number;
                    } & {
                        type?: number;
                        x?: number;
                        y?: number;
                    } & { [K_117 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_118 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"]["leaderMapNotes"], keyof {
                        type?: number;
                        x?: number;
                        y?: number;
                    }[]>]: never; };
                } & { [K_119 in Exclude<keyof I_1["broadcast"]["teamChanged"]["teamInfo"], keyof AppTeamInfo>]: never; };
            } & { [K_120 in Exclude<keyof I_1["broadcast"]["teamChanged"], keyof AppTeamChanged>]: never; };
            teamMessage?: {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                };
            } & {
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    color?: string;
                    time?: number;
                } & { [K_121 in Exclude<keyof I_1["broadcast"]["teamMessage"]["message"], keyof AppTeamMessage>]: never; };
            } & { [K_122 in Exclude<keyof I_1["broadcast"]["teamMessage"], "message">]: never; };
            entityChanged?: {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                };
            } & {
                entityId?: number;
                payload?: {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[];
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & {
                    value?: boolean;
                    items?: {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[] & ({
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    } & { [K_123 in Exclude<keyof I_1["broadcast"]["entityChanged"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_124 in Exclude<keyof I_1["broadcast"]["entityChanged"]["payload"]["items"], keyof {
                        itemId?: number;
                        quantity?: number;
                        itemIsBlueprint?: boolean;
                    }[]>]: never; };
                    capacity?: number;
                    hasProtection?: boolean;
                    protectionExpiry?: number;
                } & { [K_125 in Exclude<keyof I_1["broadcast"]["entityChanged"]["payload"], keyof AppEntityPayload>]: never; };
            } & { [K_126 in Exclude<keyof I_1["broadcast"]["entityChanged"], keyof AppEntityChanged>]: never; };
            clanChanged?: {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                };
            } & {
                clanInfo?: {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[];
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[];
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[];
                    maxMemberCount?: number[];
                } & {
                    clanId?: number;
                    name?: string;
                    created?: number;
                    creator?: number;
                    motd?: string;
                    motdTimestamp?: number;
                    motdAuthor?: number;
                    logo?: Uint8Array;
                    color?: number;
                    roles?: {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[] & ({
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    } & { [K_127 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_128 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["roles"], keyof {
                        roleId?: number;
                        rank?: number;
                        name?: string;
                        canSetMotd?: boolean;
                        canSetLogo?: boolean;
                        canInvite?: boolean;
                        canKick?: boolean;
                        canPromote?: boolean;
                        canDemote?: boolean;
                        canSetPlayerNotes?: boolean;
                        canAccessLogs?: boolean;
                    }[]>]: never; };
                    members?: {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[] & ({
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    } & { [K_129 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_130 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["members"], keyof {
                        steamId?: number;
                        roleId?: number;
                        joined?: number;
                        lastSeen?: number;
                        notes?: string;
                        online?: boolean;
                    }[]>]: never; };
                    invites?: {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[] & ({
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    } & { [K_131 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_132 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["invites"], keyof {
                        steamId?: number;
                        recruiter?: number;
                        timestamp?: number;
                    }[]>]: never; };
                    maxMemberCount?: number[] & number[] & { [K_133 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
                } & { [K_134 in Exclude<keyof I_1["broadcast"]["clanChanged"]["clanInfo"], keyof ClanInfo>]: never; };
            } & { [K_135 in Exclude<keyof I_1["broadcast"]["clanChanged"], "clanInfo">]: never; };
            clanMessage?: {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                };
            } & {
                clanId?: number;
                message?: {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    message?: string;
                    time?: number;
                } & { [K_136 in Exclude<keyof I_1["broadcast"]["clanMessage"]["message"], keyof AppClanMessage>]: never; };
            } & { [K_137 in Exclude<keyof I_1["broadcast"]["clanMessage"], keyof AppNewClanMessage>]: never; };
        } & { [K_138 in Exclude<keyof I_1["broadcast"], keyof AppBroadcast>]: never; };
    } & { [K_139 in Exclude<keyof I_1, keyof AppMessage>]: never; }>(object: I_1): AppMessage;
};
export declare const AppResponse: {
    encode(message: AppResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppResponse;
    fromJSON(object: any): AppResponse;
    toJSON(message: AppResponse): unknown;
    create<I extends {
        seq?: number;
        success?: {};
        error?: {
            error?: string;
        };
        info?: {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        };
        time?: {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        };
        map?: {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[];
            background?: string;
        };
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        };
        teamChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[];
        };
        entityInfo?: {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        };
        flag?: {
            value?: boolean;
        };
        mapMarkers?: {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[];
        };
        clanInfo?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        };
        clanChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[];
        };
        nexusAuth?: {
            serverId?: string;
            playerToken?: number;
        };
    } & {
        seq?: number;
        success?: {} & {} & { [K in Exclude<keyof I["success"], never>]: never; };
        error?: {
            error?: string;
        } & {
            error?: string;
        } & { [K_1 in Exclude<keyof I["error"], "error">]: never; };
        info?: {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        } & {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        } & { [K_2 in Exclude<keyof I["info"], keyof AppInfo>]: never; };
        time?: {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        } & {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        } & { [K_3 in Exclude<keyof I["time"], keyof AppTime>]: never; };
        map?: {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[];
            background?: string;
        } & {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[] & ({
                token?: string;
                x?: number;
                y?: number;
            } & {
                token?: string;
                x?: number;
                y?: number;
            } & { [K_4 in Exclude<keyof I["map"]["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_5 in Exclude<keyof I["map"]["monuments"], keyof {
                token?: string;
                x?: number;
                y?: number;
            }[]>]: never; };
            background?: string;
        } & { [K_6 in Exclude<keyof I["map"], keyof AppMap>]: never; };
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        } & {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & { [K_7 in Exclude<keyof I["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_8 in Exclude<keyof I["teamInfo"]["members"], keyof {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[]>]: never; };
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_9 in Exclude<keyof I["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_10 in Exclude<keyof I["teamInfo"]["mapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_11 in Exclude<keyof I["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_12 in Exclude<keyof I["teamInfo"]["leaderMapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
        } & { [K_13 in Exclude<keyof I["teamInfo"], keyof AppTeamInfo>]: never; };
        teamChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[];
        } & {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & { [K_14 in Exclude<keyof I["teamChat"]["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_15 in Exclude<keyof I["teamChat"]["messages"], keyof {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[]>]: never; };
        } & { [K_16 in Exclude<keyof I["teamChat"], "messages">]: never; };
        entityInfo?: {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        } & {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & { [K_17 in Exclude<keyof I["entityInfo"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_18 in Exclude<keyof I["entityInfo"]["payload"]["items"], keyof {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[]>]: never; };
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & { [K_19 in Exclude<keyof I["entityInfo"]["payload"], keyof AppEntityPayload>]: never; };
        } & { [K_20 in Exclude<keyof I["entityInfo"], keyof AppEntityInfo>]: never; };
        flag?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_21 in Exclude<keyof I["flag"], "value">]: never; };
        mapMarkers?: {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[];
        } & {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[] & ({
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            } & {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_22 in Exclude<keyof I["mapMarkers"]["markers"][number]["color1"], keyof Vector4>]: never; };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_23 in Exclude<keyof I["mapMarkers"]["markers"][number]["color2"], keyof Vector4>]: never; };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                } & {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                } & { [K_24 in Exclude<keyof I["mapMarkers"]["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_25 in Exclude<keyof I["mapMarkers"]["markers"][number]["sellOrders"], keyof {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[]>]: never; };
            } & { [K_26 in Exclude<keyof I["mapMarkers"]["markers"][number], keyof AppMarker>]: never; })[] & { [K_27 in Exclude<keyof I["mapMarkers"]["markers"], keyof {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[]>]: never; };
        } & { [K_28 in Exclude<keyof I["mapMarkers"], "markers">]: never; };
        clanInfo?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        } & {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            } & {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[] & ({
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & { [K_29 in Exclude<keyof I["clanInfo"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_30 in Exclude<keyof I["clanInfo"]["clanInfo"]["roles"], keyof {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[]>]: never; };
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[] & ({
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & { [K_31 in Exclude<keyof I["clanInfo"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_32 in Exclude<keyof I["clanInfo"]["clanInfo"]["members"], keyof {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[]>]: never; };
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[] & ({
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & { [K_33 in Exclude<keyof I["clanInfo"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_34 in Exclude<keyof I["clanInfo"]["clanInfo"]["invites"], keyof {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[]>]: never; };
                maxMemberCount?: number[] & number[] & { [K_35 in Exclude<keyof I["clanInfo"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
            } & { [K_36 in Exclude<keyof I["clanInfo"]["clanInfo"], keyof ClanInfo>]: never; };
        } & { [K_37 in Exclude<keyof I["clanInfo"], "clanInfo">]: never; };
        clanChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[];
        } & {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & { [K_38 in Exclude<keyof I["clanChat"]["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_39 in Exclude<keyof I["clanChat"]["messages"], keyof {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[]>]: never; };
        } & { [K_40 in Exclude<keyof I["clanChat"], "messages">]: never; };
        nexusAuth?: {
            serverId?: string;
            playerToken?: number;
        } & {
            serverId?: string;
            playerToken?: number;
        } & { [K_41 in Exclude<keyof I["nexusAuth"], keyof AppNexusAuth>]: never; };
    } & { [K_42 in Exclude<keyof I, keyof AppResponse>]: never; }>(base?: I): AppResponse;
    fromPartial<I_1 extends {
        seq?: number;
        success?: {};
        error?: {
            error?: string;
        };
        info?: {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        };
        time?: {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        };
        map?: {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[];
            background?: string;
        };
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        };
        teamChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[];
        };
        entityInfo?: {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        };
        flag?: {
            value?: boolean;
        };
        mapMarkers?: {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[];
        };
        clanInfo?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        };
        clanChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[];
        };
        nexusAuth?: {
            serverId?: string;
            playerToken?: number;
        };
    } & {
        seq?: number;
        success?: {} & {} & { [K_43 in Exclude<keyof I_1["success"], never>]: never; };
        error?: {
            error?: string;
        } & {
            error?: string;
        } & { [K_44 in Exclude<keyof I_1["error"], "error">]: never; };
        info?: {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        } & {
            name?: string;
            headerImage?: string;
            url?: string;
            map?: string;
            mapSize?: number;
            wipeTime?: number;
            players?: number;
            maxPlayers?: number;
            queuedPlayers?: number;
            seed?: number;
            salt?: number;
            logoImage?: string;
            nexus?: string;
            nexusId?: number;
            nexusZone?: string;
        } & { [K_45 in Exclude<keyof I_1["info"], keyof AppInfo>]: never; };
        time?: {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        } & {
            dayLengthMinutes?: number;
            timeScale?: number;
            sunrise?: number;
            sunset?: number;
            time?: number;
        } & { [K_46 in Exclude<keyof I_1["time"], keyof AppTime>]: never; };
        map?: {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[];
            background?: string;
        } & {
            width?: number;
            height?: number;
            jpgImage?: Uint8Array;
            oceanMargin?: number;
            monuments?: {
                token?: string;
                x?: number;
                y?: number;
            }[] & ({
                token?: string;
                x?: number;
                y?: number;
            } & {
                token?: string;
                x?: number;
                y?: number;
            } & { [K_47 in Exclude<keyof I_1["map"]["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_48 in Exclude<keyof I_1["map"]["monuments"], keyof {
                token?: string;
                x?: number;
                y?: number;
            }[]>]: never; };
            background?: string;
        } & { [K_49 in Exclude<keyof I_1["map"], keyof AppMap>]: never; };
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        } & {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & { [K_50 in Exclude<keyof I_1["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_51 in Exclude<keyof I_1["teamInfo"]["members"], keyof {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[]>]: never; };
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_52 in Exclude<keyof I_1["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_53 in Exclude<keyof I_1["teamInfo"]["mapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_54 in Exclude<keyof I_1["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_55 in Exclude<keyof I_1["teamInfo"]["leaderMapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
        } & { [K_56 in Exclude<keyof I_1["teamInfo"], keyof AppTeamInfo>]: never; };
        teamChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[];
        } & {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & { [K_57 in Exclude<keyof I_1["teamChat"]["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_58 in Exclude<keyof I_1["teamChat"]["messages"], keyof {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            }[]>]: never; };
        } & { [K_59 in Exclude<keyof I_1["teamChat"], "messages">]: never; };
        entityInfo?: {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        } & {
            type?: AppEntityType;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & { [K_60 in Exclude<keyof I_1["entityInfo"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_61 in Exclude<keyof I_1["entityInfo"]["payload"]["items"], keyof {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[]>]: never; };
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & { [K_62 in Exclude<keyof I_1["entityInfo"]["payload"], keyof AppEntityPayload>]: never; };
        } & { [K_63 in Exclude<keyof I_1["entityInfo"], keyof AppEntityInfo>]: never; };
        flag?: {
            value?: boolean;
        } & {
            value?: boolean;
        } & { [K_64 in Exclude<keyof I_1["flag"], "value">]: never; };
        mapMarkers?: {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[];
        } & {
            markers?: {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[] & ({
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            } & {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_65 in Exclude<keyof I_1["mapMarkers"]["markers"][number]["color1"], keyof Vector4>]: never; };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                } & { [K_66 in Exclude<keyof I_1["mapMarkers"]["markers"][number]["color2"], keyof Vector4>]: never; };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                } & {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                } & { [K_67 in Exclude<keyof I_1["mapMarkers"]["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_68 in Exclude<keyof I_1["mapMarkers"]["markers"][number]["sellOrders"], keyof {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[]>]: never; };
            } & { [K_69 in Exclude<keyof I_1["mapMarkers"]["markers"][number], keyof AppMarker>]: never; })[] & { [K_70 in Exclude<keyof I_1["mapMarkers"]["markers"], keyof {
                id?: number;
                type?: AppMarkerType;
                x?: number;
                y?: number;
                steamId?: number;
                rotation?: number;
                radius?: number;
                color1?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                color2?: {
                    x?: number;
                    y?: number;
                    z?: number;
                    w?: number;
                };
                alpha?: number;
                name?: string;
                outOfStock?: boolean;
                sellOrders?: {
                    itemId?: number;
                    quantity?: number;
                    currencyId?: number;
                    costPerItem?: number;
                    amountInStock?: number;
                    itemIsBlueprint?: boolean;
                    currencyIsBlueprint?: boolean;
                    itemCondition?: number;
                    itemConditionMax?: number;
                }[];
            }[]>]: never; };
        } & { [K_71 in Exclude<keyof I_1["mapMarkers"], "markers">]: never; };
        clanInfo?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        } & {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            } & {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[] & ({
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & { [K_72 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_73 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["roles"], keyof {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[]>]: never; };
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[] & ({
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & { [K_74 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_75 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["members"], keyof {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[]>]: never; };
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[] & ({
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & { [K_76 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_77 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["invites"], keyof {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[]>]: never; };
                maxMemberCount?: number[] & number[] & { [K_78 in Exclude<keyof I_1["clanInfo"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
            } & { [K_79 in Exclude<keyof I_1["clanInfo"]["clanInfo"], keyof ClanInfo>]: never; };
        } & { [K_80 in Exclude<keyof I_1["clanInfo"], "clanInfo">]: never; };
        clanChat?: {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[];
        } & {
            messages?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & { [K_81 in Exclude<keyof I_1["clanChat"]["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_82 in Exclude<keyof I_1["clanChat"]["messages"], keyof {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            }[]>]: never; };
        } & { [K_83 in Exclude<keyof I_1["clanChat"], "messages">]: never; };
        nexusAuth?: {
            serverId?: string;
            playerToken?: number;
        } & {
            serverId?: string;
            playerToken?: number;
        } & { [K_84 in Exclude<keyof I_1["nexusAuth"], keyof AppNexusAuth>]: never; };
    } & { [K_85 in Exclude<keyof I_1, keyof AppResponse>]: never; }>(object: I_1): AppResponse;
};
export declare const AppBroadcast: {
    encode(message: AppBroadcast, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppBroadcast;
    fromJSON(object: any): AppBroadcast;
    toJSON(message: AppBroadcast): unknown;
    create<I extends {
        teamChanged?: {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
        };
        teamMessage?: {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            };
        };
        entityChanged?: {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        };
        clanChanged?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        };
        clanMessage?: {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            };
        };
    } & {
        teamChanged?: {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
        } & {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            } & {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & { [K in Exclude<keyof I["teamChanged"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["teamChanged"]["teamInfo"]["members"], keyof {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[]>]: never; };
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_2 in Exclude<keyof I["teamChanged"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_3 in Exclude<keyof I["teamChanged"]["teamInfo"]["mapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_4 in Exclude<keyof I["teamChanged"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_5 in Exclude<keyof I["teamChanged"]["teamInfo"]["leaderMapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
            } & { [K_6 in Exclude<keyof I["teamChanged"]["teamInfo"], keyof AppTeamInfo>]: never; };
        } & { [K_7 in Exclude<keyof I["teamChanged"], keyof AppTeamChanged>]: never; };
        teamMessage?: {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            };
        } & {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & { [K_8 in Exclude<keyof I["teamMessage"]["message"], keyof AppTeamMessage>]: never; };
        } & { [K_9 in Exclude<keyof I["teamMessage"], "message">]: never; };
        entityChanged?: {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        } & {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & { [K_10 in Exclude<keyof I["entityChanged"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_11 in Exclude<keyof I["entityChanged"]["payload"]["items"], keyof {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[]>]: never; };
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & { [K_12 in Exclude<keyof I["entityChanged"]["payload"], keyof AppEntityPayload>]: never; };
        } & { [K_13 in Exclude<keyof I["entityChanged"], keyof AppEntityChanged>]: never; };
        clanChanged?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        } & {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            } & {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[] & ({
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & { [K_14 in Exclude<keyof I["clanChanged"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_15 in Exclude<keyof I["clanChanged"]["clanInfo"]["roles"], keyof {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[]>]: never; };
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[] & ({
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & { [K_16 in Exclude<keyof I["clanChanged"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_17 in Exclude<keyof I["clanChanged"]["clanInfo"]["members"], keyof {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[]>]: never; };
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[] & ({
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & { [K_18 in Exclude<keyof I["clanChanged"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_19 in Exclude<keyof I["clanChanged"]["clanInfo"]["invites"], keyof {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[]>]: never; };
                maxMemberCount?: number[] & number[] & { [K_20 in Exclude<keyof I["clanChanged"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
            } & { [K_21 in Exclude<keyof I["clanChanged"]["clanInfo"], keyof ClanInfo>]: never; };
        } & { [K_22 in Exclude<keyof I["clanChanged"], "clanInfo">]: never; };
        clanMessage?: {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            };
        } & {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & { [K_23 in Exclude<keyof I["clanMessage"]["message"], keyof AppClanMessage>]: never; };
        } & { [K_24 in Exclude<keyof I["clanMessage"], keyof AppNewClanMessage>]: never; };
    } & { [K_25 in Exclude<keyof I, keyof AppBroadcast>]: never; }>(base?: I): AppBroadcast;
    fromPartial<I_1 extends {
        teamChanged?: {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
        };
        teamMessage?: {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            };
        };
        entityChanged?: {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        };
        clanChanged?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        };
        clanMessage?: {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            };
        };
    } & {
        teamChanged?: {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            };
        } & {
            playerId?: number;
            teamInfo?: {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[];
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[];
            } & {
                leaderSteamId?: number;
                members?: {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[] & ({
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                } & { [K_26 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_27 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["members"], keyof {
                    steamId?: number;
                    name?: string;
                    x?: number;
                    y?: number;
                    isOnline?: boolean;
                    spawnTime?: number;
                    isAlive?: boolean;
                    deathTime?: number;
                }[]>]: never; };
                mapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_28 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_29 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["mapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
                leaderMapNotes?: {
                    type?: number;
                    x?: number;
                    y?: number;
                }[] & ({
                    type?: number;
                    x?: number;
                    y?: number;
                } & {
                    type?: number;
                    x?: number;
                    y?: number;
                } & { [K_30 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_31 in Exclude<keyof I_1["teamChanged"]["teamInfo"]["leaderMapNotes"], keyof {
                    type?: number;
                    x?: number;
                    y?: number;
                }[]>]: never; };
            } & { [K_32 in Exclude<keyof I_1["teamChanged"]["teamInfo"], keyof AppTeamInfo>]: never; };
        } & { [K_33 in Exclude<keyof I_1["teamChanged"], keyof AppTeamChanged>]: never; };
        teamMessage?: {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            };
        } & {
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                color?: string;
                time?: number;
            } & { [K_34 in Exclude<keyof I_1["teamMessage"]["message"], keyof AppTeamMessage>]: never; };
        } & { [K_35 in Exclude<keyof I_1["teamMessage"], "message">]: never; };
        entityChanged?: {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            };
        } & {
            entityId?: number;
            payload?: {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[];
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & {
                value?: boolean;
                items?: {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[] & ({
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                } & { [K_36 in Exclude<keyof I_1["entityChanged"]["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_37 in Exclude<keyof I_1["entityChanged"]["payload"]["items"], keyof {
                    itemId?: number;
                    quantity?: number;
                    itemIsBlueprint?: boolean;
                }[]>]: never; };
                capacity?: number;
                hasProtection?: boolean;
                protectionExpiry?: number;
            } & { [K_38 in Exclude<keyof I_1["entityChanged"]["payload"], keyof AppEntityPayload>]: never; };
        } & { [K_39 in Exclude<keyof I_1["entityChanged"], keyof AppEntityChanged>]: never; };
        clanChanged?: {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            };
        } & {
            clanInfo?: {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[];
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[];
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[];
                maxMemberCount?: number[];
            } & {
                clanId?: number;
                name?: string;
                created?: number;
                creator?: number;
                motd?: string;
                motdTimestamp?: number;
                motdAuthor?: number;
                logo?: Uint8Array;
                color?: number;
                roles?: {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[] & ({
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                } & { [K_40 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_41 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["roles"], keyof {
                    roleId?: number;
                    rank?: number;
                    name?: string;
                    canSetMotd?: boolean;
                    canSetLogo?: boolean;
                    canInvite?: boolean;
                    canKick?: boolean;
                    canPromote?: boolean;
                    canDemote?: boolean;
                    canSetPlayerNotes?: boolean;
                    canAccessLogs?: boolean;
                }[]>]: never; };
                members?: {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[] & ({
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                } & { [K_42 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_43 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["members"], keyof {
                    steamId?: number;
                    roleId?: number;
                    joined?: number;
                    lastSeen?: number;
                    notes?: string;
                    online?: boolean;
                }[]>]: never; };
                invites?: {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[] & ({
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                } & { [K_44 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_45 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["invites"], keyof {
                    steamId?: number;
                    recruiter?: number;
                    timestamp?: number;
                }[]>]: never; };
                maxMemberCount?: number[] & number[] & { [K_46 in Exclude<keyof I_1["clanChanged"]["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
            } & { [K_47 in Exclude<keyof I_1["clanChanged"]["clanInfo"], keyof ClanInfo>]: never; };
        } & { [K_48 in Exclude<keyof I_1["clanChanged"], "clanInfo">]: never; };
        clanMessage?: {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            };
        } & {
            clanId?: number;
            message?: {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & {
                steamId?: number;
                name?: string;
                message?: string;
                time?: number;
            } & { [K_49 in Exclude<keyof I_1["clanMessage"]["message"], keyof AppClanMessage>]: never; };
        } & { [K_50 in Exclude<keyof I_1["clanMessage"], keyof AppNewClanMessage>]: never; };
    } & { [K_51 in Exclude<keyof I_1, keyof AppBroadcast>]: never; }>(object: I_1): AppBroadcast;
};
export declare const AppEmpty: {
    encode(_: AppEmpty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEmpty;
    fromJSON(_: any): AppEmpty;
    toJSON(_: AppEmpty): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): AppEmpty;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): AppEmpty;
};
export declare const AppSendMessage: {
    encode(message: AppSendMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSendMessage;
    fromJSON(object: any): AppSendMessage;
    toJSON(message: AppSendMessage): unknown;
    create<I extends {
        message?: string;
    } & {
        message?: string;
    } & { [K in Exclude<keyof I, "message">]: never; }>(base?: I): AppSendMessage;
    fromPartial<I_1 extends {
        message?: string;
    } & {
        message?: string;
    } & { [K_1 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): AppSendMessage;
};
export declare const AppSetEntityValue: {
    encode(message: AppSetEntityValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSetEntityValue;
    fromJSON(object: any): AppSetEntityValue;
    toJSON(message: AppSetEntityValue): unknown;
    create<I extends {
        value?: boolean;
    } & {
        value?: boolean;
    } & { [K in Exclude<keyof I, "value">]: never; }>(base?: I): AppSetEntityValue;
    fromPartial<I_1 extends {
        value?: boolean;
    } & {
        value?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): AppSetEntityValue;
};
export declare const AppPromoteToLeader: {
    encode(message: AppPromoteToLeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppPromoteToLeader;
    fromJSON(object: any): AppPromoteToLeader;
    toJSON(message: AppPromoteToLeader): unknown;
    create<I extends {
        steamId?: number;
    } & {
        steamId?: number;
    } & { [K in Exclude<keyof I, "steamId">]: never; }>(base?: I): AppPromoteToLeader;
    fromPartial<I_1 extends {
        steamId?: number;
    } & {
        steamId?: number;
    } & { [K_1 in Exclude<keyof I_1, "steamId">]: never; }>(object: I_1): AppPromoteToLeader;
};
export declare const AppGetNexusAuth: {
    encode(message: AppGetNexusAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppGetNexusAuth;
    fromJSON(object: any): AppGetNexusAuth;
    toJSON(message: AppGetNexusAuth): unknown;
    create<I extends {
        appKey?: string;
    } & {
        appKey?: string;
    } & { [K in Exclude<keyof I, "appKey">]: never; }>(base?: I): AppGetNexusAuth;
    fromPartial<I_1 extends {
        appKey?: string;
    } & {
        appKey?: string;
    } & { [K_1 in Exclude<keyof I_1, "appKey">]: never; }>(object: I_1): AppGetNexusAuth;
};
export declare const AppSuccess: {
    encode(_: AppSuccess, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppSuccess;
    fromJSON(_: any): AppSuccess;
    toJSON(_: AppSuccess): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): AppSuccess;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): AppSuccess;
};
export declare const AppError: {
    encode(message: AppError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppError;
    fromJSON(object: any): AppError;
    toJSON(message: AppError): unknown;
    create<I extends {
        error?: string;
    } & {
        error?: string;
    } & { [K in Exclude<keyof I, "error">]: never; }>(base?: I): AppError;
    fromPartial<I_1 extends {
        error?: string;
    } & {
        error?: string;
    } & { [K_1 in Exclude<keyof I_1, "error">]: never; }>(object: I_1): AppError;
};
export declare const AppFlag: {
    encode(message: AppFlag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppFlag;
    fromJSON(object: any): AppFlag;
    toJSON(message: AppFlag): unknown;
    create<I extends {
        value?: boolean;
    } & {
        value?: boolean;
    } & { [K in Exclude<keyof I, "value">]: never; }>(base?: I): AppFlag;
    fromPartial<I_1 extends {
        value?: boolean;
    } & {
        value?: boolean;
    } & { [K_1 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): AppFlag;
};
export declare const AppInfo: {
    encode(message: AppInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppInfo;
    fromJSON(object: any): AppInfo;
    toJSON(message: AppInfo): unknown;
    create<I extends {
        name?: string;
        headerImage?: string;
        url?: string;
        map?: string;
        mapSize?: number;
        wipeTime?: number;
        players?: number;
        maxPlayers?: number;
        queuedPlayers?: number;
        seed?: number;
        salt?: number;
        logoImage?: string;
        nexus?: string;
        nexusId?: number;
        nexusZone?: string;
    } & {
        name?: string;
        headerImage?: string;
        url?: string;
        map?: string;
        mapSize?: number;
        wipeTime?: number;
        players?: number;
        maxPlayers?: number;
        queuedPlayers?: number;
        seed?: number;
        salt?: number;
        logoImage?: string;
        nexus?: string;
        nexusId?: number;
        nexusZone?: string;
    } & { [K in Exclude<keyof I, keyof AppInfo>]: never; }>(base?: I): AppInfo;
    fromPartial<I_1 extends {
        name?: string;
        headerImage?: string;
        url?: string;
        map?: string;
        mapSize?: number;
        wipeTime?: number;
        players?: number;
        maxPlayers?: number;
        queuedPlayers?: number;
        seed?: number;
        salt?: number;
        logoImage?: string;
        nexus?: string;
        nexusId?: number;
        nexusZone?: string;
    } & {
        name?: string;
        headerImage?: string;
        url?: string;
        map?: string;
        mapSize?: number;
        wipeTime?: number;
        players?: number;
        maxPlayers?: number;
        queuedPlayers?: number;
        seed?: number;
        salt?: number;
        logoImage?: string;
        nexus?: string;
        nexusId?: number;
        nexusZone?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof AppInfo>]: never; }>(object: I_1): AppInfo;
};
export declare const AppTime: {
    encode(message: AppTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTime;
    fromJSON(object: any): AppTime;
    toJSON(message: AppTime): unknown;
    create<I extends {
        dayLengthMinutes?: number;
        timeScale?: number;
        sunrise?: number;
        sunset?: number;
        time?: number;
    } & {
        dayLengthMinutes?: number;
        timeScale?: number;
        sunrise?: number;
        sunset?: number;
        time?: number;
    } & { [K in Exclude<keyof I, keyof AppTime>]: never; }>(base?: I): AppTime;
    fromPartial<I_1 extends {
        dayLengthMinutes?: number;
        timeScale?: number;
        sunrise?: number;
        sunset?: number;
        time?: number;
    } & {
        dayLengthMinutes?: number;
        timeScale?: number;
        sunrise?: number;
        sunset?: number;
        time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppTime>]: never; }>(object: I_1): AppTime;
};
export declare const AppMap: {
    encode(message: AppMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMap;
    fromJSON(object: any): AppMap;
    toJSON(message: AppMap): unknown;
    create<I extends {
        width?: number;
        height?: number;
        jpgImage?: Uint8Array;
        oceanMargin?: number;
        monuments?: {
            token?: string;
            x?: number;
            y?: number;
        }[];
        background?: string;
    } & {
        width?: number;
        height?: number;
        jpgImage?: Uint8Array;
        oceanMargin?: number;
        monuments?: {
            token?: string;
            x?: number;
            y?: number;
        }[] & ({
            token?: string;
            x?: number;
            y?: number;
        } & {
            token?: string;
            x?: number;
            y?: number;
        } & { [K in Exclude<keyof I["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_1 in Exclude<keyof I["monuments"], keyof {
            token?: string;
            x?: number;
            y?: number;
        }[]>]: never; };
        background?: string;
    } & { [K_2 in Exclude<keyof I, keyof AppMap>]: never; }>(base?: I): AppMap;
    fromPartial<I_1 extends {
        width?: number;
        height?: number;
        jpgImage?: Uint8Array;
        oceanMargin?: number;
        monuments?: {
            token?: string;
            x?: number;
            y?: number;
        }[];
        background?: string;
    } & {
        width?: number;
        height?: number;
        jpgImage?: Uint8Array;
        oceanMargin?: number;
        monuments?: {
            token?: string;
            x?: number;
            y?: number;
        }[] & ({
            token?: string;
            x?: number;
            y?: number;
        } & {
            token?: string;
            x?: number;
            y?: number;
        } & { [K_3 in Exclude<keyof I_1["monuments"][number], keyof AppMap_Monument>]: never; })[] & { [K_4 in Exclude<keyof I_1["monuments"], keyof {
            token?: string;
            x?: number;
            y?: number;
        }[]>]: never; };
        background?: string;
    } & { [K_5 in Exclude<keyof I_1, keyof AppMap>]: never; }>(object: I_1): AppMap;
};
export declare const AppMap_Monument: {
    encode(message: AppMap_Monument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMap_Monument;
    fromJSON(object: any): AppMap_Monument;
    toJSON(message: AppMap_Monument): unknown;
    create<I extends {
        token?: string;
        x?: number;
        y?: number;
    } & {
        token?: string;
        x?: number;
        y?: number;
    } & { [K in Exclude<keyof I, keyof AppMap_Monument>]: never; }>(base?: I): AppMap_Monument;
    fromPartial<I_1 extends {
        token?: string;
        x?: number;
        y?: number;
    } & {
        token?: string;
        x?: number;
        y?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppMap_Monument>]: never; }>(object: I_1): AppMap_Monument;
};
export declare const AppEntityInfo: {
    encode(message: AppEntityInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityInfo;
    fromJSON(object: any): AppEntityInfo;
    toJSON(message: AppEntityInfo): unknown;
    create<I extends {
        type?: AppEntityType;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        };
    } & {
        type?: AppEntityType;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[] & ({
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & { [K in Exclude<keyof I["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["items"], keyof {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[]>]: never; };
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & { [K_2 in Exclude<keyof I["payload"], keyof AppEntityPayload>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof AppEntityInfo>]: never; }>(base?: I): AppEntityInfo;
    fromPartial<I_1 extends {
        type?: AppEntityType;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        };
    } & {
        type?: AppEntityType;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[] & ({
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & { [K_4 in Exclude<keyof I_1["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_5 in Exclude<keyof I_1["payload"]["items"], keyof {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[]>]: never; };
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & { [K_6 in Exclude<keyof I_1["payload"], keyof AppEntityPayload>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof AppEntityInfo>]: never; }>(object: I_1): AppEntityInfo;
};
export declare const AppEntityPayload: {
    encode(message: AppEntityPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload;
    fromJSON(object: any): AppEntityPayload;
    toJSON(message: AppEntityPayload): unknown;
    create<I extends {
        value?: boolean;
        items?: {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[];
        capacity?: number;
        hasProtection?: boolean;
        protectionExpiry?: number;
    } & {
        value?: boolean;
        items?: {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[] & ({
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        } & {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        } & { [K in Exclude<keyof I["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_1 in Exclude<keyof I["items"], keyof {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[]>]: never; };
        capacity?: number;
        hasProtection?: boolean;
        protectionExpiry?: number;
    } & { [K_2 in Exclude<keyof I, keyof AppEntityPayload>]: never; }>(base?: I): AppEntityPayload;
    fromPartial<I_1 extends {
        value?: boolean;
        items?: {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[];
        capacity?: number;
        hasProtection?: boolean;
        protectionExpiry?: number;
    } & {
        value?: boolean;
        items?: {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[] & ({
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        } & {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        } & { [K_3 in Exclude<keyof I_1["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_4 in Exclude<keyof I_1["items"], keyof {
            itemId?: number;
            quantity?: number;
            itemIsBlueprint?: boolean;
        }[]>]: never; };
        capacity?: number;
        hasProtection?: boolean;
        protectionExpiry?: number;
    } & { [K_5 in Exclude<keyof I_1, keyof AppEntityPayload>]: never; }>(object: I_1): AppEntityPayload;
};
export declare const AppEntityPayload_Item: {
    encode(message: AppEntityPayload_Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityPayload_Item;
    fromJSON(object: any): AppEntityPayload_Item;
    toJSON(message: AppEntityPayload_Item): unknown;
    create<I extends {
        itemId?: number;
        quantity?: number;
        itemIsBlueprint?: boolean;
    } & {
        itemId?: number;
        quantity?: number;
        itemIsBlueprint?: boolean;
    } & { [K in Exclude<keyof I, keyof AppEntityPayload_Item>]: never; }>(base?: I): AppEntityPayload_Item;
    fromPartial<I_1 extends {
        itemId?: number;
        quantity?: number;
        itemIsBlueprint?: boolean;
    } & {
        itemId?: number;
        quantity?: number;
        itemIsBlueprint?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof AppEntityPayload_Item>]: never; }>(object: I_1): AppEntityPayload_Item;
};
export declare const AppTeamInfo: {
    encode(message: AppTeamInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo;
    fromJSON(object: any): AppTeamInfo;
    toJSON(message: AppTeamInfo): unknown;
    create<I extends {
        leaderSteamId?: number;
        members?: {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[];
        mapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[];
        leaderMapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[];
    } & {
        leaderSteamId?: number;
        members?: {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        } & {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        } & { [K in Exclude<keyof I["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[]>]: never; };
        mapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[] & ({
            type?: number;
            x?: number;
            y?: number;
        } & {
            type?: number;
            x?: number;
            y?: number;
        } & { [K_2 in Exclude<keyof I["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_3 in Exclude<keyof I["mapNotes"], keyof {
            type?: number;
            x?: number;
            y?: number;
        }[]>]: never; };
        leaderMapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[] & ({
            type?: number;
            x?: number;
            y?: number;
        } & {
            type?: number;
            x?: number;
            y?: number;
        } & { [K_4 in Exclude<keyof I["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_5 in Exclude<keyof I["leaderMapNotes"], keyof {
            type?: number;
            x?: number;
            y?: number;
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof AppTeamInfo>]: never; }>(base?: I): AppTeamInfo;
    fromPartial<I_1 extends {
        leaderSteamId?: number;
        members?: {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[];
        mapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[];
        leaderMapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[];
    } & {
        leaderSteamId?: number;
        members?: {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        } & {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        } & { [K_7 in Exclude<keyof I_1["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_8 in Exclude<keyof I_1["members"], keyof {
            steamId?: number;
            name?: string;
            x?: number;
            y?: number;
            isOnline?: boolean;
            spawnTime?: number;
            isAlive?: boolean;
            deathTime?: number;
        }[]>]: never; };
        mapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[] & ({
            type?: number;
            x?: number;
            y?: number;
        } & {
            type?: number;
            x?: number;
            y?: number;
        } & { [K_9 in Exclude<keyof I_1["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_10 in Exclude<keyof I_1["mapNotes"], keyof {
            type?: number;
            x?: number;
            y?: number;
        }[]>]: never; };
        leaderMapNotes?: {
            type?: number;
            x?: number;
            y?: number;
        }[] & ({
            type?: number;
            x?: number;
            y?: number;
        } & {
            type?: number;
            x?: number;
            y?: number;
        } & { [K_11 in Exclude<keyof I_1["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_12 in Exclude<keyof I_1["leaderMapNotes"], keyof {
            type?: number;
            x?: number;
            y?: number;
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof AppTeamInfo>]: never; }>(object: I_1): AppTeamInfo;
};
export declare const AppTeamInfo_Member: {
    encode(message: AppTeamInfo_Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Member;
    fromJSON(object: any): AppTeamInfo_Member;
    toJSON(message: AppTeamInfo_Member): unknown;
    create<I extends {
        steamId?: number;
        name?: string;
        x?: number;
        y?: number;
        isOnline?: boolean;
        spawnTime?: number;
        isAlive?: boolean;
        deathTime?: number;
    } & {
        steamId?: number;
        name?: string;
        x?: number;
        y?: number;
        isOnline?: boolean;
        spawnTime?: number;
        isAlive?: boolean;
        deathTime?: number;
    } & { [K in Exclude<keyof I, keyof AppTeamInfo_Member>]: never; }>(base?: I): AppTeamInfo_Member;
    fromPartial<I_1 extends {
        steamId?: number;
        name?: string;
        x?: number;
        y?: number;
        isOnline?: boolean;
        spawnTime?: number;
        isAlive?: boolean;
        deathTime?: number;
    } & {
        steamId?: number;
        name?: string;
        x?: number;
        y?: number;
        isOnline?: boolean;
        spawnTime?: number;
        isAlive?: boolean;
        deathTime?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppTeamInfo_Member>]: never; }>(object: I_1): AppTeamInfo_Member;
};
export declare const AppTeamInfo_Note: {
    encode(message: AppTeamInfo_Note, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamInfo_Note;
    fromJSON(object: any): AppTeamInfo_Note;
    toJSON(message: AppTeamInfo_Note): unknown;
    create<I extends {
        type?: number;
        x?: number;
        y?: number;
    } & {
        type?: number;
        x?: number;
        y?: number;
    } & { [K in Exclude<keyof I, keyof AppTeamInfo_Note>]: never; }>(base?: I): AppTeamInfo_Note;
    fromPartial<I_1 extends {
        type?: number;
        x?: number;
        y?: number;
    } & {
        type?: number;
        x?: number;
        y?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppTeamInfo_Note>]: never; }>(object: I_1): AppTeamInfo_Note;
};
export declare const AppTeamMessage: {
    encode(message: AppTeamMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamMessage;
    fromJSON(object: any): AppTeamMessage;
    toJSON(message: AppTeamMessage): unknown;
    create<I extends {
        steamId?: number;
        name?: string;
        message?: string;
        color?: string;
        time?: number;
    } & {
        steamId?: number;
        name?: string;
        message?: string;
        color?: string;
        time?: number;
    } & { [K in Exclude<keyof I, keyof AppTeamMessage>]: never; }>(base?: I): AppTeamMessage;
    fromPartial<I_1 extends {
        steamId?: number;
        name?: string;
        message?: string;
        color?: string;
        time?: number;
    } & {
        steamId?: number;
        name?: string;
        message?: string;
        color?: string;
        time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppTeamMessage>]: never; }>(object: I_1): AppTeamMessage;
};
export declare const AppTeamChat: {
    encode(message: AppTeamChat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChat;
    fromJSON(object: any): AppTeamChat;
    toJSON(message: AppTeamChat): unknown;
    create<I extends {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[];
    } & {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & { [K in Exclude<keyof I["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_1 in Exclude<keyof I["messages"], keyof {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "messages">]: never; }>(base?: I): AppTeamChat;
    fromPartial<I_1 extends {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[];
    } & {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & { [K_3 in Exclude<keyof I_1["messages"][number], keyof AppTeamMessage>]: never; })[] & { [K_4 in Exclude<keyof I_1["messages"], keyof {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "messages">]: never; }>(object: I_1): AppTeamChat;
};
export declare const AppMarker: {
    encode(message: AppMarker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker;
    fromJSON(object: any): AppMarker;
    toJSON(message: AppMarker): unknown;
    create<I extends {
        id?: number;
        type?: AppMarkerType;
        x?: number;
        y?: number;
        steamId?: number;
        rotation?: number;
        radius?: number;
        color1?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        color2?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        alpha?: number;
        name?: string;
        outOfStock?: boolean;
        sellOrders?: {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[];
    } & {
        id?: number;
        type?: AppMarkerType;
        x?: number;
        y?: number;
        steamId?: number;
        rotation?: number;
        radius?: number;
        color1?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K in Exclude<keyof I["color1"], keyof Vector4>]: never; };
        color2?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_1 in Exclude<keyof I["color2"], keyof Vector4>]: never; };
        alpha?: number;
        name?: string;
        outOfStock?: boolean;
        sellOrders?: {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[] & ({
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        } & {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        } & { [K_2 in Exclude<keyof I["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_3 in Exclude<keyof I["sellOrders"], keyof {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[]>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof AppMarker>]: never; }>(base?: I): AppMarker;
    fromPartial<I_1 extends {
        id?: number;
        type?: AppMarkerType;
        x?: number;
        y?: number;
        steamId?: number;
        rotation?: number;
        radius?: number;
        color1?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        color2?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        };
        alpha?: number;
        name?: string;
        outOfStock?: boolean;
        sellOrders?: {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[];
    } & {
        id?: number;
        type?: AppMarkerType;
        x?: number;
        y?: number;
        steamId?: number;
        rotation?: number;
        radius?: number;
        color1?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_5 in Exclude<keyof I_1["color1"], keyof Vector4>]: never; };
        color2?: {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & {
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        } & { [K_6 in Exclude<keyof I_1["color2"], keyof Vector4>]: never; };
        alpha?: number;
        name?: string;
        outOfStock?: boolean;
        sellOrders?: {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[] & ({
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        } & {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        } & { [K_7 in Exclude<keyof I_1["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_8 in Exclude<keyof I_1["sellOrders"], keyof {
            itemId?: number;
            quantity?: number;
            currencyId?: number;
            costPerItem?: number;
            amountInStock?: number;
            itemIsBlueprint?: boolean;
            currencyIsBlueprint?: boolean;
            itemCondition?: number;
            itemConditionMax?: number;
        }[]>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof AppMarker>]: never; }>(object: I_1): AppMarker;
};
export declare const AppMarker_SellOrder: {
    encode(message: AppMarker_SellOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMarker_SellOrder;
    fromJSON(object: any): AppMarker_SellOrder;
    toJSON(message: AppMarker_SellOrder): unknown;
    create<I extends {
        itemId?: number;
        quantity?: number;
        currencyId?: number;
        costPerItem?: number;
        amountInStock?: number;
        itemIsBlueprint?: boolean;
        currencyIsBlueprint?: boolean;
        itemCondition?: number;
        itemConditionMax?: number;
    } & {
        itemId?: number;
        quantity?: number;
        currencyId?: number;
        costPerItem?: number;
        amountInStock?: number;
        itemIsBlueprint?: boolean;
        currencyIsBlueprint?: boolean;
        itemCondition?: number;
        itemConditionMax?: number;
    } & { [K in Exclude<keyof I, keyof AppMarker_SellOrder>]: never; }>(base?: I): AppMarker_SellOrder;
    fromPartial<I_1 extends {
        itemId?: number;
        quantity?: number;
        currencyId?: number;
        costPerItem?: number;
        amountInStock?: number;
        itemIsBlueprint?: boolean;
        currencyIsBlueprint?: boolean;
        itemCondition?: number;
        itemConditionMax?: number;
    } & {
        itemId?: number;
        quantity?: number;
        currencyId?: number;
        costPerItem?: number;
        amountInStock?: number;
        itemIsBlueprint?: boolean;
        currencyIsBlueprint?: boolean;
        itemCondition?: number;
        itemConditionMax?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppMarker_SellOrder>]: never; }>(object: I_1): AppMarker_SellOrder;
};
export declare const AppMapMarkers: {
    encode(message: AppMapMarkers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppMapMarkers;
    fromJSON(object: any): AppMapMarkers;
    toJSON(message: AppMapMarkers): unknown;
    create<I extends {
        markers?: {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[];
    } & {
        markers?: {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[] & ({
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        } & {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K in Exclude<keyof I["markers"][number]["color1"], keyof Vector4>]: never; };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_1 in Exclude<keyof I["markers"][number]["color2"], keyof Vector4>]: never; };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[] & ({
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            } & {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            } & { [K_2 in Exclude<keyof I["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_3 in Exclude<keyof I["markers"][number]["sellOrders"], keyof {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[]>]: never; };
        } & { [K_4 in Exclude<keyof I["markers"][number], keyof AppMarker>]: never; })[] & { [K_5 in Exclude<keyof I["markers"], keyof {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, "markers">]: never; }>(base?: I): AppMapMarkers;
    fromPartial<I_1 extends {
        markers?: {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[];
    } & {
        markers?: {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[] & ({
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        } & {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_7 in Exclude<keyof I_1["markers"][number]["color1"], keyof Vector4>]: never; };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            } & { [K_8 in Exclude<keyof I_1["markers"][number]["color2"], keyof Vector4>]: never; };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[] & ({
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            } & {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            } & { [K_9 in Exclude<keyof I_1["markers"][number]["sellOrders"][number], keyof AppMarker_SellOrder>]: never; })[] & { [K_10 in Exclude<keyof I_1["markers"][number]["sellOrders"], keyof {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[]>]: never; };
        } & { [K_11 in Exclude<keyof I_1["markers"][number], keyof AppMarker>]: never; })[] & { [K_12 in Exclude<keyof I_1["markers"], keyof {
            id?: number;
            type?: AppMarkerType;
            x?: number;
            y?: number;
            steamId?: number;
            rotation?: number;
            radius?: number;
            color1?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            color2?: {
                x?: number;
                y?: number;
                z?: number;
                w?: number;
            };
            alpha?: number;
            name?: string;
            outOfStock?: boolean;
            sellOrders?: {
                itemId?: number;
                quantity?: number;
                currencyId?: number;
                costPerItem?: number;
                amountInStock?: number;
                itemIsBlueprint?: boolean;
                currencyIsBlueprint?: boolean;
                itemCondition?: number;
                itemConditionMax?: number;
            }[];
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, "markers">]: never; }>(object: I_1): AppMapMarkers;
};
export declare const AppClanInfo: {
    encode(message: AppClanInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanInfo;
    fromJSON(object: any): AppClanInfo;
    toJSON(message: AppClanInfo): unknown;
    create<I extends {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K in Exclude<keyof I["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_1 in Exclude<keyof I["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_2 in Exclude<keyof I["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_3 in Exclude<keyof I["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_4 in Exclude<keyof I["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_5 in Exclude<keyof I["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_6 in Exclude<keyof I["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_7 in Exclude<keyof I["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_8 in Exclude<keyof I, "clanInfo">]: never; }>(base?: I): AppClanInfo;
    fromPartial<I_1 extends {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K_9 in Exclude<keyof I_1["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_10 in Exclude<keyof I_1["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_11 in Exclude<keyof I_1["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_12 in Exclude<keyof I_1["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_13 in Exclude<keyof I_1["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_14 in Exclude<keyof I_1["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_15 in Exclude<keyof I_1["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "clanInfo">]: never; }>(object: I_1): AppClanInfo;
};
export declare const AppClanMessage: {
    encode(message: AppClanMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanMessage;
    fromJSON(object: any): AppClanMessage;
    toJSON(message: AppClanMessage): unknown;
    create<I extends {
        steamId?: number;
        name?: string;
        message?: string;
        time?: number;
    } & {
        steamId?: number;
        name?: string;
        message?: string;
        time?: number;
    } & { [K in Exclude<keyof I, keyof AppClanMessage>]: never; }>(base?: I): AppClanMessage;
    fromPartial<I_1 extends {
        steamId?: number;
        name?: string;
        message?: string;
        time?: number;
    } & {
        steamId?: number;
        name?: string;
        message?: string;
        time?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppClanMessage>]: never; }>(object: I_1): AppClanMessage;
};
export declare const AppClanChat: {
    encode(message: AppClanChat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChat;
    fromJSON(object: any): AppClanChat;
    toJSON(message: AppClanChat): unknown;
    create<I extends {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[];
    } & {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & { [K in Exclude<keyof I["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_1 in Exclude<keyof I["messages"], keyof {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[]>]: never; };
    } & { [K_2 in Exclude<keyof I, "messages">]: never; }>(base?: I): AppClanChat;
    fromPartial<I_1 extends {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[];
    } & {
        messages?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[] & ({
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & { [K_3 in Exclude<keyof I_1["messages"][number], keyof AppClanMessage>]: never; })[] & { [K_4 in Exclude<keyof I_1["messages"], keyof {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I_1, "messages">]: never; }>(object: I_1): AppClanChat;
};
export declare const AppNexusAuth: {
    encode(message: AppNexusAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNexusAuth;
    fromJSON(object: any): AppNexusAuth;
    toJSON(message: AppNexusAuth): unknown;
    create<I extends {
        serverId?: string;
        playerToken?: number;
    } & {
        serverId?: string;
        playerToken?: number;
    } & { [K in Exclude<keyof I, keyof AppNexusAuth>]: never; }>(base?: I): AppNexusAuth;
    fromPartial<I_1 extends {
        serverId?: string;
        playerToken?: number;
    } & {
        serverId?: string;
        playerToken?: number;
    } & { [K_1 in Exclude<keyof I_1, keyof AppNexusAuth>]: never; }>(object: I_1): AppNexusAuth;
};
export declare const AppTeamChanged: {
    encode(message: AppTeamChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppTeamChanged;
    fromJSON(object: any): AppTeamChanged;
    toJSON(message: AppTeamChanged): unknown;
    create<I extends {
        playerId?: number;
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        };
    } & {
        playerId?: number;
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        } & {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & { [K in Exclude<keyof I["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_1 in Exclude<keyof I["teamInfo"]["members"], keyof {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[]>]: never; };
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_2 in Exclude<keyof I["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_3 in Exclude<keyof I["teamInfo"]["mapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_4 in Exclude<keyof I["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_5 in Exclude<keyof I["teamInfo"]["leaderMapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
        } & { [K_6 in Exclude<keyof I["teamInfo"], keyof AppTeamInfo>]: never; };
    } & { [K_7 in Exclude<keyof I, keyof AppTeamChanged>]: never; }>(base?: I): AppTeamChanged;
    fromPartial<I_1 extends {
        playerId?: number;
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        };
    } & {
        playerId?: number;
        teamInfo?: {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[];
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[];
        } & {
            leaderSteamId?: number;
            members?: {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[] & ({
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            } & { [K_8 in Exclude<keyof I_1["teamInfo"]["members"][number], keyof AppTeamInfo_Member>]: never; })[] & { [K_9 in Exclude<keyof I_1["teamInfo"]["members"], keyof {
                steamId?: number;
                name?: string;
                x?: number;
                y?: number;
                isOnline?: boolean;
                spawnTime?: number;
                isAlive?: boolean;
                deathTime?: number;
            }[]>]: never; };
            mapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_10 in Exclude<keyof I_1["teamInfo"]["mapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_11 in Exclude<keyof I_1["teamInfo"]["mapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
            leaderMapNotes?: {
                type?: number;
                x?: number;
                y?: number;
            }[] & ({
                type?: number;
                x?: number;
                y?: number;
            } & {
                type?: number;
                x?: number;
                y?: number;
            } & { [K_12 in Exclude<keyof I_1["teamInfo"]["leaderMapNotes"][number], keyof AppTeamInfo_Note>]: never; })[] & { [K_13 in Exclude<keyof I_1["teamInfo"]["leaderMapNotes"], keyof {
                type?: number;
                x?: number;
                y?: number;
            }[]>]: never; };
        } & { [K_14 in Exclude<keyof I_1["teamInfo"], keyof AppTeamInfo>]: never; };
    } & { [K_15 in Exclude<keyof I_1, keyof AppTeamChanged>]: never; }>(object: I_1): AppTeamChanged;
};
export declare const AppNewTeamMessage: {
    encode(message: AppNewTeamMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNewTeamMessage;
    fromJSON(object: any): AppNewTeamMessage;
    toJSON(message: AppNewTeamMessage): unknown;
    create<I extends {
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        };
    } & {
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & { [K in Exclude<keyof I["message"], keyof AppTeamMessage>]: never; };
    } & { [K_1 in Exclude<keyof I, "message">]: never; }>(base?: I): AppNewTeamMessage;
    fromPartial<I_1 extends {
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        };
    } & {
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            color?: string;
            time?: number;
        } & { [K_2 in Exclude<keyof I_1["message"], keyof AppTeamMessage>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "message">]: never; }>(object: I_1): AppNewTeamMessage;
};
export declare const AppEntityChanged: {
    encode(message: AppEntityChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppEntityChanged;
    fromJSON(object: any): AppEntityChanged;
    toJSON(message: AppEntityChanged): unknown;
    create<I extends {
        entityId?: number;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        };
    } & {
        entityId?: number;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[] & ({
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & { [K in Exclude<keyof I["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["items"], keyof {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[]>]: never; };
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & { [K_2 in Exclude<keyof I["payload"], keyof AppEntityPayload>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof AppEntityChanged>]: never; }>(base?: I): AppEntityChanged;
    fromPartial<I_1 extends {
        entityId?: number;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        };
    } & {
        entityId?: number;
        payload?: {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[];
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & {
            value?: boolean;
            items?: {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[] & ({
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            } & { [K_4 in Exclude<keyof I_1["payload"]["items"][number], keyof AppEntityPayload_Item>]: never; })[] & { [K_5 in Exclude<keyof I_1["payload"]["items"], keyof {
                itemId?: number;
                quantity?: number;
                itemIsBlueprint?: boolean;
            }[]>]: never; };
            capacity?: number;
            hasProtection?: boolean;
            protectionExpiry?: number;
        } & { [K_6 in Exclude<keyof I_1["payload"], keyof AppEntityPayload>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof AppEntityChanged>]: never; }>(object: I_1): AppEntityChanged;
};
export declare const AppClanChanged: {
    encode(message: AppClanChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppClanChanged;
    fromJSON(object: any): AppClanChanged;
    toJSON(message: AppClanChanged): unknown;
    create<I extends {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K in Exclude<keyof I["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_1 in Exclude<keyof I["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_2 in Exclude<keyof I["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_3 in Exclude<keyof I["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_4 in Exclude<keyof I["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_5 in Exclude<keyof I["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_6 in Exclude<keyof I["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_7 in Exclude<keyof I["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_8 in Exclude<keyof I, "clanInfo">]: never; }>(base?: I): AppClanChanged;
    fromPartial<I_1 extends {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        };
    } & {
        clanInfo?: {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[];
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[];
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[];
            maxMemberCount?: number[];
        } & {
            clanId?: number;
            name?: string;
            created?: number;
            creator?: number;
            motd?: string;
            motdTimestamp?: number;
            motdAuthor?: number;
            logo?: Uint8Array;
            color?: number;
            roles?: {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[] & ({
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            } & { [K_9 in Exclude<keyof I_1["clanInfo"]["roles"][number], keyof ClanInfo_Role>]: never; })[] & { [K_10 in Exclude<keyof I_1["clanInfo"]["roles"], keyof {
                roleId?: number;
                rank?: number;
                name?: string;
                canSetMotd?: boolean;
                canSetLogo?: boolean;
                canInvite?: boolean;
                canKick?: boolean;
                canPromote?: boolean;
                canDemote?: boolean;
                canSetPlayerNotes?: boolean;
                canAccessLogs?: boolean;
            }[]>]: never; };
            members?: {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[] & ({
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            } & { [K_11 in Exclude<keyof I_1["clanInfo"]["members"][number], keyof ClanInfo_Member>]: never; })[] & { [K_12 in Exclude<keyof I_1["clanInfo"]["members"], keyof {
                steamId?: number;
                roleId?: number;
                joined?: number;
                lastSeen?: number;
                notes?: string;
                online?: boolean;
            }[]>]: never; };
            invites?: {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[] & ({
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            } & { [K_13 in Exclude<keyof I_1["clanInfo"]["invites"][number], keyof ClanInfo_Invite>]: never; })[] & { [K_14 in Exclude<keyof I_1["clanInfo"]["invites"], keyof {
                steamId?: number;
                recruiter?: number;
                timestamp?: number;
            }[]>]: never; };
            maxMemberCount?: number[] & number[] & { [K_15 in Exclude<keyof I_1["clanInfo"]["maxMemberCount"], keyof number[]>]: never; };
        } & { [K_16 in Exclude<keyof I_1["clanInfo"], keyof ClanInfo>]: never; };
    } & { [K_17 in Exclude<keyof I_1, "clanInfo">]: never; }>(object: I_1): AppClanChanged;
};
export declare const AppNewClanMessage: {
    encode(message: AppNewClanMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppNewClanMessage;
    fromJSON(object: any): AppNewClanMessage;
    toJSON(message: AppNewClanMessage): unknown;
    create<I extends {
        clanId?: number;
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        };
    } & {
        clanId?: number;
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & { [K in Exclude<keyof I["message"], keyof AppClanMessage>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof AppNewClanMessage>]: never; }>(base?: I): AppNewClanMessage;
    fromPartial<I_1 extends {
        clanId?: number;
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        };
    } & {
        clanId?: number;
        message?: {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & {
            steamId?: number;
            name?: string;
            message?: string;
            time?: number;
        } & { [K_2 in Exclude<keyof I_1["message"], keyof AppClanMessage>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof AppNewClanMessage>]: never; }>(object: I_1): AppNewClanMessage;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
