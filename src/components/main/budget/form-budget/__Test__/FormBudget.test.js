import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, AuthStateContext } from '../../../../../context/auth-context';
import { ExpensesProvider, ExpensesStateContext } from '../../../../../context/expenses-context';
import { MemoryRouter } from 'react-router-dom';
import { FormBudget } from '../FormBudget';
import userEvent from '@testing-library/user-event';

describe('Test in <FormBudget /> component', () => {

  const handleSetMoney = jest.fn();
  const handleInputChange = jest.fn();
  const money = '';

  function renderTest(authContext = {}, expensesContext = {}) {
    return render(
      <AuthProvider>
        <ExpensesProvider>
          <AuthStateContext.Provider value={authContext}>
            <ExpensesStateContext.Provider value={expensesContext}>
              <MemoryRouter>
                <FormBudget
                  handleInputChange={handleInputChange}
                  handleSetMoney={handleSetMoney}
                  money={money}
                />
              </MemoryRouter>
            </ExpensesStateContext.Provider>
          </AuthStateContext.Provider>
        </ExpensesProvider>
      </AuthProvider>
    );
  };
  
  test('the component must be correctly render', () => {
    renderTest();
    expect(screen.getByRole('button', { name: /Agregar/ })).toBeInTheDocument();
  });

  test('if text is entered in the form entry, the handleInputChange function should be called', () => {
    renderTest();
    userEvent.type(screen.getByPlaceholderText(/Ingresa tu presupuesto/), '100');
    expect(handleInputChange).toHaveBeenCalledTimes(3);
  });

  test('when you submit the form, you should call the handleSetMoney function', () => {
    renderTest();
    fireEvent.submit(screen.getByRole('button', { name: /Agregar/ }));
    expect(handleSetMoney).toHaveBeenCalled();
  });

});
