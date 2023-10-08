// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVW2883EvAp0OzIVsbo7iIKquOdJXaZS8",
  authDomain: "elite-arena.firebaseapp.com",
  projectId: "elite-arena",
  storageBucket: "elite-arena.appspot.com",
  messagingSenderId: "167797757463",
  appId: "1:167797757463:web:10b2bb8e03671a68822e52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;