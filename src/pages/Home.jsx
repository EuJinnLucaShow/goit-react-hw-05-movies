import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Отримання списку популярних фільмів з API
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('/trending/get-trending', {
          params: {
            apiKey: 'a4e0e6c94492c515df52f4a6ebcc54c7',
          },
        });
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
