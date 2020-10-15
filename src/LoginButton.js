import React, { Component } from 'react';
import { Router, NavLink } from 'react-router-dom';

class LoginButton extends Component{
  constructor(props) {
    super(props)
      this.state = {}
    }
  render() {
    return (
        <NavLink to='/login' className='login-button'>Login</NavLink>
    )
  }
}

export default LoginButton;
