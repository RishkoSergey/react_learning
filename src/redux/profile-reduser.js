const ADD_POST='ADD-POST';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: state.posts.length + 1,
            message: action.postMessage,
            likesCount: 0
        }
        state.posts.push(newPost);
    }
    return state;
}

export const addPostActionCreator = text => ({ type: ADD_POST, postMessage: text });

export default profileReducer;