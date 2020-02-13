const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT_DIALOGS';
const UPDATE_NEW_MESSAGE_BODY_DIALOGS = 'UPDATE_NEW_MESSAGE_BODY_DIALOGS';

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT_DIALOGS:
            state.newPostTextDialog = action.newText;
            return state;
        case UPDATE_NEW_MESSAGE_BODY_DIALOGS:
            let body_text = state.newPostTextDialog;
            state.newPostTextDialog = '';
            state.messageData.push({id: '6', message: body_text});
            return state;
        default:
            return state;
    }
};
