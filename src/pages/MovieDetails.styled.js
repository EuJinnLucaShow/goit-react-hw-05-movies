import styled from 'styled-components';
// Створення стилізованих компонентів
export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 30px;
`;

export const Image = styled.img`
  /* max-height: 50px;
  max-width: 200px; */
`;

export const Description = styled.div`
  flex: 1 1 auto;
`;

export const ProdCompany = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10px;
`;
