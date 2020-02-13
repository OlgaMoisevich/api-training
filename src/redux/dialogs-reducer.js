const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT_DIALOGS';
const UPDATE_NEW_MESSAGE_BODY_DIALOGS = 'UPDATE_NEW_MESSAGE_BODY_DIALOGS';

export const dialogsReducer =()=>{
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT_DIALOGS:
            this._state.dialogsPage.newPostTextDialog = action.newText;
            this.__subscriber();
            return;
        case UPDATE_NEW_MESSAGE_BODY_DIALOGS:
            let body_text = this._state.dialogsPage.newPostTextDialog;
            // this._state.dialogsPage.messageDialog.push(this._state.dialogsPage.newPostTextDialog);
            this._state.dialogsPage.newPostTextDialog = '';
            this._state.dialogsPage.messageData.push({id: '6', message: body_text });
            this.__subscriber();
            return;
        default:
            alert('hi')
    }
};
