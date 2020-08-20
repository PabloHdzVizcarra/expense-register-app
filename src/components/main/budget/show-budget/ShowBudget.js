import React from 'react';
import { Paragraph, ParagraphMoney, ButtonDelete } from './Styles';

export const ShowBudget = ({ currentBudget }) => {
  const { money } = currentBudget
  return (
    <div>
      <Paragraph>Tu presupuesto es de</Paragraph>
      <ParagraphMoney>${money}</ParagraphMoney>
      <ButtonDelete>Eliminar presupuesto</ButtonDelete>
    </div>
  )
}
