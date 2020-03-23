import React from 'react'
import {updateNewMessageBodyCreator_dialogs} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


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

let mapStateToProps = (store) => {
    return {
        dialogsData: store.dialogsPage,
        authData: store.authReducer.isAuth,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (newText) => {
            dispatch(updateNewMessageBodyCreator_dialogs(newText))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)
(Dialogs);

// способ до использования compose (альтернативный способ)

// const WithUrlDataContainerComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
// export default DialogsContainer