import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://im5.kommersant.ru/Issues.photo/MONEY/2017/005/KMO_156946_00024_1_t218_214940.jpg'></img>
            </div>
            <div>
                ava+info
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;