import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let onPostChangeDialog = function (e) {
        let newText = e.target.value;
        props.postChangeDialog(newText);
    };
    let onUpdateNewMessageBodyCreator = function () {
        props.updateNewMessageBodyCreator();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogsData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogsData}/>
                <p>{props.dialogsData.messageDialog}</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" value={props.dialogsData.newPostTextDialog}
                              placeholder='Enter your message'
                              onChange={onPostChangeDialog}/><br/>
                    <button onClick={onUpdateNewMessageBodyCreator}>Add</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs