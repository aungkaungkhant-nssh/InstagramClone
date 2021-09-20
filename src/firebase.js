// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIokDF0ReUa0m1y4OHbCgklt6etfqIIPg",
  authDomain: "instagram-e6251.firebaseapp.com",
  projectId: "instagram-e6251",
  storageBucket: "instagram-e6251.appspot.com",
  messagingSenderId: "359912123491",
  appId: "1:359912123491:web:d5feb4c3ae0fbaf2e59c56",
  measurementId: "G-6WZ3M9WPT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {auth}