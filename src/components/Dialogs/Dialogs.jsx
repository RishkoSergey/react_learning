import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; 

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div>
                <DialogItem name='Hustler' id='1' />
                <DialogItem name='Gangster' id='2' />
                <DialogItem name='Mafiozi' id='3' />
            </div>
            <div>
                <Message message='Hi' />
                <Message message='Wassup?' />
                <Message message='Where r u, bro?' />
            </div>
        </div>
    )
}

export default Dialogs;