import React, { Component } from 'react';
import Movie from './Movie'
import {Link} from 'react-router-dom'
import { getMoviesInfo } from './apiCalls';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies : []
      }
    }

   async componentDidMount() {
    let movies = await getMoviesInfo()
      this.setState({movies:movies})
  }

  findIfMovieHasUserRating(id) {
    if(this.props.ratings === undefined){
      return undefined
    }
    let currentMovie = this.props.ratings.find(movie => {
      return movie.movie_id === id
    })
    if(currentMovie){
      return currentMovie.rating
    }
    else {return currentMovie}
  }

  getMovies() {
    return this.state.movies.map(movie => {
      return ( <section className='movie-section' id={movie.id} >
        <Link  to={`/id/${movie.id}`} src={movie.poster_path}> <img src={movie.poster_path} alt = {movie.id} /></Link>
        <article>
          <h2 className='movie-title'>{movie.title}</h2>
          {this.findIfMovieHasUserRating(movie.id)  && <div>Your Rating:{this.findIfMovieHasUserRating(movie.id)}</div>}
          <div>Average Rating:{movie.average_rating.toFixed(2)}</div>
          <div>Release Date:{movie.release_date} </div>
        </article>
      </section>
      )
    })
  }

  render() {
    if(this.state.clicked) {
      return <Movie id={this.state.id}/>
    }
    return (
      <section className='movie-container'>
        {this.getMovies()}
      </section>
    )
  }
}

export default Movies
