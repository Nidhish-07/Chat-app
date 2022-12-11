// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALeP2YHDG2djrdKbJrrw8Xtj7QEtaVJaU",
  authDomain: "chat-app-8cd53.firebaseapp.com",
  projectId: "chat-app-8cd53",
  storageBucket: "chat-app-8cd53.appspot.com",
  messagingSenderId: "1076911709907",
  appId: "1:1076911709907:web:8a853bbe953e9d8bf3be26",
  measurementId: "G-PCF08CHF0V",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
