

export function validateExpenseForm(values) {
  const { name, category, cost } = values;
  console.log(name, category, cost);
  if (name.length < 4) {
    return [true, 'el nombre debe ser de almenos 4 caracteres']
  }

  if (category === '') {
    return [true, 'Por favor agrega una categoria']
  }
  if (cost === ''|| cost <= 0) {
    return [true, 'El costo es muy bajo']
  }

  return [false, ''];

}