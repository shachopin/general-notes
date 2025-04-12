import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPbJox-HOD-Xds16swBD6VsJfxc_9Qmvc",
  authDomain: "general-notes-51170.firebaseapp.com",
  projectId: "general-notes-51170",
  storageBucket: "general-notes-51170.firebasestorage.app",
  messagingSenderId: "36402350515",
  appId: "1:36402350515:web:edac0be23081b2a34563c6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };