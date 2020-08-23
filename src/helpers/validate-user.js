export const validateUser = (data) => {
  const { userName, email, password, confirmPassword } = data;
  const validateRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userName.length < 3) {
    return [true, "El nombre de usuario debe ser al menos 3 caracteres"];
  }

  if (!validateRegex.test(email)) {
    return [true, "El email que ingresaste no es valido"];
  }

  if (password.length < 6 ) {
    return [true, "La contraseña debe ser mayor a 6 caracteres"];
  }

  if (password !== confirmPassword) {
    return [true, "Las contraseñas no son iguales"];
  }

  return [false, ""];
};
