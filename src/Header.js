import React from 'react';
import Login from './Login.js'
const { Component } = require("react")


class Header extends Component{
  constructor(){
    super()
    this.state = {
      displayLogin:false
    }
  }
  
  displayLogin = () =>{
    console.log('hello')
    this.setState({displayLogin:true})
  }


  render(){
    return (
      <>
      {this.state.displayLogin && <Login/>}
      <header className='App-header'>
        <section className='user-in-out-placeholder'>
      <button className='login-button' onClick= {this.displayLogin}>Login</button>
          {/* <button className='logout-button'>Logout</button> */}
        </section>
        <section className='genre-dropdown'>
          <button className='genre-dropdown'>Select Genre
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
