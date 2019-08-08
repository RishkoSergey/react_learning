let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Hustler' },
                { id: 2, name: 'Gangster' },
                { id: 3, name: 'Mafiozi' }
            ],
            messages: [
                { id: 1, message: 'Yo' },
                { id: 2, message: 'Wassup?' },
                { id: 3, message: 'Where r u, bro?' }
            ]
        }
    },
    getState() { return this._state },
    rerenderEntireTree() { },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this.rerenderEntireTree();
        }
    }
}

export default store;