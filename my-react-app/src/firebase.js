// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg78yT9YHnibqiIa_HtdmFD6AMK3Hgyew",
  authDomain: "blog-post-1e4f0.firebaseapp.com",
  projectId: "blog-post-1e4f0",
  storageBucket: "blog-post-1e4f0.appspot.com",
  messagingSenderId: "93588950326",
  appId: "1:93588950326:web:9ec806682c6576d3bcf797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);
