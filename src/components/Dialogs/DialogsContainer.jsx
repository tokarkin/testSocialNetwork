import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOK/AuthRedirect";
import {compose} from "redux";



let moveStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

let moveDispatchToProps = (dispatch) => {

    return {
        sendMessageClick: (newMessage,userIdd) =>{
            dispatch(sendMessageCreator(newMessage,userIdd))
        },

    }
    debugger
};




const DialogsContainer = compose(
    connect(moveStateToProps, moveDispatchToProps),
    withAuthRedirect
)
(withRouter(Dialogs));
export default DialogsContainer;