import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZAKqtkiUNwDUvu8u1XJdQb78rBUwehmE",
  authDomain: "to-do-4db1b.firebaseapp.com",
  projectId: "to-do-4db1b",
  storageBucket: "to-do-4db1b.appspot.com",
  messagingSenderId: "1087623711498",
  appId: "1:1087623711498:web:abdde669e6e77c022848f3",
  measurementId: "G-S30JYJ8DFR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
var auth = getAuth(app);
var provider = new GoogleAuthProvider(auth); 

export { db,app ,storage,auth,provider};