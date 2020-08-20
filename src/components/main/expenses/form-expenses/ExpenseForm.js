import React from "react";
import { Form, TitleContainer, IconClose } from "./ExpenseForm-styles";
import { useForm } from "../../../../hooks/useForm";

export const ExpenseForm = ({ setIsOpen }) => {

  const [inputValues, handleInputChange, reset] = useForm({
    name: '',
    category: '',
    cost: ''

  });

  const { name, category, cost } = inputValues;

  function handleExpenseSubmit(event) {
    event.preventDefault();
    inputValues.cost = Number(cost);
    console.log(inputValues);
  }

  return (
    <Form
      onSubmit={handleExpenseSubmit}
    >
      <TitleContainer>
        <p>Agrega tu gasto</p>
        <IconClose className="material-icons" onClick={() => setIsOpen(false)}>
          cancel
        </IconClose>
      </TitleContainer>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name" 
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div>
        <label>Categoria</label>
        <select
          name="category"
          onChange={handleInputChange}
          value={category}
        >
          <option value="nothing">...</option>
          <option value="fun">Entretenimiento</option>
          <option value="food">Comida</option>
          <option value="transport">Transporte</option>
          <option value="debts">Deudas</option>
        </select>
      </div>
      <div>
        <label>Costo</label>
        <input
          type="text"
          name="cost" 
          onChange={handleInputChange}
          value={cost}
        />
      </div>
      <button>Agregar</button>
    </Form>
  );
};
