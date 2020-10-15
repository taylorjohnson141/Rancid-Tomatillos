import React, { Component } from 'react';
import Movie from './Movie'

class Movies extends Component{
  constructor(){
    super();
    this.state = {
      movies : []
      }
    }

    async componentDidMount() {
      let promise = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      let response = await promise.json()
      let movies = response.movies
      this.setState({movies:movies})
    }

    findMovie = (event) => {
      let id = event.target.closest('section').id
      this.setState({clicked:true})
      this.setState({id:id})
    }
    findIfMovieHasUserRating(id) {
      console.log(this.props.ratings)
      if(this.props.ratings === undefined){
        return undefined
      }

      let currentMovie = this.props.ratings.find(movie => {
        return movie.movie_id === id
      })
      console.log('currentMovie',currentMovie)
      if(currentMovie){
        return currentMovie.rating
      }
      else {return currentMovie}
    }
  getMovies(){
    return this.state.movies.map(movie => {
      return ( <section className='movie-section' id={movie.id} onClick={this.findMovie}>
        <img src={movie.poster_path}></img>
        <article>
          <h2 className='movie-title'>{movie.title}</h2>
          {this.findIfMovieHasUserRating(movie.id)  && <div>Your Rating:{this.findIfMovieHasUserRating(movie.id)}</div>}
          <div>Average Rating:{movie.average_rating}</div>
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
