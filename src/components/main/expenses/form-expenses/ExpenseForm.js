import React from "react";
import { Form, TitleContainer, IconClose, Button, InputLabel, Input, Select } from "./styles";
import PropTypes from "prop-types";

export const ExpenseForm = ({
  inputValues,
  handleInputChange,
  handleExpenseSubmit,
  handleShowButton
}) => {
  const { name, category, cost } = inputValues;

  return (
    <Form onSubmit={handleExpenseSubmit}>
      <TitleContainer>
        <p>Agrega tu gasto</p>
        <IconClose className="material-icons" onClick={handleShowButton}>
          cancel
        </IconClose>
      </TitleContainer>
      <div>
        <InputLabel>Nombre</InputLabel>
        <Input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div>
        <InputLabel>Categoria</InputLabel>
        <Select
          name="category"
          onChange={handleInputChange}
          value={category}
          data-testid="select"
        >
          <option value="nothing">...</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="comida">Comida</option>
          <option value="transporte">Transporte</option>
          <option value="deudas">Deudas</option>
        </Select>
      </div>
      <div>
        <InputLabel>Costo</InputLabel>
        <Input
          type="text"
          name="cost"
          onChange={handleInputChange}
          value={cost}
        />
      </div>
      <Button>Agregar</Button>
    </Form>
  );
};

ExpenseForm.propTypes = {
  handleShowButton: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleExpenseSubmit: PropTypes.func.isRequired,
};
