import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class LogoutButton extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <NavLink to='/' className='logout-button'>Logout</NavLink>
  )
  }
}
export default LogoutButton