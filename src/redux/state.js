let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It is my first post', likesCount: 12},
                {id: 2, message: 'Hi, how are you?', likesCount: 18}
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
    },
    getState() { return this._state },
    rerenderEntireTree() {},
    addPost(postMessage) {
        let newPost = {
            id: this._state.profilePage.posts.length+1,
            message: postMessage,
            likesCount: 0
        }
        console.log(newPost.id);
        this._state.profilePage.posts.push(newPost);
        this.rerenderEntireTree();
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    } 
}

export default store;