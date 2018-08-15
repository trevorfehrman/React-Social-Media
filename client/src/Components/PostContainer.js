import React from "react";
import { connect } from "react-redux";
import { getPost } from "../reducers";
import Post from "./Post";

const PostContainer = ({ getCurrentPost, match }) => {
	return (
		<div>
			<Post post={getCurrentPost(Number(match.params.id))}/>
		</div>
	);
};

const mapStateToProps = state => ({
	getCurrentPost: id => {
		return getPost(state, id)
	}
});

export default connect(mapStateToProps)(PostContainer);
