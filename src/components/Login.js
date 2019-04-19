import React from 'react';
import axios from 'axios'
import { FormGroup, Input } from 'reactstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Button from './Button';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        axios
            .post('https://better-friend-server.herokuapp.com/users/login', user)
            .then(res => {
                this.props.updateUser(res.data, ()=> {
                    this.props.history.push(`/protected/${res.data.user_id}`)
                })
                try {
                    localStorage.setItem('userData', JSON.stringify(res.data))
                } catch (error) {
                    console.log(error)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return(
            <div>
                <ul className="navBar">
                <Link to="https://never-be-that-friend-again.netlify.com/" style={{textDecoration: 'none'}}><h1>Better Friends</h1></Link>
                    <li>
                        <NavLink exact to="/" className="activeNav">
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="activeNav">
                        Signup
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="activeNav">
                        Login
                        </NavLink>
                    </li>
                </ul>
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
            </div>
        )
    }
}

const LoginContainer = styled.div `
    border: 1px solid black;
    border-radius: 5px;
    margin: 50px auto;
    width: 300px;
    background: #f0b7a4;
    color: #305f72;
    font-weight: 700;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
`
const Form = styled.form `
    margin: 50px;
`


export default withRouter(Login);