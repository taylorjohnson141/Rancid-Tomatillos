import React from 'react';

export const getUser = (user) =>{
  let theUser
  let data = {
      email:user.email,
      password: String(user.password)
    }
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login',
  {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
  body : JSON.stringify(data)
  })
  .then(response =>response.json() )
  .then(currentUser => {
    theUser = currentUser
  })
  return theUser
}

export const getRatings = (id) =>{
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`)
    .then(data =>data.json())
}

export const getMoviesInfo = async () => {
  let promise = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  let response = await promise.json()
  let movies = response.movies;
  return movies
}

export const getSingleMovieInfo = async (match) => {
  let movie = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${match}`)
  let response = await movie.json()
  return response
}
