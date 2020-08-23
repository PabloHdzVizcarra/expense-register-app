import React, { useEffect, useState } from "react";
import { QuoteContainer } from "./Styles";
import { useAuthState } from "../../../context/auth-context";
import { useExpenses } from "../../../context/expenses-context";
import {
  setBudgetFirebase,
  getCurrentBudgetWithFirebase,
  deleteBudgetFromFirebase,
} from "../../../actions/expense-actions";
import { createBudget } from "./create-budget";
import { ShowBudget } from "./show-budget/ShowBudget";
import { getBudgetFromFirebase } from "./get-budget-firebase";
import { FormBudget } from "./form-budget/FormBudget";
import { AddBudget } from "./add-budget/AddBudget";
import { useForm } from "../../../hooks/useForm";

export const Budget = () => {
  const [{
    currentBudget,
    currentMoney,
  }, dispatchExpense] = useExpenses();
  const { activeUserData: { uid, displayName } } = useAuthState();
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [{ money }, handleInputChange, reset] = useForm({
    money: ''
  });

  useEffect(() => {
    getCurrentBudgetWithFirebase(getBudgetFromFirebase(uid), dispatchExpense);
  }, [dispatchExpense, uid]);
  
  function handleSetMoney(event) {
    event.preventDefault();
    if (money <= 0) {
      return console.log(
        "El valor 0 no es valido"
      );
    } else {
      const budget = createBudget(money, displayName);
      setBudgetFirebase(budget, uid, dispatchExpense);
      setIsOpenInput(false);
      reset();
    }
  }
  
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
          money={money}
          handleInputChange={handleInputChange}
        />
      ) : null}
    </QuoteContainer>
  );
};
