// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOtAoodn_OktDc9fTVOIdQdPrY5fLiT58',
  authDomain: 'find-the-shipfu.firebaseapp.com',
  projectId: 'find-the-shipfu',
  storageBucket: 'find-the-shipfu.appspot.com',
  messagingSenderId: '938269574017',
  appId: '1:938269574017:web:a1f72d4f635116a2d95e80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
