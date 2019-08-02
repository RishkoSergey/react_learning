import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; 

let dialogs = [
    {id: 1, name: 'Hustler'},
    {id: 2, name: 'Gangster'},
    {id: 3, name: 'Mafiozi'}
]

let messages = [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'Wassup?'},
    {id: 3, message: 'Where r u, bro?'}
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = () => {
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