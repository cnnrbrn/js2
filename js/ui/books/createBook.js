export function createBook(book) {
	const { title, author, description } = book;

	const bookDiv = document.createElement("div");
	bookDiv.classList.add("book");

	const titleHeading = document.createElement("h3");
	titleHeading.textContent = title;

	const authorParagraph = document.createElement("p");
	authorParagraph.textContent = `Author: ${author}`;

	const descriptionParagraph = document.createElement("p");
	descriptionParagraph.textContent = description;

	bookDiv.appendChild(titleHeading);
	bookDiv.appendChild(authorParagraph);
	bookDiv.appendChild(descriptionParagraph);

	return bookDiv;
}
