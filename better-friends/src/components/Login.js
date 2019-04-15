import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap'

import styled from 'styled-components';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = e => {
        console.log('Logging in')
        e.preventDefault();
        
    }

    render() {
        return(
            <LoginContainer>
                <h3>Login</h3>
                <FormGroup>
                    <Form>
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
                        <Button>Login</Button>
                    </Form>
                </FormGroup>
            </LoginContainer>
        )
    }
}

const LoginContainer = styled.div `
    border: 1px solid black;
    border-radius: 5px;
    margin: 50px auto;
    width: 300px;
`
const Form = styled.form `
    margin: 50px;
`


export default Login;