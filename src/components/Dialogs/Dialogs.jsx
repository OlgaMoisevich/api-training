import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog listItem={props.props['listItem']}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.props['messageData']}/>
            </div>
        </div>
    )
};

export default Dialogs