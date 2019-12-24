import React from 'react';
import s from './Dialogs.module.css';
import {NavLink, Redirect, Route} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogReduxForm from "./DialogsForm";
import handleSubmit from "redux-form/lib/handleSubmit";

const Dialogs = (props) => {

    //if(!props.isAuth) return <Redirect to ={'/login'} />;
    // if(!props.match.params.dialogId)
    if(props.match.params.dialogId == undefined){
        props.match.params.dialogId = '1';
    }
    let state = props.messagesPage;
    let elementData = state.arrayDialogs.map((dialog) => <DialogItem
        name={dialog.name} key={dialog.id} message ={dialog.messages}
        logo={dialog.logo} id={dialog.id}/>);
    let userId= props.match.params.dialogId;
    let elementMessages = state.arrayDialogs[userId-1].messages.map((m) => <Message
        messageType={m.messageType} message={m.message} key={m.id}/>);

    let AddMessage = (values) => {
        let a = props.match.params.dialogId-1;
       props.sendMessageClick(values.newMessage,a);

    };

    return (
        <div className={s.dialogs}>

                <div className={s.dialogs__item} >
                    {elementData}

                </div>

            <div className={s.messages}>
                {elementMessages}
              <DialogReduxForm onSubmit={AddMessage}

              />
            </div>
        </div>
    )
}
export default Dialogs;