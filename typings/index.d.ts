// Type definitions for rustplus.js 2.4.0
// Project: rustplus.js
// Definitions by: s8wa2 https://github.com/s8wa2
import { EventEmitter } from "events";
import protobuf from "protobufjs";

import Camera from "../camera";
import { AppMessage, AppRequest, AppResponse } from "./proto";

import type { RequireAtLeastOne, Promisable } from "type-fest";

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
		listener: (...args: RustPlusEvents[K]) => Promisable<void>
	): this;
	on<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => Promisable<void>
	): this;

	once<K extends keyof RustPlusEvents>(
		event: K,
		listener: (...args: RustPlusEvents[K]) => Promisable<void>
	): this;
	once<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => Promisable<void>
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
		listener: (...args: RustPlusEvents[K]) => Promisable<void>
	): this;
	off<S extends string | symbol>(
		event: Exclude<S, keyof RustPlusEvents>,
		listener: (...args: any[]) => Promisable<void>
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
	 * Check if RustPlus is connected to the server.
	 */
	isConnected(): boolean;

	/**
	 * Send a Request to the Rust Server with an optional callback when a Response is received.
	 * @param data this should contain valid data for the AppRequest packet in the rustplus.proto schema file
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	sendRequest(
		data: UserRequest,
		callback?: (message: AppMessage) => Promisable<boolean | void>
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
		entityId: number,
		value: boolean,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Turn a Smart Switch On
	 * @param entityId the entity id of the smart switch to turn on
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	turnSmartSwitchOn(
		entityId: number,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Turn a Smart Switch Off
	 * @param entityId the entity id of the smart switch to turn off
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	turnSmartSwitchOff(
		entityId: number,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
	 * You will get rate limited by the Rust Server after a short period.
	 * It was interesting to watch in game though 😝
	 */
	strobe(entityId: number, timeoutMilliseconds?: number, value?: boolean): void;

	/**
	 * Send a message to Team Chat
	 * @param message the message to send to team chat
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	sendTeamMessage(
		message: string,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Get info for an Entity
	 * @param entityId the id of the entity to get info of
	 * @param callback AppMessage handler, returning true prevents the message event from firing
	 */
	getEntityInfo(
		entityId: number,
		callback: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Get the Map
	 */
	getMap(callback: (message: AppMessage) => Promisable<boolean | void>): void;

	/**
	 * Get the ingame time
	 */
	getTime(callback: (message: AppMessage) => Promisable<boolean | void>): void;

	/**
	 * Get all map markers
	 */
	getMapMarkers(
		callback: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Get the server info
	 */
	getInfo(callback: (message: AppMessage) => Promisable<boolean | void>): void;

	/**
	 * Get team info
	 */
	getTeamInfo(
		callback: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Subscribes to a Camera
	 * @param identifier Camera Identifier, such as OILRIG1 (or custom name)
	 * @param callback
	 */
	subscribeToCamera(
		identifier: string,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Unsubscribes from a Camera
	 * @param callback
	 */
	unsubscribeFromCamera(
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Sends camera input to the server (mouse movement)
	 * @param buttons The buttons that are currently pressed
	 * @param x The x delta of the mouse movement
	 * @param y The y delta of the mouse movement
	 * @param callback
	 */
	sendCameraInput(
		buttons: number,
		x: number,
		y: number,
		callback?: (message: AppMessage) => Promisable<boolean | void>
	): void;

	/**
	 * Get a camera instance for controlling CCTV Cameras, PTZ Cameras and  Auto Turrets
	 * @param identifier Camera Identifier, such as DOME1, OILRIG1L1, (or a custom camera id)
	 */
	getCamera(identifier: string): Camera;
}

type UserRequest = RequireAtLeastOne<
	Omit<AppRequest, "seq" | "playerToken" | "playerId">
>;
