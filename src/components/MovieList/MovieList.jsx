import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
    const location = useLocation();
    
  return (
    <ul>
      {films.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
