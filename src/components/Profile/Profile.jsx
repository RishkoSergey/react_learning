import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div>
            <ProfileInfo info={props.profilePage.info}/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}
                     photo={props.profilePage.info.photo}/>
        </div>
    )
}

export default Profile;