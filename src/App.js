import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Friends from './components/Friends';

// For possibility of using withAuth HOC.
// import withAuth from './Authentication/withAuth';

// const WithAuthComp = withAuth(Friends)(Login);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="navBar">
          <li>
            <NavLink exact to="/" className="activeNav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="activeNav">
              Create Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="activeNav">
              Login
            </NavLink>
          </li>
        </ul>
        <PrivateRoute path='/protected' component={Friends}/>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </div>
    );
  }
}

export default App;
