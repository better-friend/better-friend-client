import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import MessageContainer from './MessageContainer';

const blankMessage = {
    user_id: '',
    date: '',
    personToSendMessageTo: '',
    phone_number: '',
    message: '',
    sent: false
}

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            searchData: [],
            newMessage: {...blankMessage}
        }
    }

    handleChange = e => {
        this.setState({
            newMessage: {...this.state.newMessage, 
                [e.target.name]: e.target.value
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props.messages) {
            return this.state.messages
        }
    }


    searchMessages = e => {
        const messages = this.props.messages.filter(message => {
            // toLowerCase() Allows the search to include both uppercase and lowercase characters
            if(message.personToSendMessageTo.toLowerCase().includes(e.target.value.toLowerCase()) || message.date.includes(e.target.value)) {
                return message
            } else {
                return null
            }
        });
        this.setState({
            searchData: messages
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addMessage(this.state.newMessage);
        this.setState({
            newMessage: {...blankMessage}
        })
    }



    render() {
        return (
            <FriendsContainer>
                <EventFormH1>Message Scheduler</EventFormH1>
                <Input 
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={this.searchMessages}
                    value={this.state.value}
                />
                <Button type="primary">Search Messages</Button>
                <FormGroup>
                    <EventFormH3>Add Friend Event</EventFormH3>
                    <Form onSubmit={this.onSubmit}>

                        <Label>Name: {''}
                            <Input 
                                type="string"
                                name="personToSendMessageTo"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.newMessage.personToSendMessageTo}
                            />
                        </Label>
                        <Label>Phone Number: {''}
                            <Input 
                                type="tel"
                                name="phone_number"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                                value={this.state.newMessage.phone_number}
                            />
                        </Label>
                        <Label>Send Date: {''}
                            <Input
                                type="date"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.newMessage.date}
                            />
                        </Label>
                        <Label>Message: {''}
                            <Textarea 
                                type="string"
                                name="message"
                                maxLength="150"
                                rows="2"
                                columns="10"
                                placeholder="Enter message..."
                                onChange={this.handleChange}
                                value={this.state.newMessage.message}
                                className="message-input"
                            />
                        </Label>
                        <Button type="primary" size="lg">Submit</Button>
                    </Form>
                </FormGroup>
                <MessageContainer 
                    messages={this.props.messages}
                    messageData={
                        this.state.searchData.length > 0 ?
                        this.state.searchData :
                        this.props.messages
                    }
                    deleteMessage={this.props.deleteMessage}
                />
            </FriendsContainer>
        )
    }
}

const FriendsContainer = styled.div `

`

const EventFormH1 = styled.h1 `
    border-botton: 1px solid #305f72;
`

const EventFormH3 = styled.h3 `
    background: #305f72;
    color: #f0b7a4;
    margin: 0px;
    height: 25px;
    padding: 25px;
`

const FormGroup = styled.div `
    border: 1px solid #305f72;
    border-radius: 5px;
    margin: 50px auto;
    width: 500px;
    background: #f0b7a4;
    color: #305f72;
    font-weight: 700;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
`
const Form = styled.form `
    margin: 50px;
`

const Label = styled.label `
    display: flex;
`
const Input = styled.input `
    margin: 10px;
`

const Textarea = styled.textarea `
    margin: 10px auto;
`

export default withRouter(MessageList);