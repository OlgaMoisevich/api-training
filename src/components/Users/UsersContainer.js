import React from 'react'
// import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import * as axios from "axios";
import UsersUI from "./UsersUI";


class UsersContainerComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            if (!this.props.totalUsersCount) {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            if (!this.props.totalUsersCount) {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    };

    render() {
        return (
            <UsersUI currentPage = {this.props.currentPage}
                     totalUsersCount = {this.props.totalUsersCount}
                     pageSize = {this.props.pageSize}
                     users = {this.props.users}
                     setFollow = {this.props.setFollow}
                     setUnFollow = {this.props.setUnFollow}
                     onPageChanged = {this.onPageChanged}
            />
        )
    }
}



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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerComponent);

export default UsersContainer
