import React from 'react';
import MessageInfo from './MessageInfo';

const MessageContainer = props => {
    return(
        <div>
            {props.messageData.map((message, id) => {
                return (
                    <div key={id}>
                        <MessageInfo message={message}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MessageContainer;