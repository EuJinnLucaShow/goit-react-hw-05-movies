import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../components/Api/Api';
import {
  Container,
  Description,
  ImageContainer,
  Image,
  ProdCompany,
} from './MovieDetails.styled';
import noimage from '../components/images/noimage.svg';
import Button from '../components/Button/Button';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  useEffect(() => {
    // Отримання деталів фільму з API
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const productionCompaniesList = movieDetails.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginRight: 30,
                marginTop: 10,
              }}
            />
          )}
        </li>
      )
  );

  // Calculate rounded popularity percentage
  const roundedPopularity = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <Link to={backLinkHref.current}>
        <Button />
      </Link>
      <Container backdrop={movieDetails.backdrop_path}>
        <Description>
          <h1>{movieDetails.title}</h1>
          <h4>User score: {roundedPopularity}%</h4>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
          {productionCompaniesList[0] !== null &&
            productionCompaniesList.length > 0 && (
              <>
                <h2>Production companies</h2>
                <ProdCompany>{productionCompaniesList}</ProdCompany>
              </>
            )}
        </Description>
        <ImageContainer>
          <Image
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `${noimage}`
            }
            alt={movieDetails.title}
          />
        </ImageContainer>
      </Container>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
