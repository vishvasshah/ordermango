import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwEJM4uG92yqYTfzFMsnUZXrjK_xOJ2fc",
    authDomain: "freshgro-6d248.firebaseapp.com",
    databaseURL: "https://freshgro-6d248-default-rtdb.firebaseio.com",
    projectId: "freshgro-6d248",
    storageBucket: "freshgro-6d248.appspot.com",
    messagingSenderId: "1011876349321",
    appId: "1:1011876349321:web:1d33b10f01da8bce8d8d58",
    measurementId: "G-S61SDEJBX4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };