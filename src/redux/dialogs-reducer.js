const SEND_MESSAGE='SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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