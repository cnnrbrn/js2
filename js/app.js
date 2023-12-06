import { loginFormHandler } from "./handlers/auth/loginFormHandler.js";
import { registerFormHandler } from "./handlers/auth/registerFormHandler.js";
import { buildMenu } from "./ui/common/buildMenu.js";

function router() {
	const pathname = window.location.pathname;

	console.log(pathname);

	buildMenu(pathname);

	switch (pathname) {
		case "/":
		case "/index.html":
			registerFormHandler();
			break;

		case "/auth/login/":
		case "/auth/login/index.html":
			loginFormHandler();
			break;
	}
}

router();
