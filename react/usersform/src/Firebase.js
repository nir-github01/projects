// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaY9QLcTHZlFBAJsrQFtS1mEUY3LHVbh4",
  authDomain: "userform-1ce78.firebaseapp.com",
  projectId: "userform-1ce78",
  storageBucket: "userform-1ce78.appspot.com",
  messagingSenderId: "336984745074",
  appId: "1:336984745074:web:4a8403002e041d54fe8eeb",
  measurementId: "G-0K07BWP4PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app, auth};