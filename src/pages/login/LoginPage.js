import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { firebaseLoginWithGoogle } from "../../helpers/firebase-login-google";
import { firebaseSignInWithEmailAndPassword } from "./helper-firebase-signIn";
import {
  ContainLoginPage,
  FormContainer,
  OtherButtons,
  InputData,
  Paragraph,
  ErrorParagraph,
  Button,
} from "./loginPageStyles";

export const LoginPage = () => {
  const [errorForm, setErrorForm] = useState({
    error: false,
    message: "",
  });

  const [inputValues, handleInputChange] = useForm({
    email: "correo@correo.com",
    password: "123456",
  });

  useEffect(() => {
    return () => {
      setErrorForm({
        error: false,
        message: "",
      });
    };
  }, []);

  const { email, password } = inputValues;

  const handleUserLogin = (event) => {
    event.preventDefault();
    firebaseSignInWithEmailAndPassword(email, password, setErrorForm);
  };

  const handleLoginWithGoogle = async (event) => {
    event.preventDefault();

    firebaseLoginWithGoogle(setErrorForm);
    console.log("Login firebase");
  };

  return (
    <ContainLoginPage>
      {errorForm.error ? (
        <ErrorParagraph className="animate__animated animate__fadeIn">
          {errorForm.message}
        </ErrorParagraph>
      ) : null}
      <FormContainer>
        <Paragraph>
          {" "}
          Para comenzar puedes iniciar sesion con tu cuenta de google o
          registrarte
        </Paragraph>
        <InputData>
          <label>Correo Electronico</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </InputData>
        <InputData>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInputChange}
          />
        </InputData>
        <OtherButtons>
          <Button onClick={handleUserLogin}>Iniciar Sesion</Button>
          <Button onClick={handleLoginWithGoogle}>Google</Button>
          <Link to="/public/register">Registrarte</Link>
        </OtherButtons>
      </FormContainer>
    </ContainLoginPage>
  );
};
