import { logoutButtonHandler } from "../../handlers/auth/logoutButtonHandler.js";
import { isLoggedIn } from "../../helpers/auth/isLoggedIn.js";

export function buildMenu(path) {
	const menu = document.querySelector("#menu");

	console.log("path:", path);

	if (isLoggedIn()) {
		menu.innerHTML = `
                  <li class="nav-item">
                  <a class="nav-link ${path === "/" ? "active" : ""}" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <button id="logout" class="btn btn-secondary">Log out</button>
              </li>
        `;

		logoutButtonHandler();
	} else {
		menu.innerHTML = `
              <li class="nav-item">
                <a class="nav-link ${path === "/" ? "active" : ""}" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${path === "/auth/login/" ? "active" : ""}" href="/auth/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${path === "/auth/register/" ? "active" : ""}" href="/auth/register">Register</a>
              </li>
    `;
	}
}
