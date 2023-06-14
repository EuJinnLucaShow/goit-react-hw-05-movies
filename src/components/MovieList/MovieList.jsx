import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Item, LinkDetails, LogoIcon } from './MoviesList.styled';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(movie => (
        <Item key={movie.id}>
          <LinkDetails
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            <LogoIcon /> {movie.title}
          </LinkDetails>
        </Item>
      ))}
    </List>
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
