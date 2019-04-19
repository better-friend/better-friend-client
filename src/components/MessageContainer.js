import React from 'react';
import MessageInfo from './MessageInfo';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

const MessageContainer = props => {
    return(
        <div>
            <H2>Scheduled Messages</H2>
            <Div>
            {props.messageData.map((message) => {
                return (
                    
                    <MessageInfoCard key={message.date_id}>
                        <MessageInfo messages={props.messages} message={message} deleteMessage={props.deleteMessage}/>
                    </MessageInfoCard>
                    
                )
            })}
            </Div>
        </div>
    )
}

const Div = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
`

const H2 = styled.h2 `
    background:  #305f72;
    color: #f0b7a4;
`

const MessageInfoCard = styled.div `

`


export default withRouter(MessageContainer);