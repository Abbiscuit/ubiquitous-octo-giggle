import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUVEzwyU5E7mWU7vl5fJ3vs0S7FPF_-fA',
  authDomain: 'test-db-39c56.firebaseapp.com',
  databaseURL: 'https://test-db-39c56.firebaseio.com',
  projectId: 'test-db-39c56',
  storageBucket: 'test-db-39c56.appspot.com',
  messagingSenderId: '475024546330',
  appId: '1:475024546330:web:1e8a593275a0c13954cfa3',
  measurementId: 'G-3H0NTGE4VE'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

// Google
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(result => {
      console.log('result********************', result);
    })
    .catch(err => console.error(err));

export default firebase;
