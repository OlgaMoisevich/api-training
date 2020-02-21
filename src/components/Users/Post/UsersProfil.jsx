import React from 'react'
import s from './UsersProfil.module.css'

const UserProfile = (props) => {

    let item = props.props;
    let onSetUnFollow = (event) => {
        let id = event.target.dataset.id;
        props.setFollow(id);
    };
    let onSetFollow = (event) => {
        let id = event.target.dataset.id;
        props.setUnFollow(id)
    };


    let button = item.followed ? <button data-id = {item.id} className={s.follow} onClick={onSetUnFollow}>Follow</button> :
        <button data-id = {item.id} className={s.follow} onClick={onSetFollow}>UnFollow</button>;

    return (<div>
            <div className={s.wrapper}>
                <div>
                        <span className={s.ava_wrapper}>
                            <img className={s.ava} src={item.photoUrl} alt=""/>
                            {button}
                        </span>
                </div>
                <div className={s.wrapper_block_about}>
                    <h1 className={s.full_name}>{item.fullName}</h1>
                    <div className={s.location}>
                        <p>{item.location['country']}</p>
                        <p>{item.location['city']}</p>
                    </div>
                    <p className={s.status}>{item.status}</p>
                </div>
            </div>
        </div>
    );
};
export default UserProfile;