import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkQqA9uejriFwIttxBt3luRaPO1-_EWFc",
    authDomain: "clone-a54f6.firebaseapp.com",
    projectId: "clone-a54f6",
    storageBucket: "clone-a54f6.appspot.com",
    messagingSenderId: "805999874414",
    appId: "1:805999874414:web:140880c8d2044e579df17f",
    measurementId: "G-7M9K8PP9ML"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };