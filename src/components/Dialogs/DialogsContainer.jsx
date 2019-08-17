import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = props => {
    let sendMessage = message => {
        props.store.dispatch(sendMessageActionCreator(message));
    }
    return (<Dialogs sendMessage = {sendMessage} dialogs = {props.store.getState().dialogsPage.dialogs} 
                     messages = {props.store.getState().dialogsPage.messages} />)
}

export default DialogsContainer;