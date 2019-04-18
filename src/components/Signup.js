import React from 'react';
import axios from 'axios';
import { FormGroup, Input } from 'reactstrap';

import styled from 'styled-components';
import Button from './Button';

class Signup extends React.Component {
    state = {
            username: '',
            password: '',
    }

    handleChange = e => {
        console.log('Changing');
        e.persist();
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    signup = e => {
        console.log('Signing up')
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        // Added to make sure sign up works until backend is ready to take API requests
        axios
            .post('https://better-friend-server.herokuapp.com/users/register', user)
            .then(res => {
                console.log(res.data)
                // localStorage.setItem('token', res.data.token)
                // this.setState({
                    
                // })
            })
        // localStorage.setItem('user', this.state.name)
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
                        <Button type="primary">Signup</Button>
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