import React from 'react';
import { Router, NavLink } from 'react-router-dom';

function LoginButton(props){
  return (
    <NavLink to='/login' className='login-button' onClick={props.changeLogin}>Login</NavLink>
  )
}

export default LoginButton;
