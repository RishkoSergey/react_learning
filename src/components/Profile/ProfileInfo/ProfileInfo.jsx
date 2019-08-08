import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = props => {
    return (
            <div className={style.descriptionBlock}>
                <div className={style.photo}>
                    <img src={props.info.photo}></img>
                </div>
                <div className={style.name}>{props.info.name}</div>
                
                <div className={style.label}>
                    <div>Birthday:</div>
                    <div>City:</div>
                </div>
                <div className={style.info}>
                    <div>{props.info.birthday}</div>
                    <div>{props.info.city}</div>
                </div>
            </div>
    )
}

export default ProfileInfo;