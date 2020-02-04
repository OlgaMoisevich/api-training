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
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                    <Route path='/dialogs'>
                        <Dialogs props={props}/>
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
