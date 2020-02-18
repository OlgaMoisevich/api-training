import React from 'react'
import s from './Dialogs.module.css'
import {updateNewMessageBodyCreator_dialogs, updateNewTextActionCreator_dialogs} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    // let state = props.dialogData.store.getState().dialogsPage;
    // let postChangeDialog = function (newText) {
    //     props.dialogData.dispatch(updateNewTextActionCreator_dialogs(newText));
    // };
    // let updateNewMessageBodyCreator = function () {
    //     props.dialogData.dispatch(updateNewMessageBodyCreator_dialogs());
    // };

    return (
        <StoreContext.Consumer>
            {(value) => {
                let state = value.getState().dialogsPage;
                let postChangeDialog = function (newText) {
                    value.dispatch(updateNewTextActionCreator_dialogs(newText));
                };
                let updateNewMessageBodyCreator = function () {
                    value.dispatch(updateNewMessageBodyCreator_dialogs());
                };
                return <Dialogs postChangeDialog={postChangeDialog}
                                updateNewMessageBodyCreator={updateNewMessageBodyCreator}
                                dialogsData={state}/>
                }
            }
        </StoreContext.Consumer>

    )
};

export default DialogsContainer