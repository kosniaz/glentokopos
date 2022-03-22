import posts from '../data/posts'

const postReducer = function posts(state = posts, action){
    
    switch(action.type){
        case 'REMOVE_POST': return[...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return[...state,action.post]
        case 'LOAD_POSTS': return action.posts
        default: return state
    }
}

export default postReducer