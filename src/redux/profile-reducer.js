const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    ], 
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, 
                posts: [...state.posts, {id: state.posts.length+1, message: action.postMessage, likesCount: 0}] 
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default: return state;
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, postMessage: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;