import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { firebaseLoginWithGoogle } from '../../helpers/firebase-login-google';
import { useAuthDispatch } from '../../context/auth-context';

export const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: grid;
    gap: 1rem;
  }
`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OtherButtons = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

export const LoginPage = () => {
  const setUser = useAuthDispatch();
  const [errorForm, setErrorForm] = useState({
    error: false,
    message: "",
  });

  const [inputValues, handleInputChange] = useForm({
    email: 'correo@correo.com',
    password: '123456',
  });
  
  const { email, password } = inputValues;

  const handleUserLogin = (event) => {
    event.preventDefault();
    console.log(inputValues);
  }

  const handleLoginWithGoogle = (event) => {
    event.preventDefault();
    console.log('Login firebase');

    firebaseLoginWithGoogle(setUser, setErrorForm)

  }

  return (
    <FormContainer>
      <form>
        {(errorForm.error)
          ? <p>{errorForm.message}</p> 
          : null
        }
        <p>Para comenzar puedes iniciar sesion con tu cuenta de google o registrarte</p>
        <InputEmail>
          <label>Correo Electronico</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </InputEmail>
        <InputPassword>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInputChange}
          />
        </InputPassword>
        <OtherButtons>
          <button
            onClick={handleUserLogin}
          >
            Iniciar Sesion
          </button>
          <Link to="/home/register">
            Registrarte
          </Link>
          <button
            onClick={handleLoginWithGoogle}
          >
            Google
          </button>
        </OtherButtons>
      </form>
    </FormContainer>
  )
}
