import React from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import { getComments } from "../reducers";
import { Link } from "react-router-dom";

const Post = ({
	post,
	deletePost,
	getPostComments,
	addComment,
	deleteComment,
	toggleLike,
}) => {
	return (
		<div>
			<Link to={`/posts/${post.id}`}>
				<p>{post.text}</p>
			</Link>
			<button onClick={() => deletePost(post.id)}>
				Delete post you dick!
			</button>
			<div>
				<button onClick={() => toggleLike(post.id)}>
					{post.liked ? "unlike" : "like"}
				</button>
				<p>Comments</p>
				{getPostComments(post.id).map(commentObj => (
					<p key={commentObj.id}>
						{commentObj.comment}
						<button onClick={() => deleteComment(commentObj.id)}>
							&times;
						</button>
					</p>
				))}
				<input
					type="text"
					placeholder="Add a comment"
					onKeyDown={e => {
						if (e.key === "Enter") {
							addComment(post.id, e.target.value);
							e.target.value = "";
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
	},
});

export default connect(
	mapStateToProps,
	actions,
)(Post);
