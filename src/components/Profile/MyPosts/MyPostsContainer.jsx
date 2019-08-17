import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
    let addPost = text => {
        props.store.dispatch(addPostActionCreator(text));
    }
    return (<MyPosts addPost = {addPost} posts = {props.store.getState().profilePage.posts} 
                     photo = {props.store.getState().profilePage.info.photo}/>)
}

export default MyPostsContainer;