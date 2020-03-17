import Api from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likesCount: 12},
        {id: '2', message: "It's my first post", likesCount: 11},
    ],
    newPostText: '',
    profile: null,
    status: '',

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
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, 'newText': text});
export const setProfile = (profile) => ({type: SET_PROFILE, 'profile': profile});
export const setStatus = (status) => ({type: SET_STATUS, 'status': status});




export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        Api.set_profile(userId).then(response => {
            dispatch(setProfile(response.data))
        });
    }
};

export const getUserStatus = (status) => {
    return (dispatch) => {
        Api.get_user_status(status).then(response => {
            dispatch(setStatus(response.data))
        });
    }
};

export const updateStatus = (status) => {
    // debugger
    return (dispatch) => {
        Api.update_user_status(status)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }).catch(response => dispatch(setStatus(status)));
    }
};

