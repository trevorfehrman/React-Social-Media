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

export const addComment = (postId, comment) => ({
    type: 'ADD_COMMENT',
    id: nextCommentID++,
    postId,
    comment,
})