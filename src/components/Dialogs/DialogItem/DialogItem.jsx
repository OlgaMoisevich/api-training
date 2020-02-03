import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return props.listItem.map(item => {
        return (
            <div className={s.dialog + ' ' + s.active} key={item.id}>
                <NavLink to={'/dialogs/' + item.id}>{item.name}</NavLink>
            </div>
        )
    });
};

export default Dialog;