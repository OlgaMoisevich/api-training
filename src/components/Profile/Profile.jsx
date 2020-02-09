import React from 'react';
import s from   './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData.profilePage.posts}
                     newPostText={props.postData.profilePage.newPostText}
                     postFunc={props.props}/>
        </div>
    )
};

export default Profile