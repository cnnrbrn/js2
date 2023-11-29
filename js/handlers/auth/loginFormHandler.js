import { login } from "../../api/auth/login.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export function loginFormHandler() {
	const form = document.querySelector("#loginForm");

	form.addEventListener("submit", handleLoginForm);
}

async function handleLoginForm(event) {
	event.preventDefault();
	console.log(event);

	const form = event.target;

	const formData = new FormData(form);
	const entries = formData.entries();
	const userDetails = Object.fromEntries(entries);

	const fieldset = form.querySelector("fieldset");

	try {
		fieldset.disabled = true;
		const { accessToken } = await login(userDetails);
		// store accessToken (response.accessToken) in localstorage
		location.href = "/posts";
	} catch (error) {
		console.log(error);
		displayMessage("#message", "danger", error.message);
	} finally {
		fieldset.disabled = false;
	}
}
