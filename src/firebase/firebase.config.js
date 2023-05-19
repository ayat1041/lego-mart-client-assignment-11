// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH7Ru4ZD7JGrVr6l8DUCL6vba8TY7zR50",
  authDomain: "lego-mart.firebaseapp.com",
  projectId: "lego-mart",
  storageBucket: "lego-mart.appspot.com",
  messagingSenderId: "879204489260",
  appId: "1:879204489260:web:54e6437dbe78f6d217d989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;