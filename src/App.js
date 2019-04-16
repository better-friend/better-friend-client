import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Friends from './components/Friends';


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
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/friends' component={Friends}/>
      </div>
    );
  }
}

export default App;
