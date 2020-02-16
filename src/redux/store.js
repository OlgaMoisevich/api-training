import {profilesReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_TEXT_DIALOGS = 'UPDATE-NEW-POST-TEXT_DIALOGS';
const UPDATE_NEW_MESSAGE_BODY_DIALOGS = 'UPDATE_NEW_MESSAGE_BODY_DIALOGS';

// let store = {
//         __subscriber() {
//             console.log('oooo');
//         },
//         _state:{
//             profilePage: {
//                 posts: [
//                     {id: '1', message: 'Hi, how are you?', likesCount: 12},
//                     {id: '2', message: "It's my first post", likesCount: 11},
//                 ],
//                 newPostText: '',
//             },
//             dialogsPage: {
//                 messageData: [
//                     {id: '1', message: 'Hi', src: ''},
//                     {id: '2', message: 'Yoi'},
//                     {id: '3', message: 'Byyy'},
//                     {id: '4', message: 'ВYYY'},
//                     {id: '5', message: 'Hello'},
//                 ],
//                 dialogs: [
//                     {id: '1', name: 'Василий', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMHyaJaJdu1Q6PesEEPHGdKAPaGoaCZqe_pkn4XJZLWudStnN'},
//                     {id: '2', name: 'Генадий', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxJbBQ_JvY_hXs4if2HmoIcRAdofDdiEOjY82yfoNlo4HkBnO1'},
//                     {id: '3', name: 'Алексей', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAvtQ5QGFbFY861oIhYmOCL-bPaF73hepDNPQa8FfoHoUFX7cz'},
//                     {id: '4', name: 'Влада', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Aigo8TJLP-TdZtauPgAKce6QJuaxG8EUDyarQrs-xxNer9h2'},
//                     {id: '5', name: 'Виктория', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGjvKSeYKpoeC4v9d9_52ZhYlV__HtXaJQg-eU2eu9gfx_NfBD'},
//                 ],
//                 newPostTextDialog: '',
//                 messageDialog: [],
//             },
//             navbarPage: {
//                 toolbarFriehds: [
//                     {id: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUTWh8wV_7aMa1slAC4kEnhXTqy89iZOrn-SS8eZat01OHzSa7', name: 'Anna'},
//                     {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfQ9gknu_TQkjGrse9yXPYteq2dvZfjbUGSzSBAReiHBzob5z", name: 'Masha'},
//                     {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7kcIgeRHXJRAAQWcVWfemMQjHCsNtOsu6o_1il6Oka45DxBYp", name: 'Lena'},
//                 ]
//             },
//         },
//         getState() {
//             return this._state;
//         },
//         subscribe(observer) {
//             this.__subscriber = observer;
//         },
//         dispatch(action){
//             this._state.profilePage = profilesReducer(this._state.profilePage, action);
//             this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//             this.__subscriber();
//         }
// };

const addPostActionCreator = ()=>({type: ADD_POST});
const updateNewTextActionCreator =(text)=>({type: UPDATE_NEW_POST_TEXT, 'newText': text});
const updateNewTextActionCreator_dialogs = (text)=>({type: UPDATE_NEW_POST_TEXT_DIALOGS, 'newText': text});
const updateNewMessageBodyCreator_dialogs = ()=>({type: UPDATE_NEW_MESSAGE_BODY_DIALOGS});


// export default store;

