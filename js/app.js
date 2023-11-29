function router() {
	const pathname = window.location.pathname;

	console.log(pathname);

	switch (pathname) {
		case "/":
		case "/index.html":
			console.log("this is the home page ");
			break;
	}
}

router();
