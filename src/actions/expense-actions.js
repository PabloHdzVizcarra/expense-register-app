import { types } from "../types/types";
import { db } from "../libs/firebase";

export const setBudgetFirebase = async (budget, uid) => {

  try {
    const resp = await db
      .collection(uid)
      .doc("budgets")
      .collection("budget")
      .add(budget);
    
    budget.id = resp.id;

    return budget;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getCurrentBudgetWithFirebase = async (current, dispatch) => {
  const currentBudget = await current;
  dispatch(actionSetBudget(currentBudget));
}


const actionSetBudget = (budget) => ({
  type: types.setBudget,
  payload: budget
});