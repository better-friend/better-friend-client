import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MessageList from './components/MessageList';

// For possibility of using withAuth HOC.
// import withAuth from './Authentication/withAuth';
// import MessageContainer from './components/MessageContainer';

// const WithAuthComp = withAuth(Friends)(Login);

class App extends React.Component {
  state = {
    messages: [],
    // searchData: []
  }

  // Need to work on connecting end point for rendering message data
  componentDidMount() {
    console.log('Mounting...', this.state.messages)
      const userId = localStorage.getItem('userId')
      if(userId) {
        axios
          .get(`https://better-friend-server.herokuapp.com/dates/:${userId}`)
          .then(res => {
            console.log(res.data)
            this.setState({
              messages: res.data
            })
          })
        }

  }

  searchMessages = e => {
    console.log('Searching...')
    const messages = this.state.messages.filter(message => {
        // toLowerCase() Allows the search to include both uppercase and lowercase characters
        if(message.person.toLowerCase().includes(e.target.value.toLowerCase()) || message.date.includes(e.target.value)) {
            return message
        } else {
            return null
        }
    });
    this.setState({
        searchData: messages
    })
}

  // Will replace with axios post request to API
  //   addEventMessage = e => {
  //     console.log('New event add', this.state.messages);
  //     e.preventDefault();
  //     const newMessage = {
  //         person: this.state.person,
  //         phone: this.state.phone,
  //         message: this.state.message,
  //         date: this.state.date,
  //         sent: this.state.sent
  //     }
  //     this.setState({
  //         messages: [...this.state.messages, newMessage],
  //         person: '',
  //         phone: '',
  //         message: '',
  //         date: '',
  //         sent: false
  //     })
  //     this.props.history.push('/protected')
  // }
  

  render() {
    console.log('Rendering...')
    return (
      <div className="App">
        <ul className="navBar">
          <h1>Better Friends</h1>
          <li>
            <NavLink exact to="/betterfriends" className="activeNav">
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
        <Switch>
          <PrivateRoute path='/protected' render={props => <MessageList {...props} addMessage={this.addEventMessage} searchMessages={this.searchMessages}/>}/>
          {/* <PrivateRoute path="/protected" component={MessageList}/> */}
          <Route exact path='/' component={Home}/>
          <Route exact path='/betterfriends' component={() => { window.location = 'https://elastic-snyder-dac5a4.netlify.com/'; return null;} }/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          {/* <MessageContainer 
            messageData={
              this.state.searchData.length > 0 ?
              this.state.searchData :
              this.state.messages
            }
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
