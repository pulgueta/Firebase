import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? "",
  authDomain: "pulgueta-crud.firebaseapp.com",
  projectId: "pulgueta-crud",
  storageBucket: "pulgueta-crud.appspot.com",
  messagingSenderId: "237627427676",
  appId: process.env.FIREBASE_APP_ID ?? "",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);