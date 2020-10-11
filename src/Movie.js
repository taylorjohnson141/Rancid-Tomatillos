import React, { Component } from 'react';

class Movie extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      movie : ""
    }
  }
  formatMovie(movie){
    console.log(movie.title)
    return (
    <section>
      <img src = {movie.backdrop_path}></img>
      <article>
      <h2 className = 'movie-title'>{movie.title}</h2>
      <h2 className = 'movie-tagline'>{movie.tagline}</h2>
        <div>Average Rating:{movie.average_rating}</div>
        <div>Release Date:{movie.release_date} </div>
  <p>{movie.overview}</p>
      </article>
      </section>
    )
  }
  async componentDidMount(){
    let movie = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    let response = await movie.json()
      this.setState({movie:response.movie})
  }
  
  
  render(){
    if(!this.state.movie){
      return 'Loading'
    }
    return (
    <div>
      {this.formatMovie(this.state.movie)}
    </div>
    )
  }
}
export default Movie