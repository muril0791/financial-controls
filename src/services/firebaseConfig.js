// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7CWPiSrhWm-JYZRl16fxpOz2MFh5nsi8",
  authDomain: "financial-controls-e2116.firebaseapp.com",
  projectId: "financial-controls-e2116",
  storageBucket: "financial-controls-e2116.appspot.com",
  messagingSenderId: "413681735324",
  appId: "1:413681735324:web:7b28a78352398966ba3f59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Cria a instância do Firestore
const db = getFirestore(app);

export { db };
export default app;
