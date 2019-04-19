import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Home = () => {

    return (
        <div>
            <ul className="navBar">
                <h1>Better Friends</h1>
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
            <H1>Better Friends</H1>
            <P>Never be <span>THAT</span> friend again!</P>
            <Link to="/login"><Button type="primary">Login</Button></Link>
            <Link to="/signup"><Button type="primary">Signup</Button></Link>
        </div>
    )
}

const H1 = styled.h1 `
    border-bottom: 5px solid #305f72;
    margin: 17px auto;
    width: 223px;
    font-style: italic;
`

const P = styled.p `
font-style: italic;

`

export default Home;