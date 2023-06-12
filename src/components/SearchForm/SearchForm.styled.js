import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
    font-size: 1rem;
    padding: 8px 32px 8px 8px;
    width: 250px;
    border-radius: 4px;
    border: none;
    border-bottom: 2px solid #2aaaeb;
    outline: none;
  }
`;

export const Icon = styled(FcSearch)`
  width: 25px;
  height: 25px;
  position: relative;
  right: 56px;
  z-index: 1;
  opacity: 0.7;
`;
