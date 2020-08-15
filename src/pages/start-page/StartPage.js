import React from 'react';
import home from '../../assets/home.svg';
import styled from 'styled-components';
import { laurelGreen, rigleGreen, ebony } from '../../styles/_colors';
import {  Link } from 'react-router-dom';
import { respondTo } from '../../styles/_respondTo';

const Container = styled.div`
  display: grid;
  gap: 10px;
  min-height: 100vh;
  padding: 0 1rem;
  grid-template-rows: min-content;
  background-color: ${laurelGreen};
  color: ${rigleGreen};
  font-size: 1.3rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  
  
  a {
    display: flex;
    background-color: ${ebony};
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 5px;
    color: ${laurelGreen};
    padding: 8px;
  }

  ${respondTo.md`
    grid-template-columns: 1fr 1fr;
  `}
  
`;

const TextMain = styled.div`
  text-align: center;
  height: min-content;

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

const TextSecondary = styled.div`
  text-align: center;
  height: min-content;

  ${respondTo.md`
    grid-row: 2/3;
    align-self: self-end;
  `}
`;

const Image = styled.div`
  justify-self: center;

  img {
    max-width: 100%;
  }

  ${respondTo.md`
    grid-row: 2/4;
    align-self: center;
  `}
`;

const ContainerButton = styled.div`
  transform: 300ms, background-color ease;

  ${respondTo.md`
    grid-row: 3/4;
    justify-self: center;

    a {
      width: 100%;
      transition: 300ms ease background-color;
    }

    a:hover {
      background-color: ${rigleGreen};
    }
  `}
`; 

export const StartPage = () => {
  return (
    <Container>
      <TextMain>
        <p>Bienvenido a la aplicacion @Tu Quincena</p>
      </TextMain>
      <TextSecondary>
        <p>En esta grandiosa aplicacion podras registrarte, y admnistraras tus gastos de una manera sencilla</p>
      </TextSecondary>
      <Image>
        <img src={home} alt=""/>
      </Image>
      <ContainerButton>
        <Link to="/public/login">
          Comenzar
        </Link>
      </ContainerButton>
    </Container>
  )
}
