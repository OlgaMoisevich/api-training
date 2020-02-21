import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReduser} from "./sidebar-reduser";
import {usersReducer} from "./users-reduser";

let reducers = combineReducers({
        profilePage: profilesReducer,
        dialogsPage: dialogsReducer,
        navbarPag: sidebarReduser,
        usersPage: usersReducer,
    }
);
let store = createStore(reducers);
window.store = store;


export default store;

