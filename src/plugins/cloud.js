import firebase from "firebase/app";
import "firebase/database";

// connect to firebase database
firebase.initializeApp({
  apiKey: "AIzaSyBRrkp5xlsol3iPFmMoUg_c6tz9bNmoag0",
  authDomain: "arcquest-85bc5.firebaseapp.com",
  databaseURL: "https://arcquest-85bc5.firebaseio.com",
  projectId: "arcquest-85bc5",
  storageBucket: "arcquest-85bc5.appspot.com",
  messagingSenderId: "727232800872"
});

// exports database connection to use with events and
// to get data from server
export const db = firebase.database();
