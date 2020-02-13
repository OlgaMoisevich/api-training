const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profilesReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let new_Post = {
                id: '6', message: state.newPostText, likesCount: 0
            };
            state.posts.push(new_Post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

