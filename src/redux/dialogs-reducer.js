const SEND_MESSAGE='SEND-MESSAGE';

let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: state.messages.length + 1,
            message: action.message
        }
        state.messages.push(newMessage);
    }
    return state;
}

export const sendMessageActionCreator = message => ({ type: SEND_MESSAGE, message: message });

export default dialogsReducer;