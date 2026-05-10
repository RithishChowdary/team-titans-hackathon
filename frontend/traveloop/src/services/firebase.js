// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlPB_OVxU63o4jHswYDRB1ln0mwWOsJGo",
  authDomain: "traveloop-e32c4.firebaseapp.com",
  projectId: "traveloop-e32c4",
  storageBucket: "traveloop-e32c4.firebasestorage.app",
  messagingSenderId: "158983250770",
  appId: "1:158983250770:web:cf194a870836b3b82ed08b",
  measurementId: "G-Z4Z75HPFSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();