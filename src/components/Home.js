import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Button from './Button';

const Home = () => {

    return (
        <div>
            <h1>Better Friends</h1>
            <p>Never be <span>THAT</span> friend again!</p>
            <Link to="/login"><Button type="primary">Login</Button></Link>
            <Link to="/signup"><Button type="primary">Signup</Button></Link>
        </div>
    )
}

export default Home;