import { initializeApp } from "firebase/app";
//import firestore sdk
import {getFireStore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Ux243BX17suXWhiA-ecJD3NnQAep0WQ",
  authDomain: "auth-system-21477.firebaseapp.com",
  projectId: "auth-system-21477",
  storageBucket: "auth-system-21477.appspot.com",
  messagingSenderId: "488538263692",
  appId: "1:488538263692:web:58a1d4b5ea2b80fa892ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore()