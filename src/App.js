import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Movies from './Movies'
import Movie from './Movie';
import { getUser } from './apiCalls';
import { getRatings } from './apiCalls';


class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoginPage:false,
      userLoggedIn:false,
      user:''
    }
  }

  addUser = async (user) => {
    let userInfo = await getUser(user)
        console.log(userInfo)
        this.setState({userLoggedIn:true})
        this.setState({user:userInfo})
        this.addRatings(this.state.user.id)
  }

  addRatings = (id) => {
    getRatings(id)
      .then(ratings => {
      this.setState({ratings:ratings.ratings})
    })
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
    this.setState({isLoginPage:false})
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
