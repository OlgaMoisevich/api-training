import React from 'react'
import UserProfile from "./Post/UsersProfil";
import s from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    user() {
        return this.props.users.map(post => <UserProfile key={post.id} props={post} setFollow={this.props.setFollow}
                                                         setUnFollow={this.props.setUnFollow}/>);
    };

    // componentDidMount() {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         this.props.setUsers(response.data.items)
    //     });
    // }

    setCurrentPage(page_item) {
        axios.get(  `https://social-network.samuraijs.com/api/1.0/users?${page_item}`).then(response => {
            console.log('RESPONSE',response.data.totalCount);

            this.props.setUsers(response.data.items);
            if(!this.props.tototalUsersCount){
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    }

    render() {
        // console.log('this', this);
        let paginCount = this.props.totalUsersCount / this.props.pageSize;
        let page = [];
        for (let i = 0; i <= paginCount; i++) {
            page.push(i);
        }
        let span_el = page.map(page_item => {
            return <span key={page_item} className={s.selectedPage} onClick={this.setCurrentPage(page_item)}>{page_item}</span>
        });

        return (
            <div className={s.wrapper}>

                <div className={s.page}>
                    {span_el}
                </div>
                {this.user()}
                <button className={s.button}>Show more</button>
            </div>
        )
    }

};

export default Users;





