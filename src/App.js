import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from "./components/NavBar/Nav-bar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';


function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route  path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} />}/>
                    <Route  path='/profile' render={ () => <Profile state={props.state.profilePage} />}/>
                </div>
            </div>
    );
}

export default App;
