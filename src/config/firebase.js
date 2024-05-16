// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMBtDGIzrbF_feJ_CidAPVqxoB_05vjGc",
  authDomain: "machinery-4cb10.firebaseapp.com",
  projectId: "machinery-4cb10",
  storageBucket: "machinery-4cb10.appspot.com",
  messagingSenderId: "640395210688",
  appId: "1:640395210688:web:594dc4ca6229bfad526225",
  measurementId: "G-BE7B7Z0CV9",
  databaseURL:
    "https://machinery-4cb10-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const dbRef = ref(
//   db,
//   "https://machinery-4cb10-default-rtdb.asia-southeast1.firebasedatabase.app/",
// );
// export const dbRef;
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
