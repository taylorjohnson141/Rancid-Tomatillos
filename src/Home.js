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
        <Header changeLogin={this.props.changeLogin} userLoggedIn={this.props.userLoggedIn} clickLogout={this.props.clickLogout} />
        <Movies userLoggedIn={this.props.userLoggedIn} ratings={this.props.ratings}/>
      </section>
    )
  }
}

export default Home;
