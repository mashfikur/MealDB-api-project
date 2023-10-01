// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlR0MZDw87RWG8BW2TskbEI26wBPwP_Y",
  authDomain: "foodictionary-5975a.firebaseapp.com",
  projectId: "foodictionary-5975a",
  storageBucket: "foodictionary-5975a.appspot.com",
  messagingSenderId: "262351001998",
  appId: "1:262351001998:web:eb6d652ba8483592f92cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
