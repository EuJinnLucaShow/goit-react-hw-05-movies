import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { lazy, Suspense } from 'react';

// Import components
// const Home = lazy(() => import('../pages/Home'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));
// const Movies = lazy(() => import('../pages/Movies'));

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
