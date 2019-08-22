import React from 'react';
import style from './User.module.css'

const User = (props) => {
    return (
        <div className={style.item}>
            <div className={style.photo}><img src={props.photo}></img></div>
            <div className={style.name}>{props.name}</div>
            <div className={style.city}>{props.city}</div>
            <div className={style.status}>{props.status}</div>
            <div className={style.follow}>
                {props.followed 
                ? <button onClick={() => {props.unfollow(props.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(props.id)}}>Follow</button> }
            </div>
        </div>
    )
}

export default User;