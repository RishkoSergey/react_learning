import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 18}
]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3 className={style.text}>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;