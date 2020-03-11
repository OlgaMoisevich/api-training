import React from 'react'
import s from './UsersProfil.module.css'
import userPhoto from  '../../../assets/images.jpeg'
import {NavLink} from "react-router-dom";

const UserProfile = (props) => {
    let item = props.props;

    let button = item.followed ?
        <button data-id={item.id} className={s.follow} disabled={props.defaultButton.some(id => id === item.id)}
                onClick={(event) => {
                    props.followThunkCreator(event, item.id);
                }}>Follow</button> :
        <button data-id={item.id} className={s.follow} disabled={props.defaultButton.some(id => id === item.id)}
                onClick={(event) => {
                    props.unfollowThunkCreator(event, item.id)
                }}>UnFollow</button>;


    return (<div>
            <div className={s.wrapper}>
                <div>
                        <span className={s.ava_wrapper}>
                            <NavLink to={"/profile" }>
                                 <img className={s.ava} src={ item.photos.small===null? userPhoto : item.photos.small} alt=""/>
                            </NavLink>
                            {button}
                        </span>
                </div>
                <div className={s.wrapper_block_about}>
                    <h1 className={s.full_name}>{item.name}</h1>
                    <div className={s.location}>
                        <p>{"item.location['country']"}</p>
                        <p>{"item.location['city']"}</p>
                    </div>
                    <p className={s.status}>{item.status}</p>
                </div>
            </div>
        </div>
    );
};
export default UserProfile;