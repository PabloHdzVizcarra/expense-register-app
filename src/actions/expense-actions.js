import { types } from "../types/types";
import { db, firebase } from "../libs/firebase";
import { getDocumentReference } from "../components/main/expenses/get-document-reference";

export const setBudgetFirebase = async (budget, uid, dispatch) => {
  try {
    const resp = await db
      .collection(uid)
      .doc("budgets")
      .collection("budget")
      .add(budget);

    budget.id = resp.id;
    
    dispatch({
      type: types.setBudget,
      payload: budget
    })

  } catch (error) {
    console.log(error);
  }
};

export const getCurrentBudgetWithFirebase = async (current, dispatch) => {
  const currentBudget = await current;
  if (!currentBudget?.expenses) {
    return
  }
  dispatch(actionSetBudget(currentBudget));
  dispatch({
    type: types.setAllExpensesInBudget,
    payload: currentBudget.expenses
  })
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
  if (!budgetID) {
    return 
  }

  const docRef = db
    .collection(userID)
    .doc("budgets")
    .collection("budget")
    .doc(budgetID);

  const resp = await docRef.get();
  const doc = resp.data();
  console.log(doc.expenses);
  // dispatch({
  //   type: types.setAllExpensesInBudget,
  //   payload: expenses,
  // });
    
};

export async function deleteExpenseFromFirebase(
  id,
  budgetID,
  userID,
  dispatch,
  cost
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

    const data = { id, cost };

    dispatch({
      type: types.deleteExpense,
      payload: data,
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
    return console.log('No existe el documento');
  }
  const listCost = docData.data().expenses;
  const listCostExpenses = listCost.map((expense) => expense.cost);
  console.log(listCostExpenses);
  
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