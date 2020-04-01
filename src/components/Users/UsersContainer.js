import React from 'react'
import {connect} from "react-redux";
import {
    setDefaultButton, setFollow, setUnFollow,
    getUsersThunkCreator, getOnPageChangeThunkCreator, followThunkCreator, unfollowThunkCreator,
} from "../../redux/users-reduser";
import UsersUI from "./UsersUI";
import Preloader from "../common/Preloader";
import {
    currentPage,
    defaultButton,
    getUsersPage,
    isFetching,
    pageSize,
    totalUsersCount
} from "../../redux/utilsForState";

// Все пользователи
class UsersContainerComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, this.props.totalUsersCount);
    }

    onPageChanged = (pageNumber) => {
        this.props.getOnPageChangeThunkCreator(pageNumber, this.props.pageSize, this.props.totalUsersCount);
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
                         followThunkCreator = {this.props.followThunkCreator}
                         unfollowThunkCreator = {this.props.unfollowThunkCreator}
                />
            </>
    }
}

let mapStateToProps = (store)=>{
    return {
        users: getUsersPage(store),
        totalUsersCount: totalUsersCount(store),
        pageSize: pageSize(store),
        currentPage: currentPage(store),
        isFetching: isFetching(store),
        defaultButton: defaultButton(store),
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
    setDefaultButton,
    getUsersThunkCreator,
    getOnPageChangeThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
})(UsersContainerComponent);

export default UsersContainer
