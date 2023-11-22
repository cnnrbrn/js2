import api from "../constants/api.js";

export async function getBooks() {
	const response = await fetch(api);
	const json = await response.json();
	return json;
}
