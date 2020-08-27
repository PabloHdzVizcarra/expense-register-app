import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';

export const Container = styled.div`
  display: grid;
  gap: 10px;
  min-height: 100vh;
  padding: 0 1rem;
  grid-template-rows: min-content;
  color: #486b0a;
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-family: 'Titillium Web', sans-serif;
  
  
  a {
    display: flex;
    background-color: #4527A0;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #fff;
    padding: 8px;
    font-family: 'Titillium Web', sans-serif;

    transition: 300ms ease background-color;
    &:hover {
      background-color: hsl(255 61% 30% / 1);
    }
  }

  ${respondTo.md`
    grid-template-columns: 1fr 1fr;
  `}
  
`;

export const TextMain = styled.div`
  text-align: center;
  height: min-content;
  font-weight: bold;

  ${respondTo.md`
    grid-column: 1/3;
    font-size: 2rem;
    font-weight: 600;
    color: #504B3A;
  `}

  ${respondTo.lg`
    p {
      margin: 1rem 0;
    }
  `}
`;

export const TextSecondary = styled.div`
  text-align: center;
  height: min-content;
  font-weight: 500;

  ${respondTo.md`
    grid-row: 2/3;
    align-self: self-end;
  `}
`;

export const Image = styled.div`
  justify-self: center;

  img {
    max-width: 100%;
  }

  ${respondTo.md`
    grid-row: 2/4;
    align-self: center;
  `}
`;

export const ContainerButton = styled.div`
  transform: 300ms, background-color ease;

  ${respondTo.md`
    grid-row: 3/4;
    justify-self: center;

    a {
      width: 100%;
      transition: 300ms ease background-color;
    }

    a:hover {
      /* background-color: ; */
    }
  `}
`; 