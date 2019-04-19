import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const MessageInfo = props => {

    const deleteMessage = e => {
        e.preventDefault();
        props.deleteMessage(props.message.date_id);
    }

    return (
        <MessageCardWrap>
            <MessageCard>
                    <p><span>Recipient:</span> {props.message.personToSendMessageTo}</p>
                    <p><span>Phone Number:</span> {props.message.phone_number}</p>
                    <p><span>Message:</span> {props.message.message}</p>
                    <p><span>Send Date:</span> {props.message.date}</p>
                    <Button type="primary" onClick={deleteMessage}>Delete</Button>
            </MessageCard>
        </MessageCardWrap>
    )
}


const MessageCardWrap = styled.div `
    // display: flex;
    margin: 20px auto;
`
const MessageCard = styled.div `
    border: 1px solid #305f72;
    min-width: 400px;
    min-height: 250px;
    padding: 20px;
    margin: 10px;
`



export default withRouter(MessageInfo);