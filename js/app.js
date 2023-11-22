import { displayBooks } from "./handlers/displayBooks.js";

function router() {
	const pathname = window.location.pathname;

	console.log(pathname);

	// if (pathname === "/" || pathname === "/index.html") {
	// 	console.log("this is the home page ");
	// } else if (pathname === "/book.html") {
	// 	console.log("this is the book page ");
	// }

	switch (pathname) {
		case "/":
		case "/index.html":
			console.log("this is the home page ");
			displayBooks();
			break;
		case "/book.html":
			console.log("this is the book pageasd asd asd ");
			break;
	}
}

router();
