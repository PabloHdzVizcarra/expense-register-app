import React from 'react';
import home from './images/image.svg';
import {  Link } from 'react-router-dom';
import { Container, TextMain, TextSecondary, Image, ContainerButton } from './styles';


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
