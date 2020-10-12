import React from 'react';
import Login from './Login.js'
import App from './App.js'
const { Component } = require("react")


class Header extends Component{
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    let button = ''
    if(!this.props.userLoggedIn) {
      button = <button className='login-button' name='Login' onClick= {this.props.changeLogin}>Login</button>
    } else {
      button = <button className='logout-button' name='Logout' onClick= {this.props.clickLogout}>Logout</button>
    }
    return (
      <>
      <header className='App-header'>
        <section className='user-in-out-placeholder'>
          { button }
        </section>
      </header>
      </>
    )
  }
}

export default Header;
