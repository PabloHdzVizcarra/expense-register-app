import React from "react";
import { CashInput, Button } from "./Styles";
import PropTypes from 'prop-types';

export const FormBudget = ({ handleSetMoney, setValue }) => {
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
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>Agregar</Button>
    </form>
  );
};

FormBudget.propTypes = {
  handleSetMoney: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired
}