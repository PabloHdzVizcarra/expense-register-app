import React from "react";
import PropTypes from "prop-types";
import { Expense } from "../expense/Expense";
import { Button } from "./styles";

export const ListExpenses = ({ listExpenses, setIsOpen }) => {
  return (
    <div>
      {listExpenses.length === 0 ? (
        <p>No tienes ningun gasto, pero puedes comezar a agregarlos cuando gustes</p>
      ) : (
        <div>
          {listExpenses.map(
            ({ id, budgetID, category, cost, name, time, userID }) => (
              <Expense
                key={id}
                id={id}
                budgetID={budgetID}
                category={category}
                cost={cost}
                name={name}
                time={time}
                userID={userID}
              />
            )
          )}
        </div>
      )}
      <Button onClick={() => setIsOpen(true)}>Agregar gasto</Button>
    </div>
  );
};

ListExpenses.propTypes = {
  listExpenses: PropTypes.array.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
