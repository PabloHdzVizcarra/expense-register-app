import React from "react";
import { Nav, MainTitle, ButtonDelete } from "./styles";
import { firebaseSignOut } from "./firebase-sign-out";
import { useAuthDispatch } from "../../context/auth-context";

export const NavBar = () => {
  const dispatch = useAuthDispatch();

  async function handleSignOut() {
    const result = await firebaseSignOut();
    if (result) {
      dispatch({
        activeUserData: {},
        isActive: false,
      });
    }
  }

  return (
    <Nav>
      <MainTitle>Tus Gastos</MainTitle>
      <ButtonDelete onClick={handleSignOut}>Cerrar sesion</ButtonDelete>
    </Nav>
  );
};
