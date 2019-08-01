import React from 'react';
import style from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/'+props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;