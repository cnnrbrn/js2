import * as storage from "../../helpers/storage/index.js";

export function logoutButtonHandler() {
	const button = document.querySelector("#logout");
	if (button) {
		button.addEventListener("click", handleLogout);
	}
}

function handleLogout() {
	const shouldLogout = confirm("Are you sure you want to logout?");

	if (shouldLogout) {
		storage.remove("token");
		window.location.href = "/";
	}
}
