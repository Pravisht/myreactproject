// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVd58dSBt37cmyxBK2E7kaR57suzwPNnI",
  authDomain: "dolu1169.firebaseapp.com",
  databaseURL: "https://dolu1169-default-rtdb.firebaseio.com",
  projectId: "dolu1169",
  storageBucket: "dolu1169.firebasestorage.app",
  messagingSenderId: "86415850107",
  appId: "1:86415850107:web:7760207c4623fd02b6c0de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);