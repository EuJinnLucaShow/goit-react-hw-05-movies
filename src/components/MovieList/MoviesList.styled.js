import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { FaFilm } from 'react-icons/fa';

import placeholder from '../images/placeholder.png';

export const List = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Item = styled.li`
  padding: 5px 12px;
  border-bottom: 1px solid transparent;
  position: relative;
`;

export const LinkDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #064e8a;
  }

  @media screen and (min-width: 768px) {
    &:hover::after,
    &:focus::after {
      content: '';
      background-image: ${props =>
        props.cover
          ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
          : `url(${placeholder})`};

      background-size: cover;
      width: 160px;
      height: 240px;
      display: block;
      border-radius: 4px;
      border: 1px solid rgba(43, 134, 197);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      position: absolute;
      top: -140px;
      left: 400px;
      z-index: 1;
    }
  }
`;

export const LogoIcon = styled(FaFilm)`
  width: 20px;
  height: 20px;
  position: relative;
  right: 6px;
  top: 5px;
  z-index: 1;
  opacity: 0.7;
`;

LinkDetails.propTypes = {
  cover: propTypes.string,
  placeholder: propTypes.string,
};
