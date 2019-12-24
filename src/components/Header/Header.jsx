import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade,  makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    button: {
        margin: theme.spacing(1),
        marginLeft:'20px'
    },
    block:{
        display: 'flex',
        flexFlow: 'row',
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
}));
const Header =(props) =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TokarkIn
                    </Typography>
                    <div className={classes.block}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div>
                            {
                                props.isAuth ? <div>
                                    {props.login}
                                    <div>
                                        <Button onClick={props.logout} variant="outlined" color="secondary" className={classes.button}>Log out</Button>
                                    </div>
                                </div> :  <NavLink to ={'/login'}>
                                    <Button variant="outlined" color="secondary" className={classes.button}>
                                        Log in
                                    </Button>
                                </NavLink>
                            }
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;