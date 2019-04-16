import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Better Friends</h1>
            <p>Never be <span>THAT</span> friend again!</p>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Signup</button></Link>
        </div>
    )
}

export default Home;