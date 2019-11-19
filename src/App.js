import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from "./components/NavBar/Nav-bar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import NewsContainer from "./components/News/newsContainer";


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth:'1200px',
        margin:'0 auto',

    }
}));


function App(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} xl={12}>
                    <Header/>
                </Grid>
                <Grid item xs={0} sm={3} xl={3}>
                     <NavBar/>
                </Grid>
                <Grid item xs={9} sm={9} xl={9} >
                  <Route path='/dialogs' render={() => <DialogsContainer
                    />}/>
                    <Route path='/profile' render={() => <Profile
                    />}/>
                   <Route path='/users' render = {() =><UsersContainer />} />
                    <Route path='/news' render = {() =><NewsContainer />} />
                </Grid>
            </Grid>
        </div>

    );
}

export default App;


