import { types } from "../types/types"

/*
  const state = {
    currentBudget: {},
    expenses: [],
    budgetList: [],
  }
*/

export function expensesReducer(state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case types.setBudget:
      return {
        ...state,
        currentBudget: action.payload,
        currentMoney: action.payload.money
      }
    case types.deleteCurrentBudget:
      return {
        ...state,
        currentBudget: {}
      }
    case types.setExpenseBudget:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        currentMoney: state.currentMoney - action.payload.cost
      }
    case types.setAllExpensesInBudget:
      return {
        ...state,
        expenses: action.payload,
        currentMoney: action.payload
          .map((expense) => expense.cost)
          .reduce((accu, current) => accu - current, state.currentMoney)
      }
    case types.deleteExpense:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
        currentMoney: state.currentMoney + action.payload.cost
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}