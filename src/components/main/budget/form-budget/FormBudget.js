import React from "react";
import { CashInput, Button } from "./Styles";

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
