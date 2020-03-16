import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props)=>{
    console.log('! props', props);
    return(
        <div>
            <ProfileInfo profile={props.profile} update={props.updateStatus} status = {props.status}/>
            <MyPostsContainer store={props}/>
        </div>
    )
};

export default Profile