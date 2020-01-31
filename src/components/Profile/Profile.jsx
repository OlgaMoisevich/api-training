import React from 'react';
import s from   './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = ()=>{
    return(
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRdOMw0yu2PMs2JOyH1mn9XrxYpIYckzzy6eqfq2POBV4fITyxg&s' />
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile