import React from 'react';
import s from './../Dialogs.module.css';




const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <img src={props.logo} alt=""/>
        </div>

    )
}

export default Message;