import {combineReducers, createStore} from "redux";
import {profilesReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReduser} from "./sidebar-reduser";

let reducers = combineReducers({
        profilePage: profilesReducer,
        dialogsPage: dialogsReducer,
        navbarPag: sidebarReduser,
    }
);
let store = createStore(reducers);
console.log('#', store)

export default store;

