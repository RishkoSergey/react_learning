const ADD_POST='ADD-POST';

let initialState = {
    info: {
        name: 'Sergey Rishko',
        birthday: '01.09.1997',
        city: 'Saint-Petersburg',
        photo: 'https://cs7.pikabu.ru/post_img/big/2018/07/29/8/1532867114198722.jpg'
    },
    posts: [
        { id: 1, message: 'It is my first post', likesCount: 12 },
        { id: 2, message: 'Hi, how are you?', likesCount: 18 }
    ]
}

const profileReducer = (state = initialState, action) => {
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