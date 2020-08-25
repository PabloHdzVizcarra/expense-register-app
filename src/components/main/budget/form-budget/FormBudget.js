import React from "react";
import { CashInput, Button } from "./Styles";
import PropTypes from 'prop-types';

export const FormBudget = ({ handleInputChange, money, handleSetMoney }) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
      }}
      onSubmit={(event) => handleSetMoney(event)}
    >
      <CashInput
        autoFocus
        type="text"
        placeholder="Ingresa tu presupuesto"
        name='money'
        value={money}
        onChange={handleInputChange}
      />
      <Button>Agregar</Button>
    </form>
  );
};

FormBudget.propTypes = {
  handleSetMoney: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  money: PropTypes.node.isRequired
};