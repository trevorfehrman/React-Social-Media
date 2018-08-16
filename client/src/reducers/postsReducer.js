export const posts = (state = [], action) => {
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
		case "TOGGLE_LIKE":
			return state.map(post => {
				if (post.id === action.id) {
					return { ...post, liked: !post.liked };
				} else return post;
			});
		default:
			return state;
	}
};

export const currentPost = (state=0, action) => {
    if (action.type === 'SET_CURRENT_POST') {
        return action.id;
    }   else {
        return state;
    }
}

