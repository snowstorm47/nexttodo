// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Z0JOkmYoLg_tzAMgyLhiPM6oxTQH7JI",
  authDomain: "nextjs-firebase-95a2f.firebaseapp.com",
  projectId: "nextjs-firebase-95a2f",
  storageBucket: "nextjs-firebase-95a2f.appspot.com",
  messagingSenderId: "90709880188",
  appId: "1:90709880188:web:4f6e2f25ca8bf12e5648f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
console.log(db)
export { db } 