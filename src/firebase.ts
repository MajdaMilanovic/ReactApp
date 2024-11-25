// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZRe4sDG6GTbmTWrxqTwrqlMgKXvu47S4",
  authDomain: "reactapp-9c89a.firebaseapp.com",
  projectId: "reactapp-9c89a",
  storageBucket: "reactapp-9c89a.firebasestorage.app",
  messagingSenderId: "244171177343",
  appId: "1:244171177343:web:9c3a3591ba7e5256866e4a",
  measurementId: "G-ZKB80XBMWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);