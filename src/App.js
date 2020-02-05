import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar props={props.state.navbarPage}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postData={props.state}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogData={props.state}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
