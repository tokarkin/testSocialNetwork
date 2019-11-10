import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  App from '../../App';



const Dialogs = (props) => {
    let elementData = props.state.arrayDialogs.map((dialog)=><DialogItem name={dialog.name} logo={dialog.logo}  id={dialog.id}/>);
    let elementMessaga = props.state.Messages.map((m)=><Message logo={m.logo} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {elementData}

            </div>
            <div className={s.messages}>
                {elementMessaga}
            </div>
        </div>
    )
}
export default Dialogs;