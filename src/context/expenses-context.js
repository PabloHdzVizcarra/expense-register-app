import React from 'react'
import { expensesReducer } from '../reducers/expenses-reducer';

export const ExpensesStateContext = React.createContext();
export const ExpensesDispatchContext = React.createContext();

function ExpensesProvider({ children }) {
  const [state, dispatch] = React.useReducer(expensesReducer, {
    currentBudget: {},
    expenses: [],
    budgetList: [],
    valueOfExpenditure: [],
    currentMoney: 0,
    amountOfExpenditure: 0
  })

  return (
    <ExpensesStateContext.Provider value={state}>
      <ExpensesDispatchContext.Provider value={dispatch}>
        {children}
      </ExpensesDispatchContext.Provider>
    </ExpensesStateContext.Provider>
  )
}

function useExpensesState() {
  const context = React.useContext(ExpensesStateContext);

  if (context === undefined) {
    throw new Error("useAuthState must be used within AuthProvider");
  }

  return context;
}

function useExpensesDispatch() {
  const context = React.useContext(ExpensesDispatchContext);

  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within AuthProvider");
  }

  return context;
}

function useExpenses() {
  return [useExpensesState(), useExpensesDispatch()];
}

export {
  ExpensesProvider,
  useExpensesState,
  useExpensesDispatch,
  useExpenses
};