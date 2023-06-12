import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { List, Item } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    // Отримання інформації про акторський склад фільму з API
    const params = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };

    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(`movie/${movieId}/credits?`, params);
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Cast</h2>
      <List>
        {cast.map(actor => (
          <Item key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
              }
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Cast;
