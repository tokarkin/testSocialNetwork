import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from "./components/NavBar/Nav-bar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    dispatch= {props.dispatch}
                    state={props.state.messagesPage}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch= {props.dispatch}
                />}/>
            </div>
        </div>
    );
}

export default App;
