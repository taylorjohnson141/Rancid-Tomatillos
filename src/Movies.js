import React from 'react';
import Movie from './Movie'
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
    findMovie(){
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(movie => movie.json())
      .then(movieResponse => {
        this.setState({movie:movieResponse})
        let {movie} = this.state
        return(<section>
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
    })
    }
    findMovie = (event) =>{
      let id =event.target.closest('section').id
      this.setState({clicked:true})
      this.setState({id:id})
    }
  getMovies(){
    return this.state.movies.map(movie => {
      return( <section className = 'movie-section' id ={movie.id} onClick = {this.findMovie}>
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
    if(this.state.clicked){
      return <Movie id ={this.state.id}/>
    }
    return (
      <section className = 'movie-container'>
        {this.getMovies()}
      </section>
    );
  }

}





export default Movies