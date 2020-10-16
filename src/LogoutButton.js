import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function LogoutButton(props) {
  console.log(props)
  return (
    <NavLink to='/' className='logout-button' onClick={props.clickLogout}>Logout</NavLink>
  )
}
 
  
export default LogoutButton