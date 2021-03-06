import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkA_K0fOD3dZXL4oUsuPtb3JnfK7Ia1q4",
  authDomain: "pwr-trkr.firebaseapp.com",
  projectId: "pwr-trkr",
  storageBucket: "pwr-trkr.appspot.com",
  messagingSenderId: "686900693096",
  appId: "1:686900693096:web:2112e0283e2eee0f7c53dd",
  measurementId: "G-6M5T22JFC1"
};

firebase.initializeApp(firebaseConfig);
const rtdb = firebase.database()
const db = firebase.firestore()

if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  rtdb.useEmulator("localhost", 9000);
} 

export { rtdb, db };