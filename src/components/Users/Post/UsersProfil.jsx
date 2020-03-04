import React from 'react'
import s from './UsersProfil.module.css'
import userPhoto from  '../../../assets/images.jpeg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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


    let button = item.followed ?
        <button data-id={item.id} className={s.follow} onClick={(event) => {
            event.persist();
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                withCredentials: true,
                headers: {'API-KEY':'8635547c-5fc1-4f81-b1fd-19584dd1e0c4'},
            }).then(response => {
                if (response.data.resultCode === 0) {
                   onSetUnFollow(event)
                }
            });
            }}>Follow</button> :
        <button data-id={item.id} className={s.follow} onClick={(event) => {
            event.persist();
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {} , {
                withCredentials: true,
                headers: {'API-KEY':'8635547c-5fc1-4f81-b1fd-19584dd1e0c4'},
            }).then( response => {
                if(response.data.resultCode === 0){
                   onSetFollow(event)
                }
            });
          }
        }>UnFollow</button>;



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