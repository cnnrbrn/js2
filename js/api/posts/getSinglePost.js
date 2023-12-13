import { POSTS_URL } from "../../constants/api.js";
import { getToken } from "../../helpers/auth/getToken.js";

export async function getSinglePost(id) {
	const token = getToken();

	if (!token) {
		throw new Error("You must be logged in to view posts");
	}

	const options = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await fetch(POSTS_URL, options);
	const json = await response.json();

	console.log(response);

	if (!response.ok) {
		throw new Error(json.errors[0].message);
	}

	return json;
}
