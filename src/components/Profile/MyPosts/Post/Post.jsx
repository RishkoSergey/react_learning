import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.photo} align='middle'></img>
            <span className={style.message}>{props.message}</span>
            <div className={style.likes}>likes: {props.likesCount} </div>
        </div>
    )
}

export default Post;