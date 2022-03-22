import { database } from "../database/config"

// remove
export function addingPost(post){
    return(dispatch) =>{
        return database.ref('posts').update({[post.id]: post}).then(()=>{
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost(){
    return (dispatch) =>{
        return database.ref('posts').once('value').then((snapshot) => {
            let posts =[]
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function removingPost(index, id){
    return(dispatch) =>{
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
    }
}
export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return{
        type: 'ADD_POST',
        post
    }
}
export function loadPosts(posts){
    return{
        type: 'LOAD_POSTS',
        posts
    }    
}
