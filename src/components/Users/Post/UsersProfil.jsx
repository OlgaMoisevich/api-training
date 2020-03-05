import React from 'react'
import s from './UsersProfil.module.css'
import userPhoto from  '../../../assets/images.jpeg'
import {NavLink} from "react-router-dom";
import Api from "../../../api/api";
import {setDefaultButton} from "../../../redux/users-reduser";

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
        <button data-id={item.id} className={s.follow}  disabled={props.defaultButton} onClick={(event) => {
            console.log('props999', props);
            props.setDefaultButton(true);
            event.persist();
            Api.set_unfollow(item.id).then(response => {
                console.log('response', response);
                if (response.data.resultCode === 0) {
                   onSetUnFollow(event);
                }
            }).catch(response => response);
            setTimeout(()=>{
                console.log('1', props);
                 props.setDefaultButton(false);
                console.log('2', props);
            }, 15000)
            }}>Follow</button> :
        <button data-id={item.id} className={s.follow} onClick={(event) => {
            console.log('props2222', props)
            props.setDefaultButton(true);
            event.persist();
            Api.set_follow(item.id).then( response => {
                console.log('response', response);
                if(response.data.resultCode === 0){
                   onSetFollow(event);
                    props.setDefaultButton(false);
                }
            });
            setTimeout(()=>{
                console.log('1', props);
                props.setDefaultButton(false);
                console.log('2', props)}, 15000)
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