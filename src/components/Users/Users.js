import React from 'react'
import UserProfile from "./Post/UsersProfil";
import s from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }

    user = () => {
        return this.props.users.map(post => <UserProfile key={post.id} props={post} setFollow={this.props.setFollow}
                                                         setUnFollow={this.props.setUnFollow}/>);
    };

    render() {
        return (
            <div className={s.wrapper}>
                {this.user()}
                <button className={s.button}>Show more</button>
            </div>
        )
    }

};

export default Users;




