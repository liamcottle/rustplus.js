// Type definitions for rustplus.js 2.3.0
// Project: rustplus.js
// Definitions by: s8wa2 https://github.com/s8wa2
import { AppMessage, AppRequest, AppError, AppResponse } from './proto';
import { EventEmitter } from 'events';
export = RustPlus;
declare class RustPlus extends EventEmitter {
	constructor(server: string, port: string, playerId: string, playerToken: string, useFacepunchProxy?: boolean);
	server: string;
	port: string;
	playerId: string;
	playerToken: string;
	useFacePunchProxy: boolean;

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
	 * @param callback function to handle AppMessage
	 */
	sendRequest(data: UserRequest, callback: (message: AppMessage) => any): void;
	/**
	 * Send a Request to the Rust Server and return a Promise
	 * @param data this should contain valid data for the AppRequest packet defined in the rustplus.proto schema file
	 * @param timeoutMilliseconds milliseconds before the promise will be rejected. Defaults to 10 seconds.
	 */
	sendRequestAsync(data: UserRequest, timeoutMilliseconds?: number): Promise<AppResponse>;
	/**
	 * Send a Request to the Rust Server to set the Entity Value.
	 * @param entityId the entity id to set the value for
	 * @param value the value to set on the entity
	 * @param callback
	 */
	setEntityValue(entityId: string, value: boolean, callback: (message: AppMessage) => any): void;
	/**
	 * Turn a Smart Switch On
	 * @param entityId the entity id of the smart switch to turn on
	 * @param callback
	 */
	turnSmartSwitchOn(entityId: string, callback: (message: AppMessage) => any): void;
	/**
	 * Turn a Smart Switch Off
	 * @param entityId the entity id of the smart switch to turn off
	 * @param callback
	 */
	turnSmartSwitchOff(entityId: string, callback: (message: AppMessage) => any): void;
	/**
	 * Quickly turn on and off a Smart Switch as if it were a Strobe Light.
	 * You will get rate limited by the Rust Server after a short period.
	 * It was interesting to watch in game though 😝
	 */
	strobe(entityId: string, timeoutMilliseconds?: number, value?: boolean): void;
	/**
	 * Send a message to Team Chat
	 * @param message the message to send to team chat
	 * @param callback
	 */
	sendTeamMessage(message: string, callback: (message: AppMessage) => any): void;
	/**
	 * Get info for an Entity
	 * @param entityId the id of the entity to get info of
	 * @param callback
	 */
	getEntityInfo(entityId: string, callback: (message: AppMessage) => any): void;
	/**
	 * Get the Map
	 */
	getMap(callback: (message: AppMessage) => any): void;
	/**
	 * Get the ingame time
	 */
	getTime(callback: (message: AppMessage) => any): void;
	/**
	 * Get all map markers
	 */
	getMapMarkers(callback: (message: AppMessage) => any): void;
	/**
	 * Get the server info
	 */
	getInfo(callback: (message: AppMessage) => any): void;
	/**
	 * Get team info
	 */
	getTeamInfo(callback: (message: AppMessage) => any): void;
	/**
	 * Get CCTV Camera frame
	 * @param identifier CCTV Camera Identifier, such as OILRIG1 (or custom name)
	 * @param frame integer that should be incremented for each frame request. Otherwise a cached frame is returned
	 * @param callback
	 * @deprecated was removed from official app
	 */
	getCameraFrame(identifier: string, frame: number, callback: (message: AppMessage) => any): void;
}

interface UserRequest extends Omit<AppRequest, 'seq' | 'playerToken' | 'playerId'> {}
