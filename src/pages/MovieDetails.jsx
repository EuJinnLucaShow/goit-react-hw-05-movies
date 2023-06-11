import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    // Fetch movie details from the API
    const params = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/movie/${movieId}`, params);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // Calculate rounded popularity percentage
  const roundedPopularity = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>User score: {roundedPopularity}%</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h2>Genres</h2>
      <p>
        {movieDetails.genres.map(genre => (
          <span key={genre.id}> {genre.name}</span>
        ))}
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
