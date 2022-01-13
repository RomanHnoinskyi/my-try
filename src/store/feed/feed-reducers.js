import {FETCH_POSTS, ADD_POSTS_ERROR,  DELETE_POST, ADD_POST, EDIT_POST, UPDATE_POST} from "./feed-constans";

 const defaultState= {
    posts: [],
    error: {},
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_POSTS :
            return {...state, posts: action.payload}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case ADD_POST:
            return {...state,  posts: [ ...state.posts, action.payload ]}
        case EDIT_POST:
            return {...state,
                posts: [ state.posts.map(post => post.id === action.payload.data.id ? {...post, content: action.payload.data} : post)]}

        case UPDATE_POST:
            console.log(action.payload)
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if(post.id === action.payload.id) {
                        return {
                            title: action.payload.title,
                            body: action.payload.body,
                        }
                    } else {
                        return post;
                    }
                })
            };
        case ADD_POSTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;
