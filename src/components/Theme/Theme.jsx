import React from "react";
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../Header/HeaderContainer";
import NavBar from "../NavBar/Nav-bar";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../users/usersContainer";
import NewsContainer from "../News/newsContainer";
import LoginContainer from "../Login/LoginContainer";
import {Route} from "react-router-dom";
import SetCon from "../Settings/settingsClass";





const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth:'1200px',
        margin:'0 auto',

    }
}));


const Theme = (props)=>{
    console.log(props);
    const theme = createMuiTheme(
       props.settings);
    const classes = useStyles();
    return(
        <div>
            <ThemeProvider theme = {theme}>
                <Grid className={classes.root} container spacing={3}>
                    <Grid item xs={12} xl={12} >
                        <HeaderContainer/>
                    </Grid>
                    <Grid item xs={0} sm={3} xl={3}>
                        <NavBar/>
                    </Grid>
                    <Grid item xs={9} sm={9} xl={9} >
                        <Route path='/dialogs/:dialogId?' render={() => <DialogsContainer
                        />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer
                        />}/>
                        <Route path='/users' render = {() =><UsersContainer />} />
                        <Route path='/news' render = {() =><NewsContainer />} />
                        <Route path ='/login' render = {() => <LoginContainer />}/>
                        <Route path ='/settings' render = {() => <SetCon />}/>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>

    )
}

export default Theme;