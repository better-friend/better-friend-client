import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Friends from './components/Friends';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Better Friends</h1>
        <Login />
        <Signup />
        <Friends />
      </div>
    );
  }
}

export default App;
