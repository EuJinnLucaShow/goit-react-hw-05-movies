import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
`;

export const Item = styled.li`
  margin-top: 20px;
  img {
    border-radius: 5px;
  }
`;
