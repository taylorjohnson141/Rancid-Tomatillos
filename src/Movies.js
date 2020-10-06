const { Component } = require("react")

import React {Component} from 'react'

function Movies (){
  
}
class Movies extends Component{
  constructor(){
    super();
    this.state = {
      
    }
  }
  findMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies =>{
      this.state.movies = movies.movies
    })
  }

}
export default Movies