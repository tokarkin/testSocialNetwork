import React from 'react';
import sas from './DialogsItem.module.css';
import  s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import MessageContainer from "../Message/MessageContainer";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsIcon from '@material-ui/icons/Settings';

import {makeStyles} from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Message from "../Message/Message";
const useStyles = makeStyles({
    root: {
        width: '100%',

    },
    navItem:{
        fontSize:'20px',
    },
    name:{
      width: '50px' ,
      height: '50px',
        background:'pink',
        borderRadius:'50%',
        marginRight:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },
});


const DialogItem = (props) => {
    const classes = useStyles();
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>

            <MenuList className={classes.root}>
                <NavLink to={path}  render = {() =><Message message={props.messages} />}>
                    <MenuItem>
                        <div className={classes.name}>
                            {props.name[0]}
                        </div>
                    <Typography variant="inherit" noWrap>{props.name}</Typography>
                     </MenuItem>
                </NavLink>
            </MenuList>
        </div>
    )
}
export default DialogItem;