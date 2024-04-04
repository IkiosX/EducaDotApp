
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPmYoruBUUtEnfgqaPBHC8DudzS_125zU",
    authDomain: "educaapp-6e998.firebaseapp.com",
    projectId: "educaapp-6e998",
    storageBucket: "educaapp-6e998.appspot.com",
    messagingSenderId: "772882983014",
    appId: "1:772882983014:web:d87cceab730654a59ee5a7",
    measurementId: "G-G496YMQRHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);


export const db = getFirestore(app);