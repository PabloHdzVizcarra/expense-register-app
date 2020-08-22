import React from "react";
import PropTypes from "prop-types";
import { Paragraph, IconMoney, ContainerAddBudget } from "./Styles";

export const AddBudget = ({ setIsOpenInput }) => {
  return (
    <ContainerAddBudget>
      <Paragraph>Comienza agregando un presupuesto</Paragraph>
      <IconMoney
        className="material-icons"
        onClick={() => setIsOpenInput(true)}
      >
        attach_money
      </IconMoney>
    </ContainerAddBudget>
  );
};

AddBudget.propTypes = {
  setIsOpenInput: PropTypes.func.isRequired,
};
