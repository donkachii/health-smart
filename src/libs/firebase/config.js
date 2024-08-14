// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "flash-mint.firebaseapp.com",
  projectId: "flash-mint",
  storageBucket: "flash-mint.appspot.com",
  messagingSenderId: "830018042142",
  appId: "1:830018042142:web:5173d1dab8be2d1c4df10f",
  measurementId: "G-BXY2YT4NEQ",
};

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const firestore = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firestore };
