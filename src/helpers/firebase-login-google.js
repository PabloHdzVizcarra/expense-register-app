import { firebase, googleAuthProvider } from "../libs/firebase";

export const firebaseLoginWithGoogle = async (showErrorForm) => {

  try {

    await firebase
      .auth()
      .signInWithPopup(googleAuthProvider);
    
    return;
  } catch (error) {
    console.log(error);
    showErrorForm({
      error: true,
      message: error.message
    })

    return;
  }
};
