import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import "jest-environment-jsdom-sixteen";
import { getSingleMovieInfo } from './apiCalls.js';
jest.mock('./apiCalls.js');
import Movie from './Movie';

describe('Movie', () => {
  it('should render movie details', async () => {
    getSingleMovieInfo.mockResolvedValue({movie: {
      "id":694919,
      "title":"Money Plane",
      "poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "release_date":"2020-09-29",
      "overview":"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
      "genres":["Action"],
      "budget":0,
      "revenue":0,
      "runtime":82,
      "tagline":"",
      "average_rating":4
      }
    })

    render (
      <Movie/>
    )
    expect(getSingleMovieInfo).toHaveBeenCalledTimes(1);
    const movieTitle = await waitFor(() => screen.getByText("Money Plane"));

    expect(movieTitle).toBeInTheDocument();
  })
  it('should render Loading as a string if the the state of movie does not exist', async () => {
    getSingleMovieInfo.mockResolvedValue({
    })
    render (
      <Movie/>
    )
    const movieLoading = await waitFor(() => screen.getByText("Loading"));
    expect(movieLoading).toBeInTheDocument();
  })
})
