import React from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageBodyCreator_dialogs, updateNewTextActionCreator_dialogs} from "../../redux/state";


const Dialogs = (props) => {
    console.log('PR', props)

    let onPostChangeDialog = function (e) {
        let newText = e.target.value;
        props.props.dispatch(updateNewTextActionCreator_dialogs(newText));
    };
    let updateNewMessageBodyCreator = function () {
       props.props.dispatch(updateNewMessageBodyCreator_dialogs());
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem listItem={props.dialogData}/>
            </div>
            <div className={s.messages}>
                <Message messageData={props.dialogData}/>
                <p>{props.dialogData.dialogsPage.messageDialog}</p>
                <div>
                    <textarea name="" id="" cols="30" rows="5" value={props.dialogData.dialogsPage.newPostTextDialog}
                              placeholder='Enter your message'
                              onChange={onPostChangeDialog}/><br/>
                    <button onClick={updateNewMessageBodyCreator}>Add</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs