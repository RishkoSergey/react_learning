import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3 className={style.text}>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?'/>
                <Post message='It is my first post'/>
            </div>
        </div>
    )
}

export default MyPosts;