// import state, {subscribe, updateNewPostText_1} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {addPost, updateNewPostText} from './redux/state'
import store from './redux/redux-store'

// let rerenderEntireTree = () => {
//     ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
//                          updateNewPostText_1={updateNewPostText_1}
//     />, document.getElementById('root'));
// };
//
// rerenderEntireTree(state);
// subscribe(rerenderEntireTree);


let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}
    />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
        rerenderEntireTree(state)
});

serviceWorker.unregister();
