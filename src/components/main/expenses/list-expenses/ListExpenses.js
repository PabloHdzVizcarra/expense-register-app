import React from 'react';
import { Expense } from '../../../expense/Expense';

export const ListExpenses = ({listExpenses, setIsOpen}) => {
  return (
    <div>
      {(listExpenses.length === 0) ? (
        <p>Felicidades no tienes ningun gasto, pero puede agregar alguno</p>
      ) : (
          <div>
            {listExpenses.map((expense, index) => (
              <Expense 
                key={index}
                expense={expense}
              />
            ))}
          </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
      >Agregar gasto</button>
    </div>
  )
}
