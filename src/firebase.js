import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6Yet-md5MFx0IMtAtu-Obld1HGnckbF0",
  authDomain: "youme-2abe7.firebaseapp.com",
  projectId: "youme-2abe7",
  storageBucket: "youme-2abe7.appspot.com",
  messagingSenderId: "119225643632",
  appId: "1:119225643632:web:5f49c7a6eb055a2ce5fab5",
  measurementId: "G-4DLMWMB996"
})

const db = firebase.firestore()

const auth = firebase.auth()

export { db, auth }