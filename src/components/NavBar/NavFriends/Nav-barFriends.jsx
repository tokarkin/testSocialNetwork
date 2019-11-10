import React from 'react';
import s from './NavBarFriends.module.css';



const NavBarFriends =() =>{
    return(
        <div className={s.item} className={s.friends}>
            <h2 className={s.friendsNav}>Friends</h2>
           <div className={s.wrapper}>
               <a className={s.friendsblock}>
                   <div className={s.logo}>
                       <img className={s.friendslogo} src="" alt=""/>
                   </div>
                   <a className={s.friendsName} href="">Vlad</a>
               </a>
               <a>
                   <div className={s.logo}>
                       <img className={s.friendslogo} src="" alt=""/>
                   </div>
                   <a className={s.friendsName} href="">Katya</a>
               </a>
               <a>
                   <div className={s.logo}>
                       <img className={s.friendslogo} src="" alt=""/>
                   </div>
                   <a className={s.friendsName} href="">Artem</a>
               </a>
           </div>
        </div>
    )
}

export default NavBarFriends;