// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Rp0LyeM_8-3FSeaWs1WquphkmdlU-Bw",
  authDomain: "ecommercemusicreact.firebaseapp.com",
  projectId: "ecommercemusicreact",
  storageBucket: "ecommercemusicreact.appspot.com",
  messagingSenderId: "887871397293",
  appId: "1:887871397293:web:ef89ab31672babf6eb1524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)