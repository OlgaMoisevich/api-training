import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./ToolbarFriends/Friends";
// import StoreContext from "../../StoreContext";
import FriendsContainer from "../../FriendsContainer";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs2" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs3" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs4" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/*<StoreContext.Consumer>*/}
            {/*    {(value) => {*/}
            {/*        return <Friends props={value.getState().navbarPag.toolbarFriehds}/>}*/}
            {/*    }*/}
            {/*</StoreContext.Consumer>*/}
            <FriendsContainer/>
        </nav>
    )
}
export default Navbar