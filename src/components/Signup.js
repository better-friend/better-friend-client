import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap';

import styled from 'styled-components';

class Signup extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        console.log('Changing');
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value
            }
        }));
    }

    signup = e => {
        console.log('Signing up')
        e.preventDefault();
        // Added to make sure sign up works until backend is ready to take API requests
        localStorage.setItem('user', this.state.user.name)
        this.props.history.push('/login')
    }

    render() {
        return(
            <SignupContainer>
                <h3>SignUp</h3>
                <FormGroup>
                    <Form onSubmit={this.signup}>
                        <Input 
                            type="string"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.user.name}
                            required
                        />
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.user.email}
                            required
                        />
                        <Input 
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={this.handleChange}
                            value={this.state.user.phone}
                            required
                        />
                        <Input 
                            type="string"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.user.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                            required
                        />
                        <Button type="submit">Signup</Button>
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