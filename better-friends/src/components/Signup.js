import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap';

import styled from 'styled-components';

class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
    }

    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    signup = e => {
        console.log('Signing up')
        e.preventDefault();
        
    }

    render() {
        return(
            <SignupContainer>
                <h3>SignUp</h3>
                <FormGroup>
                    <Form>
                        <Input 
                            type="string"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            required
                        />
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            required
                        />
                        <Input 
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={this.handleChange}
                            value={this.state.phone}
                            required
                        />
                        <Input 
                            type="string"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                        />
                        <Button>Signup</Button>
                    </Form>
                </FormGroup>
            </SignupContainer>
        )
    }
}

const SignupContainer = styled.div `
    border: 1px solid black;
    border-radius: 5px;
    margin: 50px auto;
    width: 300px;
`
const Form = styled.form `
    margin: 50px;
`


export default Signup;