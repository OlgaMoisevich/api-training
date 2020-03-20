import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainerConnect from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainerConnect/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
                    <Route path='/dialogs' render={() => <DialogsContainer/>} />
                    <Route path='/users' render={() => <UsersContainer/>} />
                    <Route path='/' render={() => <LoginPage/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
