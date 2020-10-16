import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Movies from './Movies'
import Movie from './Movie';

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

    return (
      <main>
        <Switch>
        <Route exact path='/' render={(props) => <Home {...props} changeLogin={this.state.changeLogin} userLoggedIn={this.state.userLoggedIn} clickLogout={this.clickLogout} ratings={this.state.ratings}/>} />
        <Route path='/login' render={(props) => <Login {...props} addUser={this.addUser} changeLogin={this.changeLogin} isLoginPage={this.state.isLoginPage}/>}/>
        <Route  path='/id/:movieId' render={match => {
            console.log('algo',match.match.params.movieId)
          return <Movie match = {match.match.params.movieId} />
        }}/>
        </Switch>
      </main>
    )
    }

}

export default App;
