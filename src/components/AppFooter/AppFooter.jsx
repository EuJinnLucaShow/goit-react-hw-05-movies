import React from 'react';
import { Footer, Text } from './AppFooter.styled';

const AppFooter = () => {
  return (
    <Footer>
      <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
    </Footer>
  );
};

export default AppFooter;
