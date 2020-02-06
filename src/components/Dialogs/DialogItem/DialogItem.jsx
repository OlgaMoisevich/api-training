import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return props.listItem.dialogsPage.dialogs.map(item => {
        return (
            <div className={s.dialog + ' ' + s.active} key={item.id}>
                <img className={s.ava} src={item.src} alt=""/>
                <NavLink to={'/dialogs/' + item.id}>{item.name}</NavLink>
            </div>
        )
    });
};

export default DialogItem;