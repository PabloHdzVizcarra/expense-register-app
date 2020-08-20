import React, { useState } from 'react'
import { LayoutContainer } from './expense-styles';
import { ExpenseForm } from './form-expenses/ExpenseForm';
import { ListExpenses } from './list-expenses/ListExpenses';


export const Expenses = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [listExpenses, setListExpenses] = useState([
    // 'autobus',
    // 'comida',
    // 'cine',
    // 'diversion',
    // 'piza'
  ]);
  
  return (
    <LayoutContainer>
      {(!isOpen) ? (
        <ListExpenses
          setIsOpen={setIsOpen}
          listExpenses={listExpenses}
        />
      ) : (
        <ExpenseForm setIsOpen={setIsOpen} />  
      )}
    </LayoutContainer>
  )
}
