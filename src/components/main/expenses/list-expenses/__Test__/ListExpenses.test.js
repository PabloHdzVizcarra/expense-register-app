import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListExpenses } from '../ListExpenses';
import { ExpensesProvider, ExpensesStateContext } from '../../../../../context/expenses-context';
import * as Component from '../../expense/Expense';
import userEvent from '@testing-library/user-event';

describe('Test in <ListExpenses /> component', () => {
  const listExpenses = [
    {
      budgetID: '123456',
      category: 'comida',
      cost: 100,
      id: '123asd',
      name: 'pizza',
      time: 'Sat Jul 17 2021 18:44:12 GMT-0500 (hora de verano central)',
      userID: '1649'
    }
  ];
  const setIsOpen = jest.fn();
  function renderTest(authContext = {}, expensesContext = {}) {
    return render(
      <ExpensesProvider>
        <ExpensesStateContext.Provider value={expensesContext}>
          <ListExpenses 
            listExpenses={listExpenses}
            setIsOpen={setIsOpen}
          />
        </ExpensesStateContext.Provider>
      </ExpensesProvider>
    );
  }

  test('if the component has no expenses, the button to add expenses must be shown', () => {
    render(<ListExpenses
      listExpenses={[]}
      setIsOpen={jest.fn()}
    />);
    expect(screen.getByRole('button', { name: 'Agregar gasto' }));
  });

  test('if the component has expenses, these must be shown on the screen', () => {
    const spyExpense = jest.spyOn(Component, 'Expense');
    renderTest();
    expect(screen.getByRole('button', { name: 'Agregar gasto' }));
    expect(spyExpense).toHaveBeenCalled();
  });

  test('when you click on the add expense button, you must call the setIsOpen function', () => {
    renderTest();
    userEvent.click(screen.getByRole('button', { name: 'Agregar gasto' }));
    expect(setIsOpen).toHaveBeenCalled();
  });
  
  
})
