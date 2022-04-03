import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY ?? "",
  authDomain: "pulgueta-crud.firebaseapp.com",
  projectId: "pulgueta-crud",
  storageBucket: "pulgueta-crud.appspot.com",
  messagingSenderId: "237627427676",
  appId: process.env.FIREBASE_APP_ID ?? "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
    const ref = await addDoc(collection(db, "posts"), {
        title: "CRUD with Firebase",
        author: "Firebase",
        descBody: "CRUD with Firebase is awesome",
        createdAt: db.FieldValue.serverTimestamp(),
    })

    console.log(ref.id);
} catch (error) {
    console.log(error)
}