import React from 'react'
import {connect} from "react-redux";
import {
    setCurrentPage, setDefaultButton,
    setFollow, setIsFetching,
    setTotalUsersCount,
    setUnFollow, setUsers,
} from "../../redux/users-reduser";
import UsersUI from "./UsersUI";
import Preloader from "../common/Preloader";
import Api from "../../api/api";

// Все пользователи
class UsersContainerComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        Api.get_all_users(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            if (!this.props.totalUsersCount) {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        Api.get_on_page_changed(pageNumber, this.props.pageSize ).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            if (!this.props.totalUsersCount) {
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    };

    render() {
        return <>
                 {this.props.isFetching ? <Preloader/> : null}
                <UsersUI currentPage = {this.props.currentPage}
                         totalUsersCount = {this.props.totalUsersCount}
                         pageSize = {this.props.pageSize}
                         users = {this.props.users}
                         setFollow = {this.props.setFollow}
                         setUnFollow = {this.props.setUnFollow}
                         onPageChanged = {this.onPageChanged}
                         defaultButton = {this.props.defaultButton}
                         setDefaultButton = {this.props.setDefaultButton}
                />
            </>
    }
}

let mapStateToProps = (store)=>{
    return {
        users: store.usersPage.users,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage,
        isFetching: store.usersPage.isFetching,
        defaultButton: store.usersPage.defaultButton
    }
};
    //1сп
// let mapDispatchToProps =(dispatch)=>{
//     return {
//         setFollow: (id)=>{
//             dispatch(followAC(id))
//         },
//         setUnFollow: (id)=>{
//             dispatch(unfollowAC(id))
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount:(totalCount)=>{
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setCurrentPage:(page)=>{
//             dispatch(setCurrentPageAC(page))
//         },
//         setIsFetching: (isFetch)=>{
//             dispatch(setIsFetchingAC(isFetch))
//         }
//     }
// };
    //2сп
// {
//     setFollow: followAC,
//     setUnFollow: unfollowAC,
//     setUsers:setUsersAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     setCurrentPage:setCurrentPageAC,
//     setIsFetching: setIsFetchingAC
// }

const UsersContainer = connect(mapStateToProps, {
    //3сп краткая запись
    setFollow,
    setUnFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    setDefaultButton,
})(UsersContainerComponent);

export default UsersContainer
