import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const listItem = [
    {id: '1', name: 'Василий'},
    {id: '2', name: 'Генадий'},
    {id: '3', name: 'Алексей'},
    {id: '4', name: 'Влада'},
    {id: '5', name: 'Виктория'},
];

const messageData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Yoi'},
    {id: '3', message: 'Byyy'},
    {id: '4', message: 'ВYYY'},
    {id: '5', message: 'Hello'},
];


const Dialogs = (props) => {

    const dialogItem = listItem.map(item => {
        return <div className={s.dialog + ' ' + s.active} key={item.id}>
            <NavLink to={'/dialogs/'+ item.id}>{item.name}</NavLink>
        </div>
    });

    const messageItem = messageData.map(item => {
        return <div className={s.dialog} key={item.id}>
            {item.message}
        </div>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
        </div>
    )
};

export default Dialogs