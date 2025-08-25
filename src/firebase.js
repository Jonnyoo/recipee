// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgF0T9likRBmNMNjkLuCR2prMUtirpxF4",
  authDomain: "munch-6303f.firebaseapp.com",
  projectId: "munch-6303f",
  storageBucket: "munch-6303f.firebasestorage.app",
  messagingSenderId: "665224414010",
  appId: "1:665224414010:web:707a2c598cffdfec238603",
  measurementId: "G-E1FED4ZF44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };