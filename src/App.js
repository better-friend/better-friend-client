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
    user: null,
    activeMessage: null
  }

  // Need to work on connecting end point for rendering message data
  componentDidMount() {
    console.log('Mounting...', this.state.messages);

      let user;
      try {
        user = JSON.parse(localStorage.getItem('userData'));
      } catch (error) {
        console.log(error)
      }
      
      console.log(user)
      if(user) {
        this.setState({
          user
        })
        this.getMessages(user.user_id, user.token)
        }
        
  }

  getMessages = (userId, token) => {
    axios
    .get(`https://better-friend-server.herokuapp.com/dates/${userId}`, {
      headers: { token }
    })
    .then(res => {
      console.log(res.data)
      this.setState({
        messages: res.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      const { user_id, token } = this.state.user
      this.getMessages(user_id, token)
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
    addMessage = messageData => {
      console.log('New event add', this.state.messages);
      // e.preventDefault();
      const { user_id, token, username } = this.state.user
      axios
        .post(`https://better-friend-server.herokuapp.com/dates/${user_id}`, {...messageData, username, user_id}, {headers: {token}})
        .then(res => {
          const newMessage = {
            ...messageData,
            user_id,
            date_id: res.data,
            username
          }
          this.setState({
            messages: [...this.state.messages, newMessage]
          })
        })
      // const newMessage = {
      //     person: this.state.person,
      //     phone: this.state.phone,
      //     message: this.state.message,
      //     date: this.state.date,
      //     sent: this.state.sent
      // }
      // this.setState({
      //     messages: [...this.state.messages, newMessage],
      //     person: '',
      //     phone: '',
      //     message: '',
      //     date: '',
      //     sent: false
      // })
      // this.props.history.push('/protected')
  }

  updateUser = (user, cb) => {
    this.setState({
      user: user
    }, cb)
  }

  updateMessage = () => {

  }

  setActiveMessage = () => {

  }

  deleteMessage = () => {

  }
  

  render() {
    console.log('Rendering...')
    return (
      <div className="App">
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
        <Switch>
          <PrivateRoute path='/protected/:user_id' render={props => <MessageList {...props} messages={this.state.messages} addMessage={this.addMessage} />}/>
          {/* <PrivateRoute path="/protected" component={MessageList}/> */}
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/betterfriends' component={() => { window.location = 'https://elastic-snyder-dac5a4.netlify.com/'; return null;} }/> */}
          <Route path='/login' render={props => <Login {...props} updateUser={this.updateUser} />}/>
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
