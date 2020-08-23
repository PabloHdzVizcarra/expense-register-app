import React, { useState, useEffect } from "react";
import { LayoutContainer } from "./expense-styles";
import { ExpenseForm } from "./form-expenses/ExpenseForm";
import { ListExpenses } from "./list-expenses/ListExpenses";
import { useExpenses } from "../../../context/expenses-context";
import { useAuthState } from "../../../context/auth-context";
import { createExpense } from "./form-expenses/create-expense";
import { useForm } from "../../../hooks/useForm";
import {
  setSpendingFirebase,
  getAllExpensesInBudget,
} from "../../../actions/expense-actions";

export const Expenses = () => {
  const [
    { currentBudget, expenses },
    dispatchExpense,
  ] = useExpenses();
  const {
    activeUserData: { uid },
  } = useAuthState();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValues, handleInputChange, reset] = useForm({
    name: "",
    category: "",
    cost: "",
  });
  useEffect(() => {
    if (currentBudget.expenses?.length === 0) {
      getAllExpensesInBudget(uid, currentBudget.id, dispatchExpense);
    }
  }, [currentBudget, dispatchExpense, uid]);

  function handleExpenseSubmit(event) {
    event.preventDefault();
    const expense = createExpense(inputValues, currentBudget.id, uid);
    setSpendingFirebase(expense, dispatchExpense, uid);
    setIsOpen(false);
    reset();
  }
  
  if (!currentBudget?.id) {
    return null;
  }

  return (
    <LayoutContainer>
      {!isOpen ? (
        <ListExpenses setIsOpen={setIsOpen} listExpenses={expenses} />
      ) : (
        <ExpenseForm
          setIsOpen={setIsOpen}
          budgetID={currentBudget.id}
          inputValues={inputValues}
          handleInputChange={handleInputChange}
          handleExpenseSubmit={handleExpenseSubmit}
        />
      )}
    </LayoutContainer>
  );
};
