import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
// import UsersProfil from "./Post/UsersProfil";
// import UsersC from "./Users";

let mapStateToProps = (store)=>{
    return {
        users: store.usersPage.users,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage,
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
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer