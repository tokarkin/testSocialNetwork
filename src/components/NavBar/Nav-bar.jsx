import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import NavBarFriends from "./NavFriends/Nav-barFriends";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    navItem:{

        fontSize:'20px',
    }
});





const NavBar =() =>{
    const classes = useStyles();
    return(
                <MenuList className={classes.root}>
                    <MenuItem><NavLink to="/profile" activeClassName={s.activeColor} className={classes.navItem}>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>Profile</Typography></NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/dialogs" activeClassName={s.activeColor} className={classes.navItem} >
                        <ListItemIcon>
                            <DraftsIcon fontSize="small"  />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>Message</Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/users" activeClassName={s.activeColor} className={classes.navItem}>
                        <ListItemIcon>
                            <SearchIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Find
                        </Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/news" activeClassName={s.activeColor} className={classes.navItem}>
                        <ListItemIcon>
                            <ListAltIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                           News
                        </Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/music" activeClassName={s.activeColor} className={classes.navItem}>
                        <ListItemIcon>
                            <MusicNoteIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Music
                        </Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            <NavLink to="/settings" activeClassName={s.activeColor} className={classes.navItem}>Settings </NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <NavBarFriends />
                    </MenuItem>
                </MenuList>

    )
}

export default NavBar;