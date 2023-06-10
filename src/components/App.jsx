import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Container, Header, Logo, Link } from './App.styled';

// Import components
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Movies = lazy(() => import('../pages/Movies'));

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
          <Link to="/Home" end>
            Home
          </Link>
          <Link to="/movies">Movie</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
