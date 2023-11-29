import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../ui/common/displayMessage.js";

export function registerFormHandler() {
	const form = document.querySelector("#registerForm");

	form.addEventListener("submit", handleRegisterForm);
}

async function handleRegisterForm(event) {
	event.preventDefault();
	const form = event.target;
	const formData = new FormData(form);
	const entries = formData.entries();
	const userDetails = Object.fromEntries(entries);

	const fieldset = form.querySelector("fieldset");

	try {
		fieldset.disabled = true;
		await register(userDetails);
		displayMessage("#message", "success", 'You registered successfully, please <a href="login.html">login</a>');
		form.reset();
	} catch (error) {
		console.log(error);
		displayMessage("#message", "danger", error.message);
	} finally {
		fieldset.disabled = false;
	}
}
