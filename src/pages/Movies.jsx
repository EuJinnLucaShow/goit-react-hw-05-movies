import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from '../components/Api/Api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
      <SearchForm value={movieName} onChange={updateQueryString} />
      <MovieList films={searchResults} />
    </div>
  );
};

export default Movies;
