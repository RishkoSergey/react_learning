import Dialogs from './Dialogs';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => { 
            dispatch(sendMessageActionCreator(message)); 
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;