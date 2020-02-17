import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar props={props.state.navbarPag}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postData={props} />} />
                    <Route path='/dialogs' render={() => <DialogsContainer dialogData={props} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
