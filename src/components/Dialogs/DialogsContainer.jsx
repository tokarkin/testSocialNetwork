import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let moveStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

let moveDispatchToProps = (dispatch) => {
    return {
        SendMessageClick: () =>{
            dispatch(sendMessageCreator());
        },
        updateNewMessage:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
};
const DialogsContainer = connect(moveStateToProps, moveDispatchToProps)(Dialogs);
export default DialogsContainer;