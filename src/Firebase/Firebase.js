import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth";
import "firebase/compat/storage"


  const firebaseConfig = {
    apiKey: "AIzaSyAJ-JISA2t0EqzVkbiKkZ5nDOgFGIVaL-Q",
    authDomain: "disney-plus-clone-c2bf9.firebaseapp.com",
    projectId: "disney-plus-clone-c2bf9",
    storageBucket: "disney-plus-clone-c2bf9.appspot.com",
    messagingSenderId: "568401424896",
    appId: "1:568401424896:web:f0aa75b80a128e9adc5ee5",
    measurementId: "G-CLDHSPWVN0"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;