// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "planet-crypto-1.firebaseapp.com",
  projectId: "planet-crypto-1",
  storageBucket: "planet-crypto-1.appspot.com",
  messagingSenderId: "416169026867",
  appId: "1:416169026867:web:13be0bc282e19762df4a46"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);




