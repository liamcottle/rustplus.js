// Type definitions for rustplus.js 2.3.0
// Project: rustplus.js
import { EventEmitter } from "events";
import type { RequireAtLeastOne } from "type-fest";

// Definitions by: s8wa2 https://github.com/s8wa2
import { AppMessage, AppRequest, AppResponse } from "./proto";
import protobuf from "protobufjs";
export = RustPlus;

interface RustPlusEvents {
	error: [error: Error];
	connected: [];
	connecting: [];
	disconnected: [];
	message: [message: AppMessage];
	request: [request: AppRequest];
}

declare class RustPlus extends EventEmitter {
	constructor(
		server: string,
		port: string,
		playerId: string,
		playerToken: string,
		useFacepunchProxy?: boolean
	);
	// Events
	on<K extends keyof RustPlusEvents>(
		event: K,
		listener: (...args: RustPlusEvents[K]) => void
	): this;
	on<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => void
	): this;

	once<K extends keyof RustPlusEvents>(
		event: K,
		listener: (...args: RustPlusEvents[K]) => void
	): this;
	once<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => void
	): this;

	emit<K extends keyof RustPlusEvents>(
		event: K,
		...args: RustPlusEvents[K]
	): boolean;
	emit<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		...args: unknown[]
	): boolean;

	off<K extends keyof RustPlusEvents>(
		event: K,
		listener: (...args: RustPlusEvents[K]) => void
	): this;
	off<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => void
	): this;

	removeAllListeners<K extends keyof RustPlusEvents>(event?: K): this;
	removeAllListeners<S extends string | symbol>(
		event?: Exclude<S, keyof RustPlusEvents>
	): this;

	// Properties
	server: string;
	port: string;
	playerId: string;
	playerToken: string;
	useFacePunchProxy: boolean;
	AppRequest: protobuf.Type | undefined; /* Defined on first connection */
	AppMessage: protobuf.Type | undefined; /* Defined on first connection */
	websocket:
		| WebSocket
		| null
		| undefined; /* Defined on first connection, null on disconnect */

	/**
	 * This sets everything up and then connects to the Rust Server via WebSocket.
	 */
	connect(): void;
	/**
	 * Disconnect from the Rust Server.
	 */
	disconnect(): void;
	/**
	 * Send a Request to the Rust Server with an optional callback when a Response is received.
	 * @param data this should contain valid data for the AppRequest packet in the rustplus.proto schema file
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	sendRequest(
		data: UserRequest,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Send a Request to the Rust Server and return a Promise
	 * @param data this should contain valid data for the AppRequest packet defined in the rustplus.proto schema file
	 * @param timeoutMilliseconds milliseconds before the promise will be rejected. Defaults to 10 seconds.
	 */
	sendRequestAsync(
		data: UserRequest,
		timeoutMilliseconds?: number
	): Promise<AppResponse>;
	/**
	 * Send a Request to the Rust Server to set the Entity Value.
	 * @param entityId the entity id to set the value for
	 * @param value the value to set on the entity
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	setEntityValue(
		entityId: string,
		value: boolean,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Turn a Smart Switch On
	 * @param entityId the entity id of the smart switch to turn on
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	turnSmartSwitchOn(
		entityId: string,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Turn a Smart Switch Off
	 * @param entityId the entity id of the smart switch to turn off
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	turnSmartSwitchOff(
		entityId: string,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
	 * You will get rate limited by the Rust Server after a short period.
	 * It was interesting to watch in game though 😝
	 */
	strobe(entityId: string, timeoutMilliseconds?: number, value?: boolean): void;
	/**
	 * Send a message to Team Chat
	 * @param message the message to send to team chat
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	sendTeamMessage(
		message: string,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Get info for an Entity
	 * @param entityId the id of the entity to get info of
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	getEntityInfo(
		entityId: string,
		callback?: (message: AppMessage) => boolean | void
	): void;
	/**
	 * Get the Map
	 */
	getMap(callback?: (message: AppMessage) => boolean | void): void;
	/**
	 * Get the ingame time
	 */
	getTime(callback?: (message: AppMessage) => boolean | void): void;
	/**
	 * Get all map markers
	 */
	getMapMarkers(callback?: (message: AppMessage) => boolean | void): void;
	/**
	 * Get the server info
	 */
	getInfo(callback?: (message: AppMessage) => boolean | void): void;
	/**
	 * Get team info
	 */
	getTeamInfo(callback?: (message: AppMessage) => boolean | void): void;
	/**
	 * Get CCTV Camera frame
	 * @param identifier CCTV Camera Identifier, such as OILRIG1 (or custom name)
	 * @param frame integer that should be incremented for each frame request. Otherwise a cached frame is returned
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 * @deprecated was removed from official app
	 */
	getCameraFrame(
		identifier: string,
		frame: number,
		callback?: (message: AppMessage) => boolean | void
	): void;
}

type UserRequest = RequireAtLeastOne<
	Omit<AppRequest, "seq" | "playerToken" | "playerId">
>;
