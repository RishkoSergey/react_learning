import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    console.log(style.content);
    return (
        <div>
            <div>
                <img className={style.image} src='https://im5.kommersant.ru/Issues.photo/MONEY/2017/005/KMO_156946_00024_1_t218_214940.jpg'></img>
            </div>
            <div className={style.descriptionBlock}>
                ava+info
            </div>
        </div>
    )
}

export default ProfileInfo;