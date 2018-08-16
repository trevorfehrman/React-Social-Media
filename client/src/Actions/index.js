let nextPostID = 1
let nextCommentID = 1

export const addPost = text => ({
    type: 'ADD_POST',
    id: nextPostID++,
    liked: false,
    text
})

export const deletePost = id => ({
    type:'DELETE_POST',
    id
})

export const toggleLike = id =>({
    type: 'TOGGLE_LIKE',
    id
})

export const addComment = (postId, comment) => ({
    type: 'ADD_COMMENT',
    id: nextCommentID++,
    postId,
    comment,
})

export const deleteComment = id => ({
    type: 'DELETE_COMMENT',
    id
})

export const setCurrentPost = id => ({
    type: 'SET_CURRENT_POST',
    id
})