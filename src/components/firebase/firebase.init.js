// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu0c9p2Za5D6KLlfsZCREUzqXTNnkyg0U",
  authDomain: "cafe-cut-auth.firebaseapp.com",
  projectId: "cafe-cut-auth",
  storageBucket: "cafe-cut-auth.firebasestorage.app",
  messagingSenderId: "840663204744",
  appId: "1:840663204744:web:1339c9f906bbf674f8f03d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**
 *
 * **/
