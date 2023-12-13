import { getSinglePost } from "../../api/posts/getSinglePost.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";

export async function displaySinglePostHandler() {
	// Get the id from the querystring

	try {
		if (!id) {
			throw new Error("No post ID was provided");
		}

		const post = await getSinglePost(id);
		document.title = `${post.title} | JS 2`;
		renderPost("#post", post);
	} catch (error) {
		console.log(error);
		displayMessage("#post", "danger", error.message);
	}
}
