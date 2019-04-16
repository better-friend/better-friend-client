import React from 'react';

const MessageInfo = (props) => {

    return (
        <div>
            <h2>Messages ready to be sent</h2>
            {props.message.map((message, id) => (
                <div key={id}>
                    <p>Recipient: {message.person}</p>
                    <p>Phone Number: {message.phone}</p>
                    <p>Message: {message.message}</p>
                    <p>Send Date: {message.date}</p>
                </div>
            ))}
        </div>
    )
}

export default MessageInfo;