import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExpenseForm } from '../ExpenseForm';

describe('Test in <ExpenseForm /> component', () => {

  test('should be render correctly', () => {

    render(<ExpenseForm 
      handleExpenseSubmit={jest.fn()}
      handleInputChange={jest.fn()}
      inputValues={{
        category: '',
        cost: '',
        name: ''
      }}
      setIsOpen={jest.fn()}
    />);
    expect(screen.getByText(/agregar/i)).toBeInTheDocument();
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getByText(/categoria/i)).toBeInTheDocument();
  })
  
  
})
