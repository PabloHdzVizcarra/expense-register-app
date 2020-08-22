import { types } from "../types/types"

/*
  const state = {
    currentBudget: {},
    expenses: [],
    budgetList: [],
  }
*/

export function expensesReducer(state = {}, action) {
  console.log(action);
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
        expenses: [...state.expenses, action.payload]
      }
    case types.setAllExpensesInBudget:
      return {
        ...state,
        expenses: action.payload
      }
    case types.deleteExpense:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      }
    case types.setCostsToList:
      return {
        ...state,
        valueOfExpenditure: action.payload
      }
    case types.deductMoneyFromBudget:
      return {
        ...state,
        currentMoney: state.currentMoney - action.payload,
        valueOfExpenditure: [...state.valueOfExpenditure, action.payload]
      }
    case types.deductMoneyFromAllExpenses:
      return {
        ...state,
        currentMoney: action.payload.reduce((acc, curr) => acc - curr, state.currentMoney)
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}