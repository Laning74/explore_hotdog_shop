import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnNxt5KQA8_xkSk9rLwCXVVQsXlP65wkQ",
  authDomain: "hotdog-shops-nextjs.firebaseapp.com",
  projectId: "hotdog-shops-nextjs",
  storageBucket: "hotdog-shops-nextjs.appspot.com",
  messagingSenderId: "579514919622",
  appId: "1:579514919622:web:4d352fbd714668618845c7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
export { db };
