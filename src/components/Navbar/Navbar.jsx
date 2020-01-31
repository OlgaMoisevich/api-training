import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <Navlink to="/news">News</Navlink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <Navlink to="/music">Music</Navlink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/settings">Settings</NavLink>*/}
            {/*</div>*/}
        </nav>
    )
}
export default Navbar