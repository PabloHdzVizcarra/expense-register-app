import React from 'react';
import "@testing-library/jest-dom";
import { AuthProvider, AuthStateContext } from '../../../context/auth-context';
import { render, screen, fireEvent, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { LoginPage } from '../LoginPage';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('Test in <LoginPage />', () => {
  

  const module = require('../helper-firebase-signIn');
  const spyFunction = jest.spyOn(module, 'firebaseSignInWithEmailAndPassword');
  

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
      titillium: ['Titillium Web', "sans-serif"],
    }
  }

  const Wrapper = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <AuthStateContext.Provider value={{ 
          }}>
            <MemoryRouter>

          {children}
            </MemoryRouter>
        </AuthStateContext.Provider>
      </AuthProvider>
      </ThemeProvider>
    )
  }
  
  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  }
  
  test('should render correctly ', () => {
    
    customRender(<LoginPage />);
    const registerButton = screen.getByText(/Contraseña/i);
    expect(registerButton).toBeTruthy();
  });

  test('the component must display error messages if an invalid user is entered', async () => {
    const promise = Promise.resolve()
    
    customRender(<LoginPage />);
    const emailInput = screen.getAllByDisplayValue('');
    const buttonLogIn = screen.getByText(/Iniciar Sesion/);
    
    userEvent.type(emailInput[0], 'testing@email.com');
    userEvent.click(buttonLogIn);
    await act(() => promise);

    const errorMessage = screen.getByTestId('error-message');
    expect(spyFunction).toHaveBeenCalled();
    expect(errorMessage).toBeInTheDocument();
  });

  test('the component must display error messages if an invalid password is entered', async () => {
    customRender(<LoginPage />);
    const input = screen.getAllByDisplayValue('');
    const buttonLogin = screen.getByText(/Iniciar Sesion/);
    
    userEvent.type(input[0], 'correo@correo.com');
    //userEvent.click(buttonLogin);
    fireEvent.click(buttonLogin);
    await waitForElement(
      () => screen.getByTestId('error-message'),
      { screen }
    );

    const errorMessage = screen.getByTestId('error-message');
    expect(spyFunction).toHaveBeenCalled();
    expect(errorMessage).toBeInTheDocument();
  });
  // test('you must call the registry with google when you click', async () => {
  //   const moduleGoogle = require("../../../helpers/firebase-login-google");
  //   const spyGoogleLogin = jest.spyOn(moduleGoogle, 'firebaseLoginWithGoogle');

  //   customRender(<LoginPage />);
  //   const googleButon = screen.getByText('Google');
  //   userEvent.click(googleButon);
  //   expect(spyGoogleLogin).toHaveBeenCalled();
  // });

})
