import Api from "../api/api";
import {unfollowThunkCreator} from "./users-reduser";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_LOGIN_RESPONSE = 'SET_LOGIN_RESPONSE';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLogin: false,
};



export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        case SET_LOGIN_RESPONSE:
            return {
                ... state,
                ... action.login,
            };
        default:
            return state;
    }
};


export const setAuthData = (data) => ({type: SET_AUTH_DATA, data: data});
export const setLoginResponse = (data) => ({type: SET_LOGIN_RESPONSE, login: data});

export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        Api.set_auth_data().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.data))
            }
        })
    }
};

export const setLogin = (login, password, input) => {
    return (dispatch) => {
        Api.set_login_api(login, password, input)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData(response.data.data))
                }
            })
            .catch(response => console.log(response))
    }
};

