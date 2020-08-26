import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Expense } from '../Expense';
import { ExpensesProvider, ExpensesStateContext } from '../../../../../context/expenses-context';
import userEvent from '@testing-library/user-event';
import * as Actions from '../../../../../actions/expense-actions';


describe('Test in <Expense /> component', () => {
  const budgetID = '123asd';
  const category = 'comida';
  const cost = 100;
  const id = '123';
  const name = 'pizza';
  const time = 'miércoles 26 agosto, 8:22 am';
  const userID = 'rYzQugllcoUmsQIrLsvg1mcNnVI3';

  function renderTest(authContext = {}, expensesContext = {}) {
    return render(
      <ExpensesProvider>
        <ExpensesStateContext.Provider value={expensesContext}>
          <Expense
            budgetID={budgetID}
            category={category}
            cost={cost}
            id={id}
            name={name}
            time={time}
            userID={userID}
          />
        </ExpensesStateContext.Provider>
      </ExpensesProvider>
    );
  }

  test('should render <Expense /> correctly', () => {
    renderTest();
    expect(screen.getByText('pizza').textContent.trim()).toBe(name);
    expect(screen.getByText('comida').textContent.trim()).toBe(category);
  });

  test('if you press the delete button of the expense, it must call the function deleteExpenseFromFirebase to eliminate the expense from the budget', () => {
    const spyDeleteExpenseFromFirebase = jest.spyOn(Actions, 'deleteExpenseFromFirebase');
    renderTest();
    userEvent.click(screen.getByText(/eliminar/i));
    expect(spyDeleteExpenseFromFirebase).toHaveBeenCalled();
  });
  
  
})
