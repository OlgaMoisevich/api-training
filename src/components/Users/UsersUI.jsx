import s from "./Users.module.css";
import React from "react";
import UserProfile from "./Post/UsersProfil";
import {setDefaultButton} from "../../redux/users-reduser";

const UsersUI = (props)=>{
   let users = props.users.map(post => <UserProfile key={post.id} props={post}
                                                    setFollow={props.setFollow}
                                                    defaultButton={props.defaultButton}
                                                    setUnFollow={props.setUnFollow}
                                                    setDefaultButton={props.setDefaultButton}
                                                    />);

    let paginCount = props.totalUsersCount / props.pageSize;
    let page = [];
    for (let i = 1; i <= paginCount; i++) {
        page.push(i);
    }

    return(
        <div className={s.wrapper}>
            <div className={s.page}>
                {page.map(page_item => {
                    return <span key={page_item}
                                 className={props.currentPage === page_item && s.selectedPage}
                                 onClick={(e) => { props.onPageChanged(page_item)}}
                    >{page_item}</span>
                })}
            </div>
            {users}
            <button className={s.button}>Show more</button>
        </div>
    )
};

export default UsersUI
