import React from 'react';
import axios from 'axios'
import { FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Button from './Button';

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
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        axios
            .post('https://better-friend-server.herokuapp.com/users/login', user)
            .then(res => {
                console.log(res.data)
                axios.create({
                    headers: {
                        'Authorization': localStorage.setItem('token', res.data.token)
                    }
                })
            })
        
        this.props.history.push('/protected')
    }

    render() {
        return(
            <LoginContainer>
                <h3>Login</h3>
                <FormGroup>
                    <Form onSubmit={this.login}>
                        <Input 
                            type="string"
                            name="username"
                            placeholder="Username"
                            autoComplete="on"
                            onChange={this.handleChange}
                            value={this.state.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="on"
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                        />
                        <Button type="primary">Login</Button>
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


export default withRouter(Login);