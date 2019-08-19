import React from 'react';
import style from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
    return (
        <div>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;