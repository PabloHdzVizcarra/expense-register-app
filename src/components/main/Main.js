import React from 'react';
import { Budget } from './budget/Budget';
import { MainContainer, GridContainer } from './MainStyles';
import { Expenses } from './expenses/Expenses';
import { ExpensesProvider } from '../../context/expenses-context';


export const Main = () => {
  return (
    <ExpensesProvider>
      <MainContainer>
        <GridContainer>
          <Budget />
          <Expenses />
        </GridContainer>
      </MainContainer>
    </ExpensesProvider>
  )
}
