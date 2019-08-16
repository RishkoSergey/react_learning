import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
    _callSubscriber() { },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;