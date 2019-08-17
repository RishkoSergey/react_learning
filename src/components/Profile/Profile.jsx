import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
    return (
        <div>
            {/* ProfileInfo не оборачиваем контейнером (пока), поскольку туда идут только данные */}
            <ProfileInfo info={props.store.getState().profilePage.info}/>
            <MyPostsContainer store = {props.store} />
        </div>
    )
}

export default Profile;