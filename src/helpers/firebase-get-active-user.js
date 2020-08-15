import { firebase } from "../libs/firebase";

export const firebaseGetActiveUser = (setUser, setIsLoading) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      const { displayName, email, emailVerified, uid } = user;

      setUser({
        isActive: true,
        activeUserData: {
          displayName,
          email,
          emailVerified,
          uid,
        },
      });

      setIsLoading(false);
    } else {
      // No user is signed in.
      setIsLoading(false);
    }
  });
};
