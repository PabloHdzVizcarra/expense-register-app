import React from "react";
import PropTypes from "prop-types";
import { Expense } from "../expense/Expense";

export const ListExpenses = ({ listExpenses, setIsOpen }) => {
  return (
    <div>
      {listExpenses.length === 0 ? (
        <p>Felicidades no tienes ningun gasto, pero puedes agregar alguno</p>
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
      <button onClick={() => setIsOpen(true)}>Agregar gasto</button>
    </div>
  );
};

ListExpenses.propTypes = {
  listExpenses: PropTypes.array.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
