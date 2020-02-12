// import state, {subscribe, updateNewPostText_1} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {addPost, updateNewPostText} from './redux/state'
import store from './redux/state'



// let rerenderEntireTree = () => {
//     ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
//                          updateNewPostText_1={updateNewPostText_1}
//     />, document.getElementById('root'));
// };
//
// rerenderEntireTree(state);
// subscribe(rerenderEntireTree);


let rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                         updateNewPostText_1={store.updateNewPostText_1.bind(store)}
    />, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
