import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
        : `url('https://images.wallpaperscraft.com/image/single/wall_structure_polygon_866156_3840x2400.jpg')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #2aaaeb;
  }
`;

Container.propTypes = {
  backdrop: propTypes.string,
};
