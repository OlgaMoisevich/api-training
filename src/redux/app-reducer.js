import Api from "../api/api";
import {unfollowThunkCreator} from "./users-reduser";
import {stopSubmit} from "redux-form";
import {setAuthDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};


export const initialized_success = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => {
    return (dispatch) => {
        let result_initialize = dispatch(setAuthDataThunkCreator());
        console.log(('result_promise', result_initialize));
        Promise.all([result_initialize]).then(response => {
            dispatch(initialized_success())
        });
    }
};


