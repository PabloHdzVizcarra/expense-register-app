import { firebase } from "../libs/firebase";

export const firebaseUserRegister = async (
  { email, password, userName },
  setErrorForm
) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: userName });
    console.log('USUARIO CREADO CON EXITO');
  } catch (error) {
    console.log(error);

    setErrorForm({
      error: true,
      message: error.message,
    });
  }
};
