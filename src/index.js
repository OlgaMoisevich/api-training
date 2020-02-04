import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const listItem = [
    {id: '1', name: 'Василий'},
    {id: '2', name: 'Генадий'},
    {id: '3', name: 'Алексей'},
    {id: '4', name: 'Влада'},
    {id: '5', name: 'Виктория'},
];

const messageData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Yoi'},
    {id: '3', message: 'Byyy'},
    {id: '4', message: 'ВYYY'},
    {id: '5', message: 'Hello'},
];

ReactDOM.render(<App listItem={listItem} messageData={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
