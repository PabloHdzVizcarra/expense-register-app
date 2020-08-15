import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { validateUser } from "../../helpers/validate-user";
import { firebaseUserRegister } from "../../helpers/firebase-user-register";
import { useAuthDispatch } from "../../context/auth-context";
import { FormContainer, InputUser, InputEmail, InputPassword, OtherButtons } from "./RegisterPageStyles";

export const RegisterPage = () => {
  const setUser = useAuthDispatch();
  const [errorForm, setErrorForm] = useState({
    error: false,
    message: "",
  });

  const [inputValues, handleInputChange, reset] = useForm({
    userName: "pablo",
    email: "correo@correo.com",
    password: "123456",
    confirmPassword: "123456",
  });

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

    const user = await firebaseUserRegister(inputValues, setErrorForm);

    if (user) {
      const { displayName, email, emailVerified, uid } = user;
      setUser({
        isActive: true,
        activeUserData: {
          displayName,
          email,
          emailVerified,
          uid,
        },
      });
      console.log('USUARIO CREADO CON EXITO');
    }

    reset();
  };

  return (
    <FormContainer onSubmit={handleUserRegister}>
      <form>
        {errorForm.error && <p>{errorForm.message}</p>}
        <p>Para comenzar puedes iniciar sesion o registrarte</p>
        <InputUser>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            autoComplete="none"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
        </InputUser>
        <InputEmail>
          <label>Correo Electronico</label>
          <input
            type="email"
            autoComplete="none"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </InputEmail>
        <InputPassword>
          <label>Contraseña</label>
          <input
            type="password"
            autoComplete="none"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </InputPassword>
        <InputPassword>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </InputPassword>
        <OtherButtons>
          <button>Crear cuenta</button>
          <Link to="/login">Inicia sesion</Link>
        </OtherButtons>
      </form>
    </FormContainer>
  );
};
