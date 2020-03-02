import s from "./Users.module.css";
import React from "react";
import UserProfile from "./Post/UsersProfil";

const UsersUI = (props)=>{

   let user = props.users.map(post => <UserProfile key={post.id} props={post} setFollow={props.setFollow}
                                                         setUnFollow={props.setUnFollow}/>);

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
                                 onClick={(e) => {
                                     props.onPageChanged(page_item)
                                 }}>{page_item}</span>
                })}
            </div>
            {user}
            <button className={s.button}>Show more</button>
        </div>
    )
};

export default UsersUI
