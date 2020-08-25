import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ShowBudget } from '../ShowBudget';
import userEvent from '@testing-library/user-event';

describe('Test in <ShowBudget /> component', () => {
  const handleDeleteBudget = jest.fn();
  const currentMoney = 1000;

  test('the component must be rendered correctly', () => {
    render(<ShowBudget
      handleDeleteBudget={handleDeleteBudget}
      currentMoney={currentMoney}
    />);
    expect(screen.getByTestId('current-money')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Eliminar/i })).toBeInTheDocument();
  });

  test('When you click on the Delete budget button, you must call the function handleDeleteBudget', () => {
    render(<ShowBudget
      handleDeleteBudget={handleDeleteBudget}
      currentMoney={currentMoney}
    />);

    userEvent.click(screen.getByText(/Eliminar/i));
    expect(handleDeleteBudget).toHaveBeenCalled();
  });
  
});

