import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import NavBarFriends from "./NavFriends/Nav-barFriends";


const NavBar =() =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeColor}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeColor}>Message</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Musik</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
            <NavBarFriends />
        </nav>
    )
}

export default NavBar;