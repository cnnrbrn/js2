import { loginFormHandler } from "./handlers/auth/loginFormHandler.js";
import { registerFormHandler } from "./handlers/auth/registerFormHandler.js";
import { displayPostsHandler } from "./handlers/posts/displayPostsHandler.js";
import { buildMenu } from "./ui/common/buildMenu.js";

function router() {
	const pathname = window.location.pathname;

	console.log(pathname);

	buildMenu(pathname);

	switch (pathname) {
		case "/":
		case "/index.html":
			loginFormHandler();
			break;

		case "/auth/register/":
		case "/auth/register/index.html":
			registerFormHandler();
			break;

		case "/posts/":
		case "/posts/index.html":
			displayPostsHandler();
			break;

		case "/post/index.html":
			displaySinglePostHandler();
			break;
	}
}

router();
