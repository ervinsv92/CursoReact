import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZKMZeeaffysRjcPeJ-hFS0UxEx-QPI7o",
    authDomain: "journal-app-react-fh.firebaseapp.com",
    projectId: "journal-app-react-fh",
    storageBucket: "journal-app-react-fh.appspot.com",
    messagingSenderId: "339092368359",
    appId: "1:339092368359:web:a9e91299b16cc9dc81eb42"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}