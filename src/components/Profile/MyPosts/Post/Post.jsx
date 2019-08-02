import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cs7.pikabu.ru/post_img/big/2018/07/29/8/1532867114198722.jpg' align='middle'></img>
            <span className={style.message}>{props.message}</span>
            <div className={style.likes}>likes: {props.likesCount} </div>
        </div>
    )
}

export default Post;