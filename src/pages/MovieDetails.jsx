import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Description,
  ImageContainer,
  Image,
  ProdCompany,
} from './MovieDetails.styled';
import noimage from '../images/noimage.svg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    // Отримання деталів фільму з API
    const params = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/movie/${movieId}`, params);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
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
