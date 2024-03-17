// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-wK9ZMmxEP4X5REI3YaNFvWbnCZdUq0",
  authDomain: "netflix-vite-2537f.firebaseapp.com",
  projectId: "netflix-vite-2537f",
  storageBucket: "netflix-vite-2537f.appspot.com",
  messagingSenderId: "918655648754",
  appId: "1:918655648754:web:5cd4091a9ecec0484ee16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)