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
        currentBudget: action.payload
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}