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

    setCurrentPage() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=1&count=5").then(response => {
            console.log('RESPONSE',response.data.totalCount)

            this.props.setUsers(response.data.items)
            if(!this.props.tototalUsersCount){
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });
    }

    render() {
        console.log('this', this);
        let pagin =
        return (
            <div className={s.wrapper}>

                <div className={s.page}>
                    <span className={s.selectedPage} onClick={this.setCurrentPage()}>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                {this.user()}
                <button className={s.button}>Show more</button>
            </div>
        )
    }

};

export default Users;





