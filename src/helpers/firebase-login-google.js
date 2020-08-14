import { firebase, googleAuthProvider } from "../libs/firebase";

export const firebaseLoginWithGoogle = async (setUser, showErrorForm) => {

  try {

    const resp = await firebase
      .auth()
      .signInWithPopup(googleAuthProvider);
    
    const { displayName, uid, email, emailVerified } = resp.user;

    setUser({
      isActive: true,
      activeUserData: {
        displayName,
        uid,
        email,
        emailVerified
      }
    })

    showErrorForm({
      error: false,
      message: ''
    })
    
    return true
  } catch (error) {
    console.log(error);
    showErrorForm({
      error: true,
      message: error.message
    })

    return false
  }
};
