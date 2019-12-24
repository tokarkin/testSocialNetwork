import React from 'react';
import Message from "./Message";



const MessageContainer = (props) => {
debugger
    let message = props.message.map(data => <Message message={props.message}/>)
    return (
      <div>

      </div>
    )
}
export default MessageContainer;