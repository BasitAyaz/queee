// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw2zQyHsG_LcHGQqTk63AaJF9gUk0MI0w",
  authDomain: "queee-1a9e5.firebaseapp.com",
  projectId: "queee-1a9e5",
  storageBucket: "queee-1a9e5.appspot.com",
  messagingSenderId: "119080454249",
  appId: "1:119080454249:web:81a4b5ded8832c610f3af8",
  measurementId: "G-JWG4FPBP4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
