// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b4be4.firebaseapp.com",
  projectId: "mern-estate-b4be4",
  storageBucket: "mern-estate-b4be4.appspot.com",
  messagingSenderId: "886540670534",
  appId: "1:886540670534:web:e191a8b6fcf1a729405c47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);