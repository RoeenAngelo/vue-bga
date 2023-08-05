// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "bgbg-golf.firebaseapp.com",
  projectId: "bgbg-golf",
  storageBucket: "bgbg-golf.appspot.com",
  messagingSenderId: "process.env.MESSAGING_SENDER_ID",
  appId: "process.env.APP_ID"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// export const dbUsersRef = collection(db, 'users')
