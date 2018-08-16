
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
		case "DELETE_COMMENT":
			return state.filter(comment => comment.id !== action.id);
		default:
			return state;
	}
};

export default comments;