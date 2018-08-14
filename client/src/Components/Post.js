import React from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import { getComments } from "../reducers";

const Post = ({ post, deletePost, getPostComments, addComment }) => {
	return (
		<div>
			<p>{post.text}</p>
			<button onClick={() => deletePost(post.id)}>
				Delete post you dick!
			</button>
			<div>
				<p>Comments</p>
				{getPostComments(post.id).map(commentObj => (
					<p key={commentObj.id}>{commentObj.comment}</p>
				))}
				<input
					type="text"
					placeholder="Add a comment"
					onKeyDown={e => {
						if (e.key === "Enter") {
							addComment(post.id, e.target.value);
							e.target.value = '';
						}
					}}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	getPostComments: postId => {
		return getComments(state, postId);
	}
});

export default connect(
	mapStateToProps,
	actions
)(Post);
