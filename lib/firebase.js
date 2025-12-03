// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDQJQSca2WhqX4uOqxWDzcm06Dc3XSQzhE",
//   authDomain: "nour-maison-chat.firebaseapp.com",
//   projectId: "nour-maison-chat",
//   storageBucket: "nour-maison-chat.firebasestorage.app",
//   messagingSenderId: "869886505468",
//   appId: "1:869886505468:web:c6630d102dd2ae26c38279",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCShh7R2BELNR6vX4M_915WC__CH7LmmF8",
  authDomain: "nourchat-77d2b.firebaseapp.com",
  projectId: "nourchat-77d2b",
  storageBucket: "nourchat-77d2b.firebasestorage.app",
  messagingSenderId: "859254513866",
  appId: "1:859254513866:web:5c352273ae47acbdfe5433",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
