// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD32YsZeH1-Sj-bD84w2x8tDb7W9_9B9wc",
  authDomain: "react-socialmedia-ce04f.firebaseapp.com",
  projectId: "react-socialmedia-ce04f",
  storageBucket: "react-socialmedia-ce04f.appspot.com",
  messagingSenderId: "453089117412",
  appId: "1:453089117412:web:31023c861290ed885858f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)