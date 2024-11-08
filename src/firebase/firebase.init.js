// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdu0iKuaqLOXP6mOB-SV3VorIza0zsuUg",
  authDomain: "practice-firebase-2dfd5.firebaseapp.com",
  projectId: "practice-firebase-2dfd5",
  storageBucket: "practice-firebase-2dfd5.firebasestorage.app",
  messagingSenderId: "576048301752",
  appId: "1:576048301752:web:07c09e4476c73966d0964d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;