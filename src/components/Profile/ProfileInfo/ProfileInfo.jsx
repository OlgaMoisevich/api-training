import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuZ0x0YoX82-xbAFgAA5D8psNUg-Y6WdxDOSZbD-twv6QaghAP' className={s.profileImg}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descriptions
            </div>
        </div>
    )
};

export default ProfileInfo