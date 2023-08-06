// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const { VITE_API_KEY }= import.meta.env

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: "bgbg-golf.firebaseapp.com",
  projectId: "bgbg-golf",
  storageBucket: "bgbg-golf.appspot.com",
  messagingSenderId: "662595275229",
  appId: "1:662595275229:web:03e67ee0cdd1dcbbe80e34"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// export const dbUsersRef = collection(db, 'users')
