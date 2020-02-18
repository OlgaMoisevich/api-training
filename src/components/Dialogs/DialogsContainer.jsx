import React from 'react'
// import s from './Dialogs.module.css'
import {updateNewMessageBodyCreator_dialogs, updateNewTextActionCreator_dialogs} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     //1ый вариант
//     // let state = props.dialogData.store.getState().dialogsPage;
//     // let postChangeDialog = function (newText) {
//     //     props.dialogData.dispatch(updateNewTextActionCreator_dialogs(newText));
//     // };
//     // let updateNewMessageBodyCreator = function () {
//     //     props.dialogData.dispatch(updateNewMessageBodyCreator_dialogs());
//     // };
//
//     return (
//         //2ый вариант
//         <StoreContext.Consumer>
//             {(value) => {
//                 let state = value.getState().dialogsPage;
//                 let postChangeDialog = function (newText) {
//                     value.dispatch(updateNewTextActionCreator_dialogs(newText));
//                 };
//                 let updateNewMessageBodyCreator = function () {
//                     value.dispatch(updateNewMessageBodyCreator_dialogs());
//                 };
//                 return <Dialogs postChangeDialog={postChangeDialog}
//                                 updateNewMessageBodyCreator={updateNewMessageBodyCreator}
//                                 dialogsData={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// };

let mapStateToProps = (store)=>{
    return {
        dialogsData: store.dialogsPage
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        postChangeDialog: (newText)=>{
            dispatch(updateNewTextActionCreator_dialogs(newText))
        },
        updateNewMessageBodyCreator: (newText)=>{
            dispatch( updateNewMessageBodyCreator_dialogs(newText))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer