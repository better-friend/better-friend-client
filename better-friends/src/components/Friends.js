import React from 'react'
import { Button } from 'reactstrap'

import styled from 'styled-components';

class Friends extends React.Component {
    state = {
        name: '',
        phone: '',
        message: '',
        date: ''
    }

    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <FriendsContainer>
                <h1>Friends</h1>
                <FormGroup>
                    <Form>
                        <Label>Name: {''}
                            <Input 
                                type="string"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name}
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
                            <Input 
                                type="string"
                                name="message"
                                maxLength="50"
                                placeholder="Enter message..."
                                onChange={this.handleChange}
                                value={this.state.message}
                                width="100"
                                height="100"
                            />
                        </Label>
                        <Button>Submit</Button>
                    </Form>
                </FormGroup>
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

export default Friends;