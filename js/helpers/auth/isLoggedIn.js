import * as storage from "../storage/index.js";

export function isLoggedIn() {
	const token = storage.load("token");
	if (token) {
		return true;
	}

	return false;
}
