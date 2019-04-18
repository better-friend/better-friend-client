import React from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';

const MessageInfo = props => {

    return (
        <div>
            {/* <Card>
                <CardBody> */}
                <p>Recipient: {props.message.personToSendMessageTo}</p>
                <p>Phone Number: {props.message.phone_number}</p>
                <p>Message: {props.message.message}</p>
                <p>Send Date: {props.message.date}</p>
                {/* </CardBody>
            </Card> */}
        </div>
    )
}

export default MessageInfo;