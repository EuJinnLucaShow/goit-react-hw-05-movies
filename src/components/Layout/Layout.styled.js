import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';

import background from '../images/background.jpeg';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;

  &:before {
    content: '';
    background-image: linear-gradient(
        rgba(106, 191, 235, 0),
        rgba(106, 191, 235, 1)
      ),
      url(${background});
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.6;
    filter: blur(1px);
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
  font-size: 30px;
  color: #064e8a;
  margin: 0;
  margin-left: 10px;
`;

export const Links = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #064e8a;
  }
`;

export const Footer = styled.footer`
  /* border-top: 1px solid #ececec; */
`;

export const Text = styled.p`
  text-align: center;
  padding: 20px 0;
  margin: 0;
`;

export const IconLogo = styled(SiThemoviedatabase)`
  width: 30px;
  height: 30px;
  position: relative;
  right: 6px;
  top: 5px;
  z-index: 1;
  opacity: 0.7;
`;
