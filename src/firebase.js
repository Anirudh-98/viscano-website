import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtcjl58bVPYEWwLR1xFQ1E0kwsPOS7DKo",
    authDomain: "viscano.firebaseapp.com",
    projectId: "viscano",
    storageBucket: "viscano.firebasestorage.app",
    messagingSenderId: "138396027771",
    appId: "1:138396027771:web:2987223e153832c9d30bde",
    measurementId: "G-YMEFWR8GNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
