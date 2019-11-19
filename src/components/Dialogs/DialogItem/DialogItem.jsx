import React from 'react';
import sas from './DialogsItem.module.css';
import  s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import logotip from '../../../images/sasha.jpg';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <div className={sas.block}>
                    <img className={sas.img} src={props.logo} alt=""/>
                    <p className={sas.name}>{props.name}</p>
                </div>
            </NavLink>
        </div>
    )
}
export default DialogItem;