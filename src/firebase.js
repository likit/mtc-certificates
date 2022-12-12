// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_NvTncvDcLGCETCVXPJXdEZuXKbxr_i8",
  authDomain: "mtc-la-certificate.firebaseapp.com",
  projectId: "mtc-la-certificate",
  storageBucket: "mtc-la-certificate.appspot.com",
  messagingSenderId: "98754897746",
  appId: "1:98754897746:web:b5ee6087b40ed02385fc8b",
  measurementId: "G-JQ1XXPSR6Z"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
