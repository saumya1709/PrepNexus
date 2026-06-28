
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c76ca.firebaseapp.com",
  projectId: "interviewiq-c76ca",
  storageBucket: "interviewiq-c76ca.firebasestorage.app",
  messagingSenderId: "315536932686",
  appId: "1:315536932686:web:ed6e4dc32381ad5551a81f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider  = new GoogleAuthProvider();

export {auth , provider};