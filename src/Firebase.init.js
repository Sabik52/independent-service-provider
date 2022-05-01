// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4RPcVN9_dnfcq1i_onMCCDgq3dfHxPHM",
  authDomain: "flash-bright-3df3c.firebaseapp.com",
  projectId: "flash-bright-3df3c",
  storageBucket: "flash-bright-3df3c.appspot.com",
  messagingSenderId: "422503787781",
  appId: "1:422503787781:web:e5f3cb6d07e67126e25b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;