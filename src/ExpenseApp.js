import React from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './context/auth-context';

export const ExpenseApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
