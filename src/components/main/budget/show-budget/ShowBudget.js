import React, { useEffect, useState } from "react";
import { Paragraph, ParagraphMoney, ButtonDelete } from "./Styles";
import PropTypes from "prop-types";
import { selectColor } from "./helper/select-colors";
import './styles.css';

export const ShowBudget = ({ handleDeleteBudget, currentMoney, currentBudget }) => {
  const { money } = currentBudget;
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(selectColor(money, currentMoney));
    return () => {
      setColor('');
    }
  }, [currentMoney, money]);

  return (
    <div>
      <Paragraph>Tu presupuesto es de</Paragraph>
      <ParagraphMoney
        data-testid="current-money"
        className={color}
      >
        ${currentMoney}
      </ParagraphMoney>
      <ButtonDelete onClick={handleDeleteBudget}>
        Eliminar presupuesto
      </ButtonDelete>
    </div>
  );
};

ShowBudget.propTypes = {
  handleDeleteBudget: PropTypes.func.isRequired,
  currentMoney: PropTypes.number.isRequired,
  currentBudget: PropTypes.object.isRequired,
};
