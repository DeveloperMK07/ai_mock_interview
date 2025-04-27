// Import the functions you need from the SDKs you need
import { initializeApp, getApp ,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd7lsxf9JIrZ6K56KPsMRVgzaQThlkos8",
  authDomain: "guideu-dd435.firebaseapp.com",
  projectId: "guideu-dd435",
  storageBucket: "guideu-dd435.firebasestorage.app",
  messagingSenderId: "98666983643",
  appId: "1:98666983643:web:abb4c13fe4029f42fedcfe",
  measurementId: "G-YC3ZCVMK9V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db= getFirestore(app);