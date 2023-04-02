import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuzBGdW8YAMwGAqBMJ4Hw0FOZaJ5O3EJ8",
  authDomain: "react-chat-5f100.firebaseapp.com",
  projectId: "react-chat-5f100",
  storageBucket: "react-chat-5f100.appspot.com",
  messagingSenderId: "444067222406",
  appId: "1:444067222406:web:6980aacd4ad946a831d207",
  measurementId: "G-30GZK379VY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();