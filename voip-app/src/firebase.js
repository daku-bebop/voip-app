// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB24wEkSvXyssrqhDtpTTYr9rGt4lF9WeQ",

  authDomain: "voip-app-c8ca6.firebaseapp.com",

  projectId: "voip-app-c8ca6",

  storageBucket: "voip-app-c8ca6.appspot.com",

  messagingSenderId: "860059588231",

  appId: "1:860059588231:web:a6beebfa4f8357e1590a22",

  measurementId: "G-SEMG9YNEHK"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);