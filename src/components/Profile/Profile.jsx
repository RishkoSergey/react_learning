import React from 'react';
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