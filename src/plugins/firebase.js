// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAvwd1xEfnwGTp4JO-YysnxspEjuodkKUk",
  authDomain: "loginsystem-6a1b1.firebaseapp.com",
  projectId: "loginsystem-6a1b1",
  storageBucket: "loginsystem-6a1b1.appspot.com",
  messagingSenderId: "154056735542",
  appId: "1:154056735542:web:6cbd545369a1fda116d197",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
