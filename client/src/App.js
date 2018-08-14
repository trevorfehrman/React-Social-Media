import React from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import { getPosts } from "./reducers";

import Post from './Components/Post';

function App(props) {
	const { posts, addPost } = props;
	return (
		<div className="App">
			<h1>React Social Media</h1>
			<i>The number one social media for rigging elections</i>
			<div>
				{posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</div>
			<div>
				<input
					type="text"
					placeholder="Add a post!"
					onKeyDown={event => {
						if (event.key === "Enter") {
							addPost(event.target.value);
							event.target.value = '';
					}}}
				/>
			</div>
		</div>
	);
}

const mapStatetoProps = state => ({
	posts: getPosts(state)
});

export default connect(
	mapStatetoProps,
	actions
)(App);
