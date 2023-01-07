// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB97ClstTWZSZrf-inPt7PIUrCmXK49-ow",
  authDomain: "blockchainnews-14265.firebaseapp.com",
  projectId: "blockchainnews-14265",
  storageBucket: "blockchainnews-14265.appspot.com",
  messagingSenderId: "1044366008453",
  appId: "1:1044366008453:web:8226be040f13ad3ae709ec",
  measurementId: "G-7D9FH3MQ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);

