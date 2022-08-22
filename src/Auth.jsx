import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    /*<Login />;
    let button;
    if (this.state.isLoggedIn===false) {
      button = <Login onLogin={this.handleLoginClick}/>; 
      <Spinner />
      
      
    } else {
      button = <Logout onLogout={this.handleLogoutClick} />;  
    }
    return (
      <div>
        {button}
      </div>
    );*/
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