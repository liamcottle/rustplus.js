export interface AppMessage {
	response?: AppResponse;
	broadcast?: AppBroadcast;
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
	getCameraFrame?: AppCameraFrameRequest;
	promoteToLeader?: AppPromoteToLeader;
}

export interface AppSendMessage {
	message: string;
}

export interface AppSetEntityValue {
	value: boolean;
}

export interface AppCameraFrameRequest {
	identifier: string;
	frame: number;
}

export interface AppPromoteToLeader {
	steamId: number;
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
	cameraFrame?: AppCameraFrame;
}

export interface AppBroadcast {
	teamChanged?: AppTeamChanged;
	teamMessage?: AppTeamMessage;
	entityChanged?: AppEntityChanged;
}

export interface AppEmpty { }

export interface AppSuccess { }

export interface AppError {
	error: string;
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
}

export interface AppTime {
	dayLengthMinutes: float;
	timeScale: float;
	sunrise: float;
	sunset: float;
	time: float;
}

export interface AppMap {
	width: number;
	height: number;
	jpgImage: bytes;
	oceanMargin: number;
	monuments: Monument[];
	background?: string;
}

export interface Monument {
	token: string;
	x: float;
	y: float;
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
	x: float;
	y: float;
	isOnline: boolean;
	spawnTime: number;
	isAlive: boolean;
	deathTime: number;
}

export interface Note {
	type: number;
	x: float;
	y: float;
}

export interface AppTeamChat {
	messages: AppChatMessage[];
}

export interface AppChatMessage {
	steamId: number;
	name: string;
	message: string;
	color: string;
	time: number;
}

export interface AppEntityInfo {
	type: AppEntityType = 1;
	payload: AppEntityPayload = 3;
}

export enum AppEntityType {
	Switch = 1,
	Alarm = 2,
	StorageMonitor = 3,
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

export interface AppFlag {
	value: boolean;
}

export interface AppMapMarkers {
	markers: AppMarker[];
}

export interface Vector4 {
	x?: float;
	y?: float;
	z?: float;
	w?: float;
}

export interface AppMarker {
	id: number;
	type: AppMarkerType;
	x: float;
	y: float;
	steamId?: number;
	rotation?: float;
	radius?: float;
	color1?: Vector4;
	color2?: Vector4;
	alpha?: float;
	name?: string;
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
}

export enum AppMarkerType {
	Player = 1,
	Explosion = 2,
	VendingMachine = 3,
	CH47 = 4,
	CargoShip = 5,
	Crate = 6,
	GenericRadius = 7,
}

export interface AppCameraFrame {
	frame: number;
	jpgImage: bytes;
}

export interface AppTeamChanged {
	playerId: number;
	teamInfo: AppTeamInfo;
}

export interface AppTeamMessage {
	message: AppChatMessage;
}

export interface AppEntityChanged {
	entityId: number;
	payload: AppEntityPayload;
}
