// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBQsJ5MS4-MacHnO5wxQX8V2tGe0y6eCXo",
  // authDomain: "myecommerce2-7b8fc.firebaseapp.com",
  // projectId: "myecommerce2-7b8fc",
  // storageBucket: "myecommerce2-7b8fc.appspot.com",
  // messagingSenderId: "715233167432",
  // appId: "1:715233167432:web:3a0acec83b123399d3307d"
  apiKey: "AIzaSyAYX1WXL12cdimY0Wuk8pLiYKJ4VDLfhNs",
  authDomain: "e-commerce-9ba5c.firebaseapp.com",
  projectId: "e-commerce-9ba5c",
  storageBucket: "e-commerce-9ba5c.firebasestorage.app",
  messagingSenderId: "846049778701",
  appId: "1:846049778701:web:cc3f04bdbabae70903c944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
