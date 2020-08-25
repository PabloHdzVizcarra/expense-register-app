import React from 'react';
import '@testing-library/jest-dom';
import { HomePage } from '../HomePage';
import { render } from '@testing-library/react';
import { AuthProvider, AuthStateContext } from '../../../context/auth-context';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <HomePage />', () => {

  const Wrapper = ({ children }) => {
    return (
      <AuthProvider>
        <AuthStateContext.Provider
          value={{
            isActive: true,
            activeUserData: {
              displayName: 'Pablo',
              email: 'testing@correo.com',
              emailVerified: false,
              uid: '123asd'
            }
          }}
        >
        </AuthStateContext.Provider>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </AuthProvider>
    );
  };

  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  };

  test('should render correctly <HomePage />', () => {
    customRender(<HomePage />);
  
  });


});

