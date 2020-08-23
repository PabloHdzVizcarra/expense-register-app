import React from 'react';
import '@testing-library/jest-dom';
import { HomePage } from '../HomePage';
import { screen, render } from '@testing-library/react';
import { AuthProvider } from '../../../context/auth-context';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <HomePage />', () => {

  const Wrapper = ({ children }) => {
    return (
      <AuthProvider>
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
    screen.debug();
  
  })
})

