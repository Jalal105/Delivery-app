

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-95321.firebaseapp.com",
  projectId: "vingo-food-delivery-95321",
  storageBucket: "vingo-food-delivery-95321.firebasestorage.app",
  messagingSenderId: "361452581789",
  appId: "1:361452581789:web:e4e01771ef2d178e0db574"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);