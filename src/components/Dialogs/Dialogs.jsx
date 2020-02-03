import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";


const Dialogs = (props) => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog listItem={listItem}/>
            </div>
            <div className={s.messages}>
                <Message messageData={messageData}/>
            </div>
        </div>
    )
};

export default Dialogs