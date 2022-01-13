import {ADD_POSTS_ERROR, ADD_POST, DELETE_POST, FETCH_POSTS, EDIT_POST, UPDATE_POST} from "./feed-constans";


// export const addPost = (data) => ({
//     type: ADD_POST,
// })

export const fetchPosts = (data) => ({
    type: FETCH_POSTS,
    payload: data,
})

export const addPostsError = (error = {}) => ({
    type: ADD_POSTS_ERROR,
    payload: error
})

export const deletePost = (postId) => ({ type:DELETE_POST, payload: postId})

export const addPost = (data) => ({
    type: ADD_POST,
    payload: data,
})

export const editPost = (data) => ({
    type: EDIT_POST,
    payload: data,
})
export const updatePost = (data) => ({
    type: UPDATE_POST,
    payload: data,
});
