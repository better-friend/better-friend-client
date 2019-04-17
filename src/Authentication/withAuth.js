import React from 'react';

// For possibility of using withAuth HOC.
const withAuth = App => Login => 
    class extends React.Component {
        state = {
            loggedIn: false
        }
            
        componentDidMount() {
            console.log('Mounting')
            if (localStorage.getItem('user')) {
                console.log('Friends')
                this.setState({
                    loggedIn: true
                })
            } else {
                console.log('Login')
                this.setState({
                    loggedIn: false
                })
            }
        }

    
    render() {
        if (this.state.loggedIn) {
            return <App />
        }
        return <Login />
    }
}

export default withAuth;