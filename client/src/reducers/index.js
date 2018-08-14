import { combineReducers } from "redux";

const posts = (state = [], action) => {
	switch (action.type) {
		case "ADD_POST":
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					liked: action.liked
				}
			];
		case "DELETE_POST":
			return state.filter(post => post.id !== action.id);
		default:
			return state;
	}
};

const comments = (state = [], action) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return [
				...state,
				{
					postId: action.postId,
					id: action.id,
					comment: action.comment
				}
			];
		default:
			return state;
	}
};

export const getPosts = state => state.posts;

export const getComments = (state, postId) => {
	return state.comments.filter(comment => comment.postId === postId);
};

export default combineReducers({
	comments,
	posts
});
