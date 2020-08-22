import { types } from "../types/types";
import { db, firebase } from "../libs/firebase";
import { getDocumentReference } from "../components/main/expenses/get-document-reference";

export const setBudgetFirebase = async (budget, uid) => {
  try {
    const resp = await db
      .collection(uid)
      .doc("budgets")
      .collection("budget")
      .add(budget);

    budget.id = resp.id;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentBudgetWithFirebase = async (current, dispatch) => {
  const currentBudget = await current;

  if (currentBudget) {
    dispatch(actionSetBudget(currentBudget));
  }
};

export const deleteBudgetFromFirebase = async (docID, userID, dispatch) => {
  try {
    await db
      .collection(userID)
      .doc("budgets")
      .collection("budget")
      .doc(docID)
      .delete();

    dispatch(actionDeleteCurrentBudget());
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const setSpendingFirebase = async (expense, dispatch, userID) => {
  const { budgetID } = expense;
  const expenseRef = db
    .collection(userID)
    .doc("budgets")
    .collection("budget")
    .doc(budgetID);

  try {
    await expenseRef.update({
      expenses: firebase.firestore.FieldValue.arrayUnion(expense),
    });

    dispatch({
      type: types.setExpenseBudget,
      payload: expense,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllExpensesInBudget = async (userID, budgetID, dispatch) => {
  if (budgetID) {
    const docRef = db
      .collection(userID)
      .doc("budgets")
      .collection("budget")
      .doc(budgetID);

    const resp = await docRef.get();
    if (resp.data()) {
      const { expenses } = resp.data();
      dispatch({
        type: types.setAllExpensesInBudget,
        payload: expenses,
      });
    }
  }
};

export async function deleteExpenseFromFirebase(
  id,
  budgetID,
  userID,
  dispatch
) {
  try {
    const docRef = db
      .collection(userID)
      .doc("budgets")
      .collection("budget")
      .doc(budgetID);

    const ref = await docRef.get();
    const arrayExpenses = ref.data().expenses;

    await docRef.update({
      expenses: arrayExpenses.filter((expense) => expense.id !== id),
    });

    dispatch({
      type: types.deleteExpense,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function addCostExpenseToSumFirebase(uid, docID, dispatch) {
  const docRef = await getDocumentReference(uid, docID);
  if (docRef.error) {
    return console.log(docRef.message);
  }
  const docData = await docRef.get();

  if (!docData.data()?.expenses) {
    return null
  }
  const listCost = docData.data().expenses;
  const listCostExpenses = listCost.map((expense) => expense.cost);
  
  dispatch({
    type: types.setCostsToList,
    payload: listCostExpenses
  });
}

const actionSetBudget = (budget) => ({
  type: types.setBudget,
  payload: budget,
});

const actionDeleteCurrentBudget = () => ({
  type: types.deleteCurrentBudget,
});

export const actionDeductMoneyFromBudget = (cost) => ({
  type: types.deductMoneyFromBudget,
  payload: Number(cost)
});

export const actionDeductMoneyFromAllExpense = (costExpenses) => ({
  type: types.deductMoneyFromAllExpenses,
  payload: costExpenses
});