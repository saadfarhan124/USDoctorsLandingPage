import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBdS2Hyq4kyw0K89VnXab2c6Vhw7ADiWBE",
    authDomain: "usdoctors-3a63f.firebaseapp.com",
    projectId: "usdoctors-3a63f",
    storageBucket: "usdoctors-3a63f.appspot.com",
    messagingSenderId: "76051400592",
    appId: "1:76051400592:web:25ac7d566bf9a3cf85d515"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();