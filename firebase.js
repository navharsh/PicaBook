// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_rqrfuSrUXxY52OptBv8V_nHkHqpqeI8",
    authDomain: "social-network-hackthon.firebaseapp.com",
    projectId: "social-network-hackthon",
    storageBucket: "social-network-hackthon.appspot.com",
    messagingSenderId: "245325365228",
    appId: "1:245325365228:web:ec904c4a73109fa63e4ac9",
    measurementId: "G-EXK35EVDG6"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
