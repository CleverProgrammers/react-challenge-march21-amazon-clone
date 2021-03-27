import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBL6yj1-ZNcR6qvN22_CnNNmrD90ezz3vg",
    authDomain: "clone-mar21.firebaseapp.com",
    projectId: "clone-mar21",
    storageBucket: "clone-mar21.appspot.com",
    messagingSenderId: "781350103372",
    appId: "1:781350103372:web:a86eda03286270903707e9",
    measurementId: "G-4RQMTWZN67"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };