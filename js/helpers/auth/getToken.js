import * as storage from "../storage/index.js";

export function getToken() {
	const token = storage.load("token");
	return token;
}
