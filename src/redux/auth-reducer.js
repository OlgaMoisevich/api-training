import Api from "../api/api";
import {unfollowThunkCreator} from "./users-reduser";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};



export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};


export const setAuthData = (data) => ({type: SET_AUTH_DATA, data: data});

export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        Api.set_auth_data().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.data))
            }
        })
    }
};