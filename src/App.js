import React, { Component } from 'react';
import logo from './logo.svg';
import Movies from './Movies'
import './App.css';
import Header from './Header.js';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
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
    if(!this.state.isLoginPage) {
      this.setState({isLoginPage:true})
    } else {
      this.setState({isLoginPage:false})
    }
  }
  clickLogout = () => {
    this.setState({userLoggedIn:false})
    this.setState({user:''})
  }
  addUser = (user) =>{
    console.log(user)
    let data = {
      email:user.email,
      password: String(user.password)
        }
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login',
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(data)
    })
    .then(response =>response.json() )
    .then(userData =>{
      this.setState({userLoggedIn:true})
      this.setState({user:userData.user})
      console.log('hello',this.state.user.id)
      this.getRatings()
    })
    }
    getRatings = () =>{
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.state.user.id}/ratings`)
      .then(data =>data.json())
      .then(ratings => {
        console.log(ratings.ratings)
        this.setState({ratings:ratings.ratings})
      console.log(this.state.ratings)
      })

    }
  render () {
    {/*// if(this.state.isLoginPage){
    //   return <Login addUser={this.addUser} changeLogin = {this.changeLogin}/>
    // } */}
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/login' render={(props) => <Login {...props} addUser={this.addUser} changeLogin={this.changeLogin}/>}/>
        </Switch>
      </Router>
    )
    }

}

export default App;
