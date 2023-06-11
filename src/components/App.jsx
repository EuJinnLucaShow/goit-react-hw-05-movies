import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
import { Container, Header, Logo, Link } from './App.styled';

// Import components
// const Home = lazy(() => import('../pages/Home'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));
// const Movies = lazy(() => import('../pages/Movies'));

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎞️
          </span>{' '}
          Movie Search
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
