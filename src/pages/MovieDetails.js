import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Now showing product with id - {movieId}</div>;
};

export default MovieDetails;
