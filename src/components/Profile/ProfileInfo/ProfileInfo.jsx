import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRdOMw0yu2PMs2JOyH1mn9XrxYpIYckzzy6eqfq2POBV4fITyxg&s'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descriptions
            </div>
        </div>
    )
};

export default ProfileInfo