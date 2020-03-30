import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilesReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReduser} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
        profilePage: profilesReducer,
        dialogsPage: dialogsReducer,
        navbarPag: sidebarReduser,
        usersPage: usersReducer,
        authReducer: authReducer,
        form: formReducer,
        app:  appReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;


export default store;

