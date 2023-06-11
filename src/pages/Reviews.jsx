import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    // Отримання оглядів фільму з API

    const params = {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    };

    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(`movie/${movieId}/reviews?`, params);
        setReviews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Reviews</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
