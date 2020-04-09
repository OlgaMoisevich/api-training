import React from 'react';
import s from './ProfileInfo.module.css'
import img from '../../../assets/images 2.jpeg'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    let photo = null;
    if(props.profile){
        if(!props.profile.photos){
            photo = img
        }else{
            photo = props.profile.photos.large
        }
    }else{
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuZ0x0YoX82-xbAFgAA5D8psNUg-Y6WdxDOSZbD-twv6QaghAP' className={s.profileImg}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={photo} alt=""/>
                </div>
                <div>
                    <p className={s.lookingForAJob}>{props.profile.lookingForAJob && "Ищу работу"}</p>
                    <p className={s.fullName}>{props.profile.fullName}</p>
                    <p className={s.aboutMe}>{props.profile.aboutMe}</p>
                    <p className={s.contacts}><span>{props.profile.contacts.facebook}</span><span>{props.profile.contacts.github}</span><span>{props.profile.contacts.twitter}</span></p>
                </div>
                <div>
                    {/*<ProfileStatus status={props.profile.fullName} update={props.update} data_status_after_update={props.status}/>*/}
                    <ProfileStatusWithHooks status={props.profile.fullName} update={props.update} data_status_after_update={props.status}/>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo