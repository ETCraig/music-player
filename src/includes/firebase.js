import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBisQRUGbCrZQTp70PSc0twIW6TXcw7YP4",
  authDomain: "music-player-d2873.firebaseapp.com",
  projectId: "music-player-d2873",
  storageBucket: "music-player-d2873.appspot.com",
  appId: "1:36822934065:web:4910f166de29a8b4e2ab10",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
