import React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../reducers";
import Post from "./Post";

const PostFeed = props => {
	return (
		<Fragment>
			{props.posts.map(post => (
				<Link to={`/posts/${post.id}`}>
					<Post key={post.id} post={post} />
				</Link>
			))}
		</Fragment>
	);
};

const mapStateToProps = state => ({
	posts: getPosts(state)
});

export default connect(mapStateToProps)(PostFeed);
