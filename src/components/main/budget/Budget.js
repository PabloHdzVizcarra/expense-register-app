import React, { useEffect, useState } from "react";
import { QuoteContainer } from "./Styles";
import { useSetQuote } from "../../../hooks/useSetQuote";
import { useAuthState } from "../../../context/auth-context";
import { useExpenses } from "../../../context/expenses-context";
import {
  setBudgetFirebase,
  getCurrentBudgetWithFirebase,
} from "../../../actions/expense-actions";
import { createBudget } from "./helper-create-budget";
import { ShowBudget } from "./show-budget/ShowBudget";
import { getBudgetFromFirebase } from "./helper-get-data-firebase";
import { FormBudget } from "./form-budget/FormBudget";
import { AddBudget } from "./add-budget/AddBudget";

export const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [state, dispatch] = useExpenses();
  const { currentBudget } = state;
  const { activeUserData } = useAuthState();
  const { uid, displayName } = activeUserData;

  const [
    money,
    setValue,
    handleSetMoney,
    isOpenInput,
    setIsOpenInput,
  ] = useSetQuote();

  useEffect(() => {
    getCurrentBudgetWithFirebase(getBudgetFromFirebase(uid), dispatch);
    if (money !== 0) {
      const budget = createBudget(money, displayName);
      const data = setBudgetFirebase(budget, uid);
      console.log(data);
    }
  }, [uid, money, dispatch, displayName]);

  return (
    <QuoteContainer>
      {Object.keys(currentBudget) === 0 ? (
        <AddBudget setIsOpenInput={setIsOpenInput} />
      ) : (
        <ShowBudget currentBudget={currentBudget} />
      )}
      {isOpenInput ? (
        <FormBudget handleSetMoney={handleSetMoney} setValue={setValue} />
      ) : null}
    </QuoteContainer>
  );
};
