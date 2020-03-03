const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likesCount: 12},
        {id: '2', message: "It's my first post", likesCount: 11},
    ],
    newPostText: '',
    profile: null,
};

export const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: '6', message: state.newPostText, likesCount: 0}],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, 'newText': text});
export const setProfile =(profile)=>({type: SET_PROFILE, 'profile': profile});

