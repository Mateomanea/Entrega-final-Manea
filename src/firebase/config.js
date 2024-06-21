// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuexbuuYRucFst_LjXyiWPERjBs0xjBSA",
  authDomain: "ecommerce-ch-d3b6f.firebaseapp.com",
  projectId: "ecommerce-ch-d3b6f",
  storageBucket: "ecommerce-ch-d3b6f.appspot.com",
  messagingSenderId: "568668031187",
  appId: "1:568668031187:web:e1ac2040580c0ec6a26c26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);