// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "process.env.API_KEY",
//   authDomain: "process.env.AUTH_DOMAIN",
//   projectId: "process.env.PROJECT_ID",
//   storageBucket: "process.env.STORAGE_BUCKET",
//   messagingSenderId: "process.env.MESSAGING_SENDER_ID",
//   appId: "process.env.APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDf-np4ljkBZM682_ViXAcNPnkFyLdKqYw",
  authDomain: "bgbg-golf.firebaseapp.com",
  projectId: "bgbg-golf",
  storageBucket: "bgbg-golf.appspot.com",
  messagingSenderId: "662595275229",
  appId: "1:662595275229:web:03e67ee0cdd1dcbbe80e34"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const dbUsersRef = collection(db, 'users')
// export const storage = getStorage(app)