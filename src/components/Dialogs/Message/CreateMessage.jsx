import React from 'react';
import s from '../Dialogs.module.css';
import {addMessageActionCreator, uppdateNewMessageTextActionCreator} from "../../../redux/state";


const CreateMessage = (props) => {
    let createMessage = React.createRef();
    let addNewMessage = () =>{
        props.dispatch(addMessageActionCreator());
    }

    let onChangeText = () =>{
        let message = createMessage.current.value;
        let action = uppdateNewMessageTextActionCreator(message);
        props.dispatch(action);
        console.log(action);
    };
    return (
        <div className={s.messages}>
            <div>
                <textarea onChange={onChangeText}
                          ref={createMessage}
                          value={props.sendMessage}
                           cols="30" rows="10"></textarea>
                <button onClick={addNewMessage}>Send Message</button>
            </div>
        </div>

    )
}
export default CreateMessage;