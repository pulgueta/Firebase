import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "pulgueta-crud.firebaseapp.com",
  projectId: "pulgueta-crud",
  storageBucket: "pulgueta-crud.appspot.com",
  messagingSenderId: "237627427676",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);