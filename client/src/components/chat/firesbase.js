// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRKSyS7OJt-ulSn4us0L0MGoe_qQv8SrA",
    authDomain: "respondr-8b7c0.firebaseapp.com",
    projectId: "respondr-8b7c0",
    storageBucket: "respondr-8b7c0.appspot.com",
    messagingSenderId: "884863782470",
    appId: "1:884863782470:web:836fdab3662ddc959fc447",
    measurementId: "G-0L4S4P5EZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
export {auth,db}