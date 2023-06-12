import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const params = {
      params: {
        api_key: API_KEY,
        query: movieName,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
    };

    const handleSearch = async () => {
      try {
        const response = await axios.get(`/search/movie`, params);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    handleSearch();
  }, [movieName]);

  return (
    <div>
      <SearchForm value={movieName} onChange={updateQueryString} />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
