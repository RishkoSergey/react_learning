const SEND_MESSAGE = 'SEND-MESSAGE';

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
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state, 
                messages: [...state.messages, {id: state.messages.length+1, message: action.message}] 
            };
        default: return state;
    }
}

export const sendMessageActionCreator = message => ({ type: SEND_MESSAGE, message: message });

export default dialogsReducer;