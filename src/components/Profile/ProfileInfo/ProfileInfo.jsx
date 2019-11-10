import React from 'react';
import s from './ProfileInfo.module.css';
import logo from '../../../images/img.png';

const ProfileInfo =()=>{
    return(
        <div className={s.content} >
            <div className={s.wrapper}>

                <div className={s.content__wrapper}>
                    <div className={s.paingt}>
                        <img className={s.paint} src={logo} alt=""/>
                    </div>
                    <div className={s.container}>
                        <h2 className={s.containerName}> Dima Ksenchyn</h2>
                        <p className={s.containertext}>City: Vinnitsya</p>
                        <p className={s.containertext}> Gender: man</p>
                        <p className={s.containertext}>Date of Birthday: 24.02.1997</p>
                        <p className={s.containertext}>City:https://www.facebook.com/profile.php?id=100018624964335&ref=bookmarks </p>
                    </div>
                </div>

            </div>


        </div>
    )
}
export  default ProfileInfo;