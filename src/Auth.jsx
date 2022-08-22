import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      processing: false,
    }
  }
  handleLoginClick = () => {
    this.setState({
      processing: true,
    });
    setTimeout(() => {
      this.setState({
      processing: false,
      isLoggedIn: true,
    });
    }, 2000);
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  };
  render() {
    const { processing, isLoggedIn} = this.state;

    if (processing) {
      return <Spinner size={24} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.handleLogoutClick} />;  
    }
    return <Login onLogin={this.handleLoginClick}/>; 
  }
}

export default Auth;