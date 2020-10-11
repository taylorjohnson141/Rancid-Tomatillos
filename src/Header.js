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
      button = <button className='login-button' onClick= {this.props.changeLogin}>Login</button>
    } else {
      button = <button className='logout-button' onClick= {this.props.clickLogout}>Logout</button>
    }
    return (
      <>
      <header className='App-header'>
        <section className='user-in-out-placeholder'>
          { button }
        </section>
        <section className='genre-dropdown'>
          <button className='genre-dropdown-button'>Select Genre
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Drama</a>
            <a href="#">Adventure</a>
            <a href="#">Horror</a>
          </div>
        </section>
      </header>
      </>
    )
  }
}

export default Header;
