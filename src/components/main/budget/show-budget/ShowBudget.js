import React from "react";
import { Paragraph, ParagraphMoney, ButtonDelete } from "./Styles";
import PropTypes from "prop-types";

export const ShowBudget = ({
  handleDeleteBudget,
  currentMoney,
}) => {
  return (
    <div>
      <Paragraph>Tu presupuesto es de</Paragraph>
      <ParagraphMoney
        data-testid="current-money"
      >${currentMoney}</ParagraphMoney>
      <ButtonDelete onClick={handleDeleteBudget}>
        Eliminar presupuesto
      </ButtonDelete>
    </div>
  );
};

ShowBudget.propTypes = {
  handleDeleteBudget: PropTypes.func.isRequired,
  currentMoney: PropTypes.number.isRequired
}
