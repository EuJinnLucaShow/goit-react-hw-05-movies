import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Отримання інформації про акторський склад фільму з API
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `/movies/get-movie-credits?movieId=${movieId}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Cast</h1>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
