import React from 'react';
import MessageInfo from './MessageInfo';

const MessageContainer = props => {
    return(
        <div>
            <h2>Scheduled Messages</h2>
            {props.messageData.map((message, id) => {
                console.log(message)
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