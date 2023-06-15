import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'service/Api';

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
      <h2>Trending Movies</h2>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        {trendingMovies.length === 0 ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : (
          <MovieList films={trendingMovies} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Home;
