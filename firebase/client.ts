// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDZlVeJ5SZJKxh87zfCnUUJn0RDgcnpo3k",
  authDomain: "prepwise-d33d7.firebaseapp.com",
  projectId: "prepwise-d33d7",
  storageBucket: "prepwise-d33d7.firebasestorage.app",
  messagingSenderId: "1015184573109",
  appId: "1:1015184573109:web:56d8fb6336dc9e9b0774fc",
  measurementId: "G-H0YE16QGVR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
