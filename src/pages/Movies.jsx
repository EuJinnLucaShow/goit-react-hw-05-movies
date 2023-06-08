import React from 'react';

const Movies = () => {
  return (
    <div>
      <h1>Movie Search</h1>
      <input type="text" debounceTimeout={500} placeholder="type here" />
      <button>Search</button>
    </div>
  );
};

export default Movies;
