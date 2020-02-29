import React from 'react'
import UserProfile from "./Post/UsersProfil";
import s from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

    user() {
        return this.props.users.map(post => <UserProfile key={post.id} props={post} setFollow={this.props.setFollow}
                                                         setUnFollow={this.props.setUnFollow}/>);
    };

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
        console.log('this', this);
        let paginCount = this.props.totalUsersCount / this.props.pageSize;
        let page = [];
        for (let i = 1; i <= paginCount; i++) {
            page.push(i);
        }
        console.log('this2', this);

        return (
            <div className={s.wrapper}>
                <div className={s.page}>
                    {page.map(page_item => {
                        return <span key={page_item}
                                     className={this.props.currentPage === page_item && s.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(page_item)
                                     }}>{page_item}</span>
                    })}
                </div>
                {this.user()}
                <button className={s.button}>Show more</button>
            </div>
        )
    }

};

export default Users;





