import React from 'react'
import UserProfile from "./Post/UsersProfil";
import s from './Users.module.css'

const Users = (props) => {
    console.log('777', props)
    let user = props.users.map(post => <UserProfile key={post.id} props={post}/>);
    return (
        <div className={s.wrapper}>
            {user}
            <button className={s.button}>Show more</button>
        </div>
    )
};

export default Users;




