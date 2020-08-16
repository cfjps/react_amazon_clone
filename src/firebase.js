import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBx3VM_t7xqkMnUYN4BqXTfexpBF9QizNY",
    authDomain: "clone-860af.firebaseapp.com",
    databaseURL: "https://clone-860af.firebaseio.com",
    projectId: "clone-860af",
    storageBucket: "clone-860af.appspot.com",
    messagingSenderId: "541881246944",
    appId: "1:541881246944:web:071c5b5b04de75f873dc85",
    measurementId: "G-CRW7NZ13DP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };