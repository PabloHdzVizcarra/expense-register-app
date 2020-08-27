import React, { useState } from "react";
import PropTypes from "prop-types";

import { ContainerExpense, Name, TimeParagraph, NameAndIcon, Button } from "./Styles";
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
  const [deleteAnimation, setDeleteAnimation] = useState(false);

  function handleDeleteExpense() {
    deleteExpenseFromFirebase(id, budgetID, userID, dispatchExpense, cost);
    setDeleteAnimation(true);
  }

  return (
    <ContainerExpense
      className={`animate__animated ${!deleteAnimation ? 'animate__fadeIn' : 'animate__bounceOut' }`}
    >
      <NameAndIcon>
        <Name>{name}</Name>
        <Button onClick={handleDeleteExpense}>Eliminar</Button>
      </NameAndIcon>
      <Name>{category}</Name>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <Name>{cost}</Name>
        <TimeParagraph>{time}</TimeParagraph>
      </div>
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
