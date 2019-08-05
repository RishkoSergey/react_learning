import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 18}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Hustler'},
            {id: 2, name: 'Gangster'},
            {id: 3, name: 'Mafiozi'}
        ],
        messages: [
            {id: 1, message: 'Yo'},
            {id: 2, message: 'Wassup?'},
            {id: 3, message: 'Where r u, bro?'}
        ]
    }
}

export let addPost = postMessage => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;