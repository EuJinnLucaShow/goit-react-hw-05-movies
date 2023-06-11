import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const params = {
    params: {
      api_key: API_KEY,
      query: searchQuery,
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

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
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
