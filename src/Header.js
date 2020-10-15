import React, { Component } from 'react';
import Login from './Login'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
class Header extends Component{
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
  
    return (
      <>
      <header className='App-header'>
        <section className='user-in-out-placeholder'>
          {!this.props.userLoggedIn && <LoginButton/>}
          {this.props.userLoggedIn && <LogoutButton clickLogout = {this.props.clickLogout}/>}
        </section>
      </header>
      </>
    )
  }
}

export default Header;
