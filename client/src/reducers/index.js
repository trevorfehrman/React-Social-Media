import { combineReducers } from "redux";
import { posts, currentPost } from './postsReducer';
import comments from './commentReducer'





export const getPosts = state => state.posts;

export const getPost = (state,id) => {
	return state.posts.find( post => post.id === id)
}

export const getComments = (state, postId) => {
	return state.comments.filter(comment => comment.postId === postId);
};

export default combineReducers({
	comments,
	posts,
	currentPost
});
