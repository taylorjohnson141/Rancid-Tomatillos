import React, { Component } from 'react';
import { Router, NavLink } from 'react-router-dom';

function LoginButton(){
  return (
    <NavLink to='/login' className='login-button'>Login</NavLink>
  )
}


export default LoginButton;
