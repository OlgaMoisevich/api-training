import Api from "../api/api";
import {unfollowThunkCreator} from "./users-reduser";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
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


export const setAuthData = (id, login, email, isAuth) => ({type: SET_AUTH_DATA, payload: {id, login, email, isAuth}});
export const setLoginResponse = (data) => ({type: SET_LOGIN_RESPONSE, login: data});

export const setAuthDataThunkCreator = () => {
    return (dispatch) => {
        Api.set_auth_data().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthData(id, login, email, true))
            }
        })
    }
};

export const setLogin = (login, password, input) => {
    return (dispatch) => {
        Api.set_login_api(login, password, input)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthDataThunkCreator(response.data.data))
                } else {
                    let action = stopSubmit("login", {_error: 'Email is wrong'});
                    dispatch(action);
                }
            })
            .catch(response => console.log(response))
    }
};


export const outLogin = (login, password, input) => {
    return (dispatch) => {
        Api.out_login_api()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthData(null, null, null, false))
                }
            })
            .catch(response => console.log(response))
    }
};
