import { initializeApp } from "firebase/app";
//Auth
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGL9aOCN7Uv-JRlAWToEIBcmmwKPpa4WE",
  authDomain: "crypto-twt.firebaseapp.com",
  projectId: "crypto-twt",
  storageBucket: "crypto-twt.appspot.com",
  messagingSenderId: "383242689960",
  appId: "1:383242689960:web:9bcb7f51f39501b24ed19d",
  measurementId: "G-T26P62F26L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const logIn = () => {
  signInWithPopup(auth, provider).catch((error) => {
    alert(error.message);
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User Logged Out");
    })
    .catch((err) => {
      alert(err.message);
    });
};
