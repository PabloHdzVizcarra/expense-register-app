import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, cleanup, waitForElementToBeRemoved } from '@testing-library/react'
import { Budget } from '../Budget'
import { AuthStateContext } from '../../../../context/auth-context'
import { ExpensesProvider, ExpensesStateContext } from '../../../../context/expenses-context'
import userEvent from '@testing-library/user-event';

describe('Test in <Budget />', () => {

  const Wrapper = ({ children }) => {
    return (
      <ExpensesProvider>
        <AuthStateContext.Provider value={{
          isActive: true,
          activeUserData: {
            displayName: 'Pablo',
            email: "correo@corre.com",
            emailVerified: false,
            uid: '123a'
          }

        }}>
          <ExpensesStateContext.Provider value={{
            budgetList: [],
            currentBudget: {},
            expenses: []
          }}>
            
          </ExpensesStateContext.Provider>
          {children}
        </AuthStateContext.Provider>
      </ExpensesProvider>
    )
  }
  
  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  }

  test('the component should be rendered correctly', () => {
    customRender(<Budget />);
    cleanup();
  })

  test('should change with click', () => {
    customRender(<Budget />);
    const buton = screen.getByText('attach_money');
    fireEvent.click(buton);
    expect(screen.getByText('Agregar')).toBeInTheDocument();
    screen.debug();
    cleanup();
  })

  test('should show the budget', () => {
    customRender(<Budget />);
    const buton = screen.getByText('attach_money');
    fireEvent.click(buton);
    const input = screen.getByPlaceholderText('Ingresa tu presupuesto');
    //fireEvent.change(input, { target: { value: '3000' } });
    userEvent.type(input, '1500');
    expect(input.value).toBe('1500');
  })
  
  test('should show currentMoney', () => {

    const Wrapper = ({ children }) => {
      return (
        <ExpensesProvider>
          <AuthStateContext.Provider value={{
            isActive: true,
            activeUserData: {
              displayName: 'Pablo',
              email: "correo@corre.com",
              emailVerified: false,
              uid: '123a'
            }
  
          }}>
            <ExpensesStateContext.Provider value={{
              budgetList: [],
              currentBudget: {},
              expenses: [],
              currentMoney: 5000
            }}>
              
            </ExpensesStateContext.Provider>
            {children}
          </AuthStateContext.Provider>
        </ExpensesProvider>
      )
    }
    
    const customRender = (ui, options) => {
      render(ui, { wrapper: Wrapper, ...options });
    }

    customRender(<Budget />);
    screen.debug();
    
  })
  
  
  
})
