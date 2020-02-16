const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT_DIALOGS';
const UPDATE_NEW_MESSAGE_BODY_DIALOGS = 'UPDATE_NEW_MESSAGE_BODY_DIALOGS';

let initialState = {
        toolbarFriehds: [
            {id: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUTWh8wV_7aMa1slAC4kEnhXTqy89iZOrn-SS8eZat01OHzSa7', name: 'Anna'},
            {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfQ9gknu_TQkjGrse9yXPYteq2dvZfjbUGSzSBAReiHBzob5z", name: 'Masha'},
            {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7kcIgeRHXJRAAQWcVWfemMQjHCsNtOsu6o_1il6Oka45DxBYp", name: 'Lena'},
        ]
};

export const sidebarReduser = (state = initialState, action) => {
    // switch (action.type) {
    //     //     case UPDATE_NEW_POST_TEXT_DIALOGS:
    //     //         state.newPostTextDialog = action.newText;
    //     //         return state;
    //     //     case UPDATE_NEW_MESSAGE_BODY_DIALOGS:
    //     //         let body_text = state.newPostTextDialog;
    //     //         state.newPostTextDialog = '';
    //     //         state.messageData.push({id: '6', message: body_text});
    //     //         return state;
    //     //     default:
    //     //         return state;
    //     // }
    return state
};