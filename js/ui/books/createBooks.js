import { createBook } from "./createBook.js";

// pass in the array of books
export function createBooks(books) {
	const container = document.querySelector("#book-container");

	container.innerHTML = "";

	books.forEach(function (book) {
		const bookHtml = createBook(book);
		container.append(bookHtml);

		// const { title, author, description } = book;

		// container.innerHTML += `<div class="book">
		//                           <h3>${title}</h3>
		//                           <p>Author: ${author}</p>
		//                           <p>${description}</p>
		//                         </div>`;
	});
}
