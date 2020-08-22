import React, { useEffect } from "react";
import { QuoteContainer } from "./Styles";
import { useSetQuote } from "../../../hooks/useSetQuote";
import { useAuthState } from "../../../context/auth-context";
import { useExpenses } from "../../../context/expenses-context";
import {
  setBudgetFirebase,
  getCurrentBudgetWithFirebase,
  deleteBudgetFromFirebase,
  actionDeductMoneyFromAllExpense,
} from "../../../actions/expense-actions";
import { createBudget } from "./create-budget";
import { ShowBudget } from "./show-budget/ShowBudget";
import { getBudgetFromFirebase } from "./get-budget-firebase";
import { FormBudget } from "./form-budget/FormBudget";
import { AddBudget } from "./add-budget/AddBudget";

export const Budget = () => {
  const [{
    currentBudget,
    currentMoney,
    valueOfExpenditure
  }, dispatchExpense] = useExpenses();
  const { activeUserData: {uid, displayName} } = useAuthState();

  const [
    money,
    setValue,
    handleSetMoney,
    isOpenInput,
    setIsOpenInput,
    value,
  ] = useSetQuote();

  useEffect(() => {
    getCurrentBudgetWithFirebase(getBudgetFromFirebase(uid), dispatchExpense);
    if (money !== 0) {
      const budget = createBudget(money, displayName);
      setBudgetFirebase(budget, uid);
    }

  // eslint-disable-next-line
  }, [money]);

  useEffect(() => {
    if (valueOfExpenditure.length !== 0) {
      dispatchExpense(actionDeductMoneyFromAllExpense(valueOfExpenditure));
      //deductMoneyFromAllExpenses(valueOfExpenditure, currentMoney, dispatchExpense);
    }
   // eslint-disable-next-line
  }, [valueOfExpenditure]);

  function handleDeleteBudget() {
    const { id } = currentBudget;
    deleteBudgetFromFirebase(id, uid, dispatchExpense);
  }

  return (
    <QuoteContainer>
      {currentBudget?.money ? (
        <ShowBudget
          currentBudget={currentBudget}
          userID={uid}
          handleDeleteBudget={handleDeleteBudget}
          currentMoney={currentMoney}
        />
      ) : (
        <AddBudget setIsOpenInput={setIsOpenInput} />
      )}
      {isOpenInput ? (
        <FormBudget
          handleSetMoney={handleSetMoney}
          setValue={setValue}
          value={value}
        />
      ) : null}
    </QuoteContainer>
  );
};
