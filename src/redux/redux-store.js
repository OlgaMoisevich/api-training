import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReduser} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
        profilePage: profilesReducer,
        dialogsPage: dialogsReducer,
        navbarPag: sidebarReduser,
        usersPage: usersReducer,
        authReducer: authReducer,
    }
);
let store = createStore(reducers);
window.store = store;


export default store;

