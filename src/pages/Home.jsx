import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../components/Api/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Отримання списку популярних фільмів з API
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies(); // Call the fetchTrendingMovies function
        setTrendingMovies(movies); // Update the trendingMovies state with the fetched movies
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function to fetch the trending movies
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
