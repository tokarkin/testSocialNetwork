import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  App from '../../App';
import CreateMessage from "./Message/CreateMessage";


const Dialogs = (props) => {
    let elementData = props.state.arrayDialogs.map((dialog)=><DialogItem name={dialog.name} logo={dialog.logo}  id={dialog.id}/>);
    let elementMessaga = props.state.Messages.map((m)=><Message logo={m.logo} message={m.message}/>);
    let createMessage = React.createRef();
    let mail = () => {
        let a = createMessage.current.value;
        alert(a);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {elementData}

            </div>
            <div className={s.messages}>
                {elementMessaga}
               <CreateMessage dispatch = {props.dispatch} />
            </div>
        </div>
    )
}
export default Dialogs;