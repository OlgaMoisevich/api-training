import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile/>} />
                    <Route path='/dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/users' render={() => <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
