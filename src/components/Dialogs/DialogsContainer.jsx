import React from 'react'
import s from './Dialogs.module.css'
import {updateNewMessageBodyCreator_dialogs, updateNewTextActionCreator_dialogs} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    // console.log('props+++', props.dialogData);
    let state = props.dialogData.store.getState().dialogsPage;
    // console.log('props+++', state);
    let postChangeDialog = function (newText) {
        props.dialogData.dispatch(updateNewTextActionCreator_dialogs(newText));
    };
    let updateNewMessageBodyCreator = function () {
       props.dialogData.dispatch(updateNewMessageBodyCreator_dialogs());
    };

    return (
        <Dialogs postChangeDialog={postChangeDialog} updateNewMessageBodyCreator={updateNewMessageBodyCreator} dialogsData={state}/>
    )
};

export default DialogsContainer