import React from 'react'
import UserProfile from "./Post/UsersProfil";

const Users = (props) => {
    console.log('777', props)
    let user = props.users.map(post => <UserProfile key={post.id} props={post}/>);
    return (
        <div>
            {user}
            <button></button>
        </div>
    )
};

export default Users;




