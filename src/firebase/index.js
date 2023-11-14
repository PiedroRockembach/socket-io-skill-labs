// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbFht_rr5nzNl9A2tEsJrtTNTsBHhMgAw",
  authDomain: "g2-skill-labs.firebaseapp.com",
  projectId: "g2-skill-labs",
  storageBucket: "g2-skill-labs.appspot.com",
  messagingSenderId: "659855032130",
  appId: "1:659855032130:web:7d04f0880f6614409792db",
  measurementId: "G-FWD65XSKLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;