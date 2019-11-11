import React from 'react';
import s from './../Dialogs.module.css';




const Message = (props) => {
    let createMessage = React.createRef();
    let mail = ()=>{
        let a = createMessage.current.value;
        alert(a);
    }
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div>
                <textarea ref={createMessage} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={mail}>Send Message</button>
            </div>
        </div>

    )
}

export default Message;