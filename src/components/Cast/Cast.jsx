import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { List, Item } from './Cast.styled';
import placeholder from '../images/placeholder.png';

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
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${placeholder}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </Item>
            ))}
          </List>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;
