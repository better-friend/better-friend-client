import React from 'react';

const MessageInfo = props => {

    return (
        <div>
            <h2>Messages ready to be sent</h2>
                <div>
                    <p>Recipient: {props.message.person}</p>
                    <p>Phone Number: {props.message.phone}</p>
                    <p>Message: {props.message.message}</p>
                    <p>Send Date: {props.message.date}</p>
                </div>
        </div>
    )
}

export default MessageInfo;