import firebase from "firebase";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


firebase.initializeApp(
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
{
  apiKey: "AIzaSyDjL6aZql0kWTBZRAoyR-gfSDkNrKPoHw8",
  authDomain: "to-doproject.firebaseapp.com",
  projectId: "to-doproject",
  storageBucket: "to-doproject.appspot.com",
  messagingSenderId: "902865646220",
  appId: "1:902865646220:web:5432f5fa48b38ed5ccc1a9",
  measurementId: "G-VMZ10WDR4L"}

);

const db = firebase.firestore();

export { db };