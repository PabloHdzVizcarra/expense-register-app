import { firebase } from "../../libs/firebase";

export const firebaseSignInWithEmailAndPassword = (email, password, setErrorForm) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('SESION INICIADA CON EMAIL Y PASSWORD');
    })
    .catch(function (error) {
      var errorMessage = error.message;
      setErrorForm({
        error: true,
        message: errorMessage
      })
    });
};
