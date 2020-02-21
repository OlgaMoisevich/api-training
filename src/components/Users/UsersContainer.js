import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import UsersProfil from "./Post/UsersProfil";

let mapStateToProps = (store)=>{
    return {
        users: store.usersPage.users,
    }
};

let mapDispatchToProps =(dispatch)=>{
    return {
        setFollow: (id)=>{
            dispatch(followAC(id))
        },
        setUnFollow: (id)=>{
            dispatch(unfollowAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer