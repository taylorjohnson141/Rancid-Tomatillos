import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movies';

class Home extends Component {
  constructor() {
    super()
      this.state = {}
  }

  render() {
    return (
      <section>
        <Header changeLogin={this.changeLogin} userLoggedIn={this.state.userLoggedIn} clickLogout={this.clickLogout} />
        <Movies userLoggedIn={this.state.userLoggedIn} ratings={this.state.ratings}/>
      </section>
    )
  }
}

export default Home;
