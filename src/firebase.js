import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5fkOlIMQEc9LZ8X2NZtQiBF5flKKCb1o",
  authDomain: "magazinonline-d91a2.firebaseapp.com",
  projectId: "magazinonline-d91a2",
  storageBucket: "magazinonline-d91a2.appspot.com",
  messagingSenderId: "399066388218",
  appId: "1:399066388218:web:d27492d1c499baf2661b43",
  measurementId: "G-79TNH4E6WP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
