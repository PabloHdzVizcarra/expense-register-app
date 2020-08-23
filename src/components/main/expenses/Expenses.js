import React, { useState } from "react";
import { LayoutContainer } from "./expense-styles";
import { ExpenseForm } from "./form-expenses/ExpenseForm";
import { ListExpenses } from "./list-expenses/ListExpenses";
import { useExpenses } from "../../../context/expenses-context";
import { useAuthState } from "../../../context/auth-context";
import { createExpense } from "./form-expenses/create-expense";
import { useForm } from "../../../hooks/useForm";
import { setSpendingFirebase } from "../../../actions/expense-actions";
import { validateExpenseForm } from "./validate-expense-form";
import { ErrorMessage } from "../../errorMessage/ErrorMessage";

export const Expenses = () => {
  const [{ currentBudget, expenses }, dispatchExpense] = useExpenses();
  const {
    activeUserData: { uid },
  } = useAuthState();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValues, handleInputChange, reset] = useForm({
    name: "",
    category: "",
    cost: "",
  });
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  function handleExpenseSubmit(event) {
    event.preventDefault();
    const [ error, message] = validateExpenseForm(inputValues);
    if (error) {
      return setError({
        error: true,
        message
      })
    }

    setError({
      error: false,
      message: ''
    })
    
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
      {error.error ? (
        <ErrorMessage message={error.message} />
      ): (
        null
      )}
    </LayoutContainer>
  );
};
