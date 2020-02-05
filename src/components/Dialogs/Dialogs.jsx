import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog listItem={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogData}/>
            </div>
        </div>
    )
};

export default Dialogs