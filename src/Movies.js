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
      return( <section>
        <img src = {movie.backdrop_path}></img>
        <img src = {movie.poster_path}></img>
        <article>
        <div>{movie.title}</div>
          <div>{movie.average_rating}</div>
          <div>{movie.release_date} </div>
        </article>
        </section>
      )
  
    })

  }
  
  render() {
    return (
      <section>
        {this.getMovies()}
      </section>
    );
  }

}





export default Movies