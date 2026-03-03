import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD93DaPXWBN7O1GRjsgGFbQYcfuVI1mvhU",
  authDomain: "book-list-with-firebase-82302.firebaseapp.com",
  projectId: "book-list-with-firebase-82302",
  storageBucket: "book-list-with-firebase-82302.firebasestorage.app",
  messagingSenderId: "252591216899",
  appId: "1:252591216899:web:1fe62b7def4e8bfefef136"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);