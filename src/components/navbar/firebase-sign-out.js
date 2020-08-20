import { firebase } from "../../libs/firebase";

export const firebaseSignOut = async () => {
  try {
    await firebase.auth().signOut();

    return {
      succes: true,
    };
  } catch (error) {
    return error;
  }
};
