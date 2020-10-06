import React from 'react';

const { Component } = require("react")


class Movies extends Component{
  constructor(){
    super();
    this.state = {
      movies : []
      }
        
     }
     
    async componentDidMount(){
      let promise = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      let response = await promise.json()
      let movies = response.movies
      this.setState({movies:movies})
    }
  
  getMovies(){
    return this.state.movies.map(movie => {
      return movie.title
    })

  }
  
  render() {
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.getMovies()}
        </ul>
      </div>
    );
  }

}
async function letfindMovies(){
  let promise = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  let response = await promise.json()
  let movies = response.movies
  return movies
}




export default Movies