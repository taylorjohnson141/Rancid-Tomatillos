import React, { Component } from 'react';
import logo from './logo.svg';
import Movies from './Movies'
import './App.css';
import Header from './Header.js';
import Login from './Login';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoginPage:false,
      userLoggedIn:false,
      user:''
    }
  }
  changeLogin = () => {
    this.setState({isLoginPage:true})
  }
  addUser = (user) =>{
    this.setState({userLoggedIn:true})
    this.setState({user})

  }
  render () {
    if(this.state.isLoginPage){
      return <Login/>
    }
    return (
    <React.Fragment>
    <Header changeLogin = {this.changeLogin} addUser ={this.addUser} />
   <Movies/>
  </React.Fragment>
    )
    }
  
}

export default App;
