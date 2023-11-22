import { getBooks } from "../api/getBooks.js";
import { createBooks } from "../ui/books/createBooks.js";
import { displayMessage } from "../ui/common/displayMessage.js";

export async function displayBooks() {
	try {
		const books = await getBooks();
		createBooks(books);
	} catch (error) {
		console.error(error);

		displayMessage("#book-container", "alert-danger", "There was an error fetching the books.");

		// const container = document.querySelector("#book-container");
		// container.innerHTML = `<div class="error">There was an error fetching the books.</div>`;
		// display a message to the user
	}
}
