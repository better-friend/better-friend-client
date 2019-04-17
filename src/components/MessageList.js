import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import MessageContainer from './MessageContainer';

class MessageList extends React.Component {
    state = {
        eventMessage: [{
            person: '',
            phone: '',
            message: '',
            date: '',
            sent: false
    }],
    searchData: []
}
    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addEventMessage = e => {
        console.log('New event add', this.state);
        e.preventDefault();
        const newMessage = {
            person: this.state.person,
            phone: this.state.phone,
            message: this.state.message,
            date: this.state.date,
            sent: this.state.sent
        }
        this.setState({
            eventMessage: [...this.state.eventMessage, newMessage],
            person: '',
            phone: '',
            message: '',
            date: '',
            sent: false
        })
        this.props.history.push('/protected')
    }

    searchMessages = e => {
        console.log('Searching...')
        const messages = this.state.eventMessage.filter(message => {
            if(message.person.includes(e.target.value) || message.date.includes(e.target.value)) {
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
                <h1>Friends</h1>
                <input 
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={this.searchMessages}
                    value={this.state.value}
                />
                <button>Search Messages</button>
                <FormGroup>
                    <h3>Add Friend Event</h3>
                    <Form onSubmit={this.addEventMessage}>
                        <Label>Event Type: {''}
                            <Select name="events">
                                <Option value="null">--</Option>
                                <Option value="anniversary">Anniversary</Option>
                                <Option value="birthday">Birthday</Option>
                            </Select>
                        </Label>
                        <Label>Name: {''}
                            <Input 
                                type="string"
                                name="person"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.person}
                            />
                        </Label>
                        <Label>Phone Number: {''}
                            <Input 
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                        </Label>
                        <Label>Send Date: {''}
                            <Input
                                type="date"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.date}
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
                                value={this.state.message}
                                className="message-input"
                            />
                        </Label>
                        <Button type="submit">Submit</Button>
                    </Form>
                </FormGroup>
                <MessageContainer messageData={
                    this.state.searchData.length > 0 ?
                    this.state.searchData :
                    this.state.eventMessage
                }/>
            </FriendsContainer>
        )
    }
}

const FriendsContainer = styled.div `

`

const FormGroup = styled.div `
    border: 1px solid black;
    border-radius: 5px;
    margin: 50px auto;
    width: 500px;
`
const Form = styled.form `
    margin: 50px;
`

const Label = styled.label `
    display: flex;
`
const Input = styled.input `
    margin: 10px auto;
`

const Select = styled.select `
    margin: 10px auto;
`

const Option = styled.option `

`

const Textarea = styled.textarea `
    margin: 10px auto;
`

export default withRouter(MessageList);