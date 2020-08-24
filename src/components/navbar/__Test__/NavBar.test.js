import React from "react";
import "@testing-library/jest-dom";
import { AuthProvider, AuthStateContext } from "../../../context/auth-context";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitForElement } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { NavBar } from "../NavBar";
import { ExpensesProvider } from "../../../context/expenses-context";

describe("Test in <NavBar />", () => {
  const module = require('../firebase-sign-out');
  const spyFunction = jest.spyOn(module, 'firebaseSignOut');

  function renderTest() {
    return render(
      <AuthProvider>
        <ExpensesProvider>
        <AuthStateContext.Provider
          value={{
            isActive: true,
            activeUserData: {
              displayName: "Pablo",
              email: "testing@correo.com",
              emailVerified: false,
              uid: "123asd",
            },
          }}
        ></AuthStateContext.Provider>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
        </ExpensesProvider>
      </AuthProvider>
    );
  }
  
  test("should render correctly", () => {
    renderTest();
    const logOutButon = screen.getByText(/Cerrar sesion/);
    expect(logOutButon).toBeInTheDocument();
  });
  
  test("when you press the close session button, you must close the session", async () => {
    
    const { getByText } = renderTest();
    const logOutButon = getByText(/Cerrar sesion/);
    userEvent.click(logOutButon);
    await waitForElement(() =>
      logOutButon,
      {screen}
    )
    
    expect(spyFunction).toHaveBeenCalledTimes(1);
  });

});
