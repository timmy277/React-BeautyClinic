// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl0dm9crmEs1UMvWTlzlLwVBpMd0X2fUQ",
    authDomain: "react-beautice.firebaseapp.com",
    projectId: "react-beautice",
    storageBucket: "react-beautice.appspot.com",
    messagingSenderId: "856400810935",
    appId: "1:856400810935:web:3c517a1dd0c8f29a998e32",
    measurementId: "G-52JKF0R3QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };