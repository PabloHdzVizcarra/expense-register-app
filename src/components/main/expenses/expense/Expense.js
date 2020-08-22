import React from "react";
import PropTypes from "prop-types";

import { ContainerExpense, Name, TimeParagraph, NameAndIcon } from "./Styles";
import { deleteExpenseFromFirebase } from "../../../../actions/expense-actions";
import { useExpensesDispatch } from "../../../../context/expenses-context";

export const Expense = ({
  id,
  budgetID,
  category,
  cost,
  name,
  time,
  userID,
}) => {
  const dispatchExpense = useExpensesDispatch();

  function handleDeleteExpense() {
    deleteExpenseFromFirebase(id, budgetID, userID, dispatchExpense);
  }

  return (
    <ContainerExpense>
      <NameAndIcon>
        <Name>{name}</Name>
        <button onClick={handleDeleteExpense}>Eliminar</button>
      </NameAndIcon>
      <Name>{category}</Name>
      <Name>{cost}</Name>
      <TimeParagraph>{time}</TimeParagraph>
    </ContainerExpense>
  );
};

Expense.propTypes = {
  id: PropTypes.string.isRequired,
  budgetID: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};
