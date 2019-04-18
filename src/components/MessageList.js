import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
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


    render() {
        return (
            <FriendsContainer>
                <h1>Friends</h1>
                <input 
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={this.props.searchMessages}
                    value={this.state.value}
                />
                <button>Search Messages</button>
                <FormGroup>
                    <h3>Add Friend Event</h3>
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
                        <Button type="primary">Submit</Button>
                    </Form>
                </FormGroup>
                {/* <MessageContainer messageData={
                    this.state.searchData.length > 0 ?
                    this.state.searchData :
                    this.state.messages
                }/> */}
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
    margin: 10px;
`

const Textarea = styled.textarea `
    margin: 10px auto;
`

export default withRouter(MessageList);