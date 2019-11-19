import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.messagesPage;

    let elementData = state.arrayDialogs.map((dialog) => <DialogItem
        name={dialog.name} key={dialog.id}
        logo={dialog.logo} id={dialog.id}/>);
    let elementMessages = state.Messages.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.SendMessageClick();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);

    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                {elementData}

            </div>
            <div className={s.messages}>

                <div>
                    <div>{elementMessages}</div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder='enter message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            send
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;