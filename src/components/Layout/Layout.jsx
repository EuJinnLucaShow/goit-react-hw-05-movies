import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, Links, Footer, Text } from './Layout.styled';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <span role="img" aria-label="computer icon">
              🎞️
            </span>
            Movie Search
          </Logo>
          <nav>
            <Links to="/" end>
              Home
            </Links>
            <Links to="/movies">Movie</Links>
          </nav>
        </Header>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
        </Footer>
      </Container>
    </>
  );
};

export { Layout };