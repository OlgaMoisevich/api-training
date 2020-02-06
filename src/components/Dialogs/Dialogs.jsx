import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogData}/>
            </div>
        </div>
    )
};

export default Dialogs