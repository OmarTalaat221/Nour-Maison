// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJQSca2WhqX4uOqxWDzcm06Dc3XSQzhE",
  authDomain: "nour-maison-chat.firebaseapp.com",
  projectId: "nour-maison-chat",
  storageBucket: "nour-maison-chat.firebasestorage.app",
  messagingSenderId: "869886505468",
  appId: "1:869886505468:web:c6630d102dd2ae26c38279",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };
