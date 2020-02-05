import React from 'react';
import s from './Friends.module.css'

const Friends = () => {
    return (
        <div className={s.friends}>
            <div>
                <h1>Friends</h1>
            </div>
            <div className={s.ava}>
                <div className={s.friendsItem}></div>
                <div className={s.friendsItem}></div>
                <div className={s.friendsItem}></div>
            </div>
        </div>
    )
};

export default Friends