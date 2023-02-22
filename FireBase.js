import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCY377sgErn1pdw6F-Qm3oGwfvloYAj7dM",
  authDomain: "personalportfolio-d55bf.firebaseapp.com",
  projectId: "personalportfolio-d55bf",
  storageBucket: "personalportfolio-d55bf.appspot.com",
  messagingSenderId: "520363434277",
  appId: "1:520363434277:web:4ac70fe225fadceae73acc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);