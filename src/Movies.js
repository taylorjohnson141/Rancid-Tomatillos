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
      return( <section className = 'movie-section'>
        <img src = {movie.poster_path}></img>
        <article>
        <h2 className = 'movie-title'>{movie.title}</h2>
          <div>Average Rating:{movie.average_rating}</div>
          <div>Release Date:{movie.release_date} </div>
        </article>
        </section>
      )
  
    })

  }
  
  render() {
    return (
      <section className = 'movie-container'>
        {this.getMovies()}
      </section>
    );
  }

}





export default Movies