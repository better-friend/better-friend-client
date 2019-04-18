import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import MessageContainer from './MessageContainer';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            searchData: []
        }
    }

    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Will delete later
    // addMessage = e => {
    //     console.log('New event add', this.state);
    //     e.preventDefault();
    //     const newMessage = {
    //         person: this.state.person,
    //         phone: this.state.phone,
    //         message: this.state.message,
    //         date: this.state.date,
    //         sent: this.state.sent,
    //         id: this.state.id
    //     }
    //     this.setState({
    //        messages: [...this.state.messages, newMessage],
    //         person: '',
    //         phone: '',
    //         message: '',
    //         date: '',
    //         sent: false,
    //         id: ''
    //     })
    //     this.props.history.push('/protected')
    // }

    searchMessages = e => {
        console.log('Searching...')
        const messages = this.state.messages.filter(message => {
            // toLowerCase() Allows the search to include both uppercase and lowercase characters
            if(message.person.toLowerCase().includes(e.target.value.toLowerCase()) || message.date.includes(e.target.value)) {
                return message
            } else {
                return null
            }
        });
        this.setState({
            searchData: messages
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
                    <Form onSubmit={this.props.addMessage}>

                        <Label>Name: {''}
                            <Input 
                                type="string"
                                name="person"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.value}
                            />
                        </Label>
                        <Label>Phone Number: {''}
                            <Input 
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                                value={this.state.value}
                            />
                        </Label>
                        <Label>Send Date: {''}
                            <Input
                                type="date"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.value}
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
                                value={this.state.value}
                                className="message-input"
                            />
                        </Label>
                        <Button type="primary" size="lg">Submit</Button>
                    </Form>
                </FormGroup>
                <MessageContainer 
                    messageData={
                        this.state.searchData.length > 0 ?
                        this.state.searchData :
                        this.state.messages
                    }
                />
            </FriendsContainer>
        )
    }
}

const FriendsContainer = styled.div `

`

const EventFormH1 = styled.h1 `
    
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