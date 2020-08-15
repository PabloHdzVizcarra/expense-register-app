import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { validateUser } from "../../helpers/validate-user";
import { firebaseUserRegister } from "../../helpers/firebase-user-register";
import { FormContainer, InputData, OtherButtons, Button, ContainLoginPage, ErrorParagraph, Paragraph } from "../login/loginPageStyles";


export const RegisterPage = () => {
  const [errorForm, setErrorForm] = useState({
    error: false,
    message: "",
  });

  const [inputValues, handleInputChange, reset] = useForm({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    
    return () => {
      setErrorForm({
        error: false,
        message: "",
      });
    }
  }, [])

  const { userName, email, password, confirmPassword } = inputValues;

  const handleUserRegister = async (event) => {
    event.preventDefault();
    const [error, message] = validateUser(inputValues);

    if (error) {
      return setErrorForm({
        error: true,
        message: message,
      });
    }

    setErrorForm({
      error: false,
      message: "",
    });

    firebaseUserRegister(inputValues, setErrorForm);
    reset();
  };

  return (
    <ContainLoginPage onSubmit={handleUserRegister}>
      {(errorForm.error) ? <ErrorParagraph>{errorForm.message}</ErrorParagraph> : null}
      <FormContainer>
        <Paragraph>Para comenzar puedes iniciar sesion o registrarte</Paragraph>
        <InputData>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            autoComplete="none"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
        </InputData>
        <InputData>
          <label>Correo Electronico</label>
          <input
            type="email"
            autoComplete="none"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </InputData>
        <InputData>
          <label>Contraseña</label>
          <input
            type="password"
            autoComplete="none"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </InputData>
        <InputData>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </InputData>
        <OtherButtons>
          <Button>Crear cuenta</Button>
          <Link to="/public/login">Inicia sesion</Link>
        </OtherButtons>
      </FormContainer>
    </ContainLoginPage>
  );
};
