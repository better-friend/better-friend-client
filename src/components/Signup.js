import React from 'react';
import axios from 'axios';
import { FormGroup, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
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
        this.props.history.push('/login')
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
            <SignupContainer>
                <h3>Sign Up</h3>

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
                        <Button type="primary">Submit</Button>
                    </Form>
                </FormGroup>
            </SignupContainer>
            </div>
        )
    }
}

const SignupContainer = styled.div `
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


export default Signup;