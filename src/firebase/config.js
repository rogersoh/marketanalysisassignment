// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4ZT2yNmxHGZsNhhDJpYtGaurbTCKw8A",
  authDomain: "market-analysis-assignment.firebaseapp.com",
  projectId: "market-analysis-assignment",
  storageBucket: "market-analysis-assignment.appspot.com",
  messagingSenderId: "790788434094",
  appId: "1:790788434094:web:a1bcae125b9e139260653f",
  measurementId: "G-J28CW33K5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const db = getFirestore();
const auth = getAuth();

export { analytics, storage, db, auth };
