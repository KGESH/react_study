import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

const FirebaseInstance = firebase.initializeApp(firebaseConfig.firebase);

export const Provider = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const Auth = firebase.auth();
export default FirebaseInstance;