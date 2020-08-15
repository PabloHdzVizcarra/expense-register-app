import { firebase } from '../../libs/firebase';

export const firebaseSignOut = (history) => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("CLOSE SESSION");
  }).catch(function(error) {
    // An error happened.
  });
}