import React from 'react'
import s from './UsersProfil.module.css'

const UserProfile = (props)=>{
    let item = props.props;

    return (<div>
            <div className={s.wrapper}>
                <div>
                        <span className={s.ava_wrapper}>
                            <img className={s.ava} src={item.photoUrl} alt=""/>
                        </span>
                </div>
                <div className={s.wrapper_block_about}>
                    <h1 className={s.full_name}>{item.fullName}</h1>
                    <div className={s.location}>
                        <p>{item.location['city']}</p>
                        <p>{item.location['country']}</p>
                    </div>
                    <p className={s.status}>{item.status}</p>
                </div>
            </div>
        </div>
    );
};
export default UserProfile;