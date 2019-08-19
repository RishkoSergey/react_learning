import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} 
                                                   photo={props.photo}/>).reverse();
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className={style.content}>
            <div className={style.newPost}>
                <div className={style.text}><textarea ref={newPostElement} 
                placeholder='Enter your post here' cols='105'></textarea></div>
                <div className={style.button}><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;