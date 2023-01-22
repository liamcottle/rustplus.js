export interface Vector3 {
	x?: number;
	y?: number;
	z?: number;
}

export interface Half3 {
	x?: number;
	y?: number;
	z?: number;
}

export interface Ray {
	origin?: Vector3;
	direction?: Vector3;
}

export interface Vector4 {
	x?: number;
	y?: number;
	z?: number;
	w?: number;
}

export interface Color {
	r?: number;
	g?: number;
	b?: number;
	a?: number;
}

export interface Vector2 {
	x?: number;
	y?: number;
}

export interface ClanActionResult {
	requestId: number;
	result: number;
	hasClanInfo: boolean;
	clanInfo?: ClanInfo;
}

export interface ClanInfo {
	clanId: number;
	name: string;
	created: number;
	creator: number;
	motd?: string;
	motdTimestamp?: number;
	motdAuthor?: number;
	logo?: Buffer;
	color?: number;
	roles: Role[];
	members: Member[];
	invites: Invite[];
	maxMemberCount: number[];
}
export interface Role {
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

export interface Member {
	steamId: number;
	roleId: number;
	joined: number;
	lastSeen: number;
	notes?: string;
	online?: bool;
}

export interface Invite {
	steamId: number;
	recruiter: number;
	timestamp: number;
}

export interface ClanLog {
	clanId: number;
	logEntries: Entry[];
}
export interface Entry {
	timestamp: number;
	eventKey: string;
	arg1?: string;
	arg2?: string;
	arg3?: string;
	arg4?: string;
}

export interface ClanInvitations {
	invitations: Invitation[];
}
export interface Invitation {
	clanId: number;
	recruiter: number;
	timestamp: number;
}

export enum AppEntityType {
	Switch = 1,
	Alarm = 2,
	StorageMonitor = 3,
}

export enum AppMarkerType {
	Undefined = 0,
	Player = 1,
	Explosion = 2,
	VendingMachine = 3,
	CH47 = 4,
	CargoShip = 5,
	Crate = 6,
	GenericRadius = 7,
}

export interface AppRequest {
	seq: number;
	playerId: number;
	playerToken: number;

	entityId?: number;
	getInfo?: AppEmpty;
	getTime?: AppEmpty;
	getMap?: AppEmpty;
	getTeamInfo?: AppEmpty;
	getTeamChat?: AppEmpty;
	sendTeamMessage?: AppSendMessage;
	getEntityInfo?: AppEmpty;
	setEntityValue?: AppSetEntityValue;
	checkSubscription?: AppEmpty;
	setSubscription?: AppFlag;
	getMapMarkers?: AppEmpty;
	promoteToLeader?: AppPromoteToLeader;
	getClanInfo?: AppEmpty;
	setClanMotd?: AppSendMessage;
	getClanChat?: AppEmpty;
	sendClanMessage?: AppSendMessage;
	getNexusAuth?: AppGetNexusAuth;
}

export interface AppMessage {
	response?: AppResponse;
	broadcast?: AppBroadcast;
}

export interface AppResponse {
	seq: number;
	success?: AppSuccess;
	error?: AppError;
	info?: AppInfo;
	time?: AppTime;
	map?: AppMap;
	teamInfo?: AppTeamInfo;
	teamChat?: AppTeamChat;
	entityInfo?: AppEntityInfo;
	flag?: AppFlag;
	mapMarkers?: AppMapMarkers;
	clanInfo?: AppClanInfo;
	clanChat?: AppClanChat;
	nexusAuth?: AppNexusAuth;
}

export interface AppBroadcast {
	teamChanged?: AppTeamChanged;
	teamMessage?: AppNewTeamMessage;
	entityChanged?: AppEntityChanged;
	clanChanged?: AppClanChanged;
	clanMessage?: AppNewClanMessage;
}

export interface AppEmpty {}

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

export interface AppSuccess {}

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
	seed?: number;
	salt?: number;
	logoImage?: string;
	nexus?: string;
	nexusId?: number;
	nexusZone?: string;
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
	jpgImage: Buffer;
	oceanMargin: number;
	monuments: Monument[];
	background?: string;
}

export interface Monument {
	token: string;
	x: number;
	y: number;
}

export interface AppEntityInfo {
	type: AppEntityType;
	payload: AppEntityPayload;
}

export interface AppEntityPayload {
	value?: boolean;
	items: Item[];
	capacity?: number;
	hasProtection?: boolean;
	protectionExpiry?: number;
}

export interface Item {
	itemId: number;
	quantity: number;
	itemIsBlueprint: boolean;
}

export interface AppTeamInfo {
	leaderSteamId: number;
	members: Member[];
	mapNotes: Note[];
	leaderMapNotes: Note[];
}

export interface Member {
	steamId: number;
	name: string;
	x: number;
	y: number;
	isOnline: boolean;
	spawnTime: number;
	isAlive: boolean;
	deathTime: number;
}

export interface Note {
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
	steamId?: number;
	rotation?: number;
	radius?: number;
	color1?: Vector4;
	color2?: Vector4;
	alpha?: number;
	name?: string;
	outOfStock?: boolean;
	sellOrders: SellOrder[];
}

export interface SellOrder {
	itemId: number;
	quantity: number;
	currencyId: number;
	costPerItem: number;
	amountInStock: number;
	itemIsBlueprint: boolean;
	currencyIsBlueprint: boolean;
	itemCondition?: number;
	itemConditionMax?: number;
}

export interface AppMapMarkers {
	markers: AppMarker[];
}

export interface AppClanInfo {
	clanInfo?: ClanInfo;
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
	teamInfo: AppTeamInfo;
}

export interface AppNewTeamMessage {
	message: AppTeamMessage;
}

export interface AppEntityChanged {
	entityId: number;
	payload: AppEntityPayload;
}

export interface AppClanChanged {
	clanInfo?: ClanInfo;
}

export interface AppNewClanMessage {
	clanId: number;
	message: AppClanMessage;
}
