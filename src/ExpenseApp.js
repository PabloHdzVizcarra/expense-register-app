import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/auth-context';
import { Theme } from './styles/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ExpenseApp = () => {


  return (
    <Theme>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Theme>
  )
}
