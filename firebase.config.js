import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_DmIoXYY2sS1J_fbvbZOYX0kukCW7QYk",
  authDomain: "pulgueta-crud.firebaseapp.com",
  projectId: "pulgueta-crud",
  storageBucket: "pulgueta-crud.appspot.com",
  messagingSenderId: "237627427676",
  appId: "1:237627427676:web:9829a062d0c5c784b7cf99",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);