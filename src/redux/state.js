let rerenderEntireTree = () => {}

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

export const addPost = postMessage => {
    let newPost = {
        id: state.profilePage.posts.length+1,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree();
}

export const subscribe = observer => {
    rerenderEntireTree = observer;
} 

export default state;