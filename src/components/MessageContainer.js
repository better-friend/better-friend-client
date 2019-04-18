import React from 'react';
import MessageInfo from './MessageInfo';

const MessageContainer = props => {
    return(
        <div>
            <h2>Messages ready to be sent</h2>
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