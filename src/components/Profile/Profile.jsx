import React from 'react';
import s from   './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer postData={props.postData.profilePage.posts}*/}
            {/*         newPostText={props.postData.profilePage.newPostText}*/}
            {/*         postFunc={props.props}/>*/}
            <MyPostsContainer store={props}/>
        </div>
    )
};

export default Profile