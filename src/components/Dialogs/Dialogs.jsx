import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = props => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);
    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let message = newMessageElement.current.value;
        props.sendMessage(message);
        newMessageElement.current.value = '';
    }
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                <div>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
            <div className={style.enterMessage}>
                <div>
                    <textarea ref={newMessageElement} placeholder='Enter your message' 
                              cols='105'></textarea>
                </div>
                <div><button onClick={sendMessage}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;