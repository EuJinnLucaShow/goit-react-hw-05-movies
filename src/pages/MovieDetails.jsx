import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    // Fetch movie details from the API
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
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

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
    </div>
  );
};

export default MovieDetails;
