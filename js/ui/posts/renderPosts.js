export function renderPosts(parent, posts) {
	const container = document.querySelector(parent);

	container.innerHTML = "";

	// posts.forEach((post) => {
	// 	const postContainer = createPost(post);
	// 	container.appendChild(postContainer);
	// });

	const postsHtml = posts.map((post) => {
		return createPost(post);
	});

	container.append(...postsHtml);

	console.log(...postsHtml);

	// console.log(container, posts);
}

function createPost(post) {
	const { id, title: heading } = post;

	const postContainer = document.createElement("div");
	postContainer.classList.add("post");

	const title = document.createElement("h2");
	title.textContent = heading;

	// Create a link to post.html with the id in the querystring
	const link = document.createElement("a");
	link.href = `/post/index.html?id=${id}`;
	link.textContent = "Read More";
	link.classList.add("post-link");

	postContainer.append(title);
	postContainer.append(link); // Append the link to the post container

	return postContainer;
}
