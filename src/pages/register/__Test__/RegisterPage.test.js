import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider, AuthStateContext } from "../../../context/auth-context";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitForElement } from "@testing-library/react";
import { RegisterPage } from "../RegisterPage";
import userEvent from "@testing-library/user-event";

describe("Test in <RegisterPage />", () => {
  const module = require("../../../helpers/firebase-user-register");
  const spyfirebaseUserRegister = jest.spyOn(module, "firebaseUserRegister");

  const theme = {
    colors: {
      p: "#1976d2",
      pd: "#004ba0",
      pl: "#63a4ff",
      s: "#ef6c00",
      sd: "#b53d00",
      sl: "#ff9d3f",
    },
    fonts: {
      titillium: ["Titillium Web", "sans-serif"],
    },
  };

  const Wrapper = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AuthStateContext.Provider value={{}}>
            <MemoryRouter>{children}</MemoryRouter>
          </AuthStateContext.Provider>
        </AuthProvider>
      </ThemeProvider>
    );
  };

  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  };

  test("should render correctly", () => {
    customRender(<RegisterPage />);
    const buttonCreateAcount = screen.getByText("Crear cuenta");
    expect(buttonCreateAcount).toBeInTheDocument();
  });

  test("should if you enter less than 4 characters in the name field, the error alert should be displayed", async () => {
    customRender(<RegisterPage />);
    const inputs = screen.getAllByDisplayValue("");
    const inputName = inputs[0];
    const submit = screen.getByText("Crear cuenta");
    userEvent.type(inputName, "Io");
    userEvent.click(submit);

    await waitForElement(() => screen.getByTestId("error-message"), { screen });

    expect(screen.getByText(/nombre de usuario/)).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  test("the error message for an invalid email must appear", async () => {
    customRender(<RegisterPage />);
    const inputs = screen.getAllByDisplayValue("");
    const inputEmail = inputs[1];
    const submit = screen.getByText("Crear cuenta");
    
    userEvent.type(inputs[0], "Stacy");
    userEvent.type(inputEmail, "correo.correo.com");
    userEvent.click(submit);
    await waitForElement(() => screen.getByTestId("error-message"), { screen });

    expect(screen.getByText(/valido/)).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
  test("the error message should appear if the password does not meet the security requirements", async () => {
    customRender(<RegisterPage />);
    const inputs = screen.getAllByDisplayValue("");
    const inputPassword = inputs[2];
    const submit = screen.getByText("Crear cuenta");

    userEvent.type(inputs[0], "Stacy");
    userEvent.type(inputs[1], "testing@email.com");
    userEvent.type(inputPassword, "123");
    userEvent.click(submit);
    await waitForElement(() => screen.getByTestId("error-message"), { screen });

    expect(screen.getByText(/contraseña/)).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  test("the error message should appear if the passwords do not match", async () => {
    customRender(<RegisterPage />);
    const inputs = screen.getAllByDisplayValue("");
    const inputPassword = inputs[2];
    const submit = screen.getByText("Crear cuenta");

    userEvent.type(inputs[0], "Stacy");
    userEvent.type(inputs[1], "testing@email.com");
    userEvent.type(inputPassword, "123456");
    userEvent.type(inputs[3], "12345");
    userEvent.click(submit);
    await waitForElement(() => screen.getByTestId("error-message"), { screen });

    expect(screen.getByText(/contraseñas/)).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
  
  test("if all data is valid, the user must create it correctly", async () => {
    customRender(<RegisterPage />);
    const inputs = screen.getAllByDisplayValue("");
    const submit = screen.getByText("Crear cuenta");

    userEvent.type(inputs[0], "Stacy");
    userEvent.type(inputs[1], "testing@email.com");
    userEvent.type(inputs[2], "123456");
    userEvent.type(inputs[3], "123456");
    userEvent.click(submit);

    expect(spyfirebaseUserRegister).toHaveBeenCalled();
  });
});
