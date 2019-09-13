import React from 'react';
import style from './ProfileInfo.module.css';
import preloader from '../../../assets/images/preloader.svg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src={preloader} />
    }

    return (
        <div className={style.descriptionBlock}>
            <div className={style.photo}>
                <img src={props.profile.photos.large}></img>
            </div>
            <div className={style.name}>{props.profile.fullName}</div>

            <div className={style.label}>
                <div>About Me:</div>
                <div>About My Job Finding:</div>
            </div>
            <div className={style.info}>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )

}

export default ProfileInfo;