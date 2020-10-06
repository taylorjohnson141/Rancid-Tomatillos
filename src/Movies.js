import React from 'react';

const { Component } = require("react")


async function letfindMovies(){
  let promise = fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
  .then(movies =>{
    console.log(movies.movies)
     return movies.movies
  })
  let result = await promise
  return result
}

function Movies (){
  return(
    <section>
      <h1>{letfindMovies()}</h1>
    </section>
  )
}

render() {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {this.state.Posts}
      </ul>
    </div>
  );
}

export default Movies