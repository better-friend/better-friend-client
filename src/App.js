import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MessageList from './components/MessageList';


class App extends React.Component {
  state = {
    messages: [],
    user: null,
  }


  updateUser = (user, cb) => {
    this.setState({
      user: user
    }, cb)
  }

  componentDidMount() {
      let user;
      try {
        user = JSON.parse(localStorage.getItem('userData'));
      } catch (error) {
        console.log(error)
      }
      
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

    addMessage = messageData => {
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
  }


  deleteMessage = idToDelete => {
    const { user_id, token } = this.state.user
    console.log(token)
    axios
      .delete(`https://better-friend-server.herokuapp.com/dates/${user_id}/${idToDelete}`, {headers: {token}})
      .then(res => {
        console.log(res)
        this.setState({
          messages: this.state.messages.filter(message => {
            if (message.date_id === idToDelete) {
              return false
            } else {
              return true
            }
          })
        })
      })
  }
  

  render() {
    console.log('Rendering...')
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path='/protected/:user_id' render={props => <MessageList {...props} messages={this.state.messages} addMessage={this.addMessage} deleteMessage={this.deleteMessage}/>}/>
          <Route exact path='/' component={Home}/>
          <Route path='/login' render={props => <Login {...props} updateUser={this.updateUser} />}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
