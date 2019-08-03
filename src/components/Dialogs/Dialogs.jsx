import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; 

const Dialogs = props => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);
    return (
        <div className={style.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;