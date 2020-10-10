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
      isLogin:false
    }
  }
  changeLogin = () => {
    this.setState({isLogin:true})
  }
  render () {
    if(this.state.isLogin){
      return <Login/>
    }
    return (
    <React.Fragment>
    <Header changeLogin = {this.changeLogin} />
   <Movies/>
  </React.Fragment>
    )
    }
  
}

export default App;
