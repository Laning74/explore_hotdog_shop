// Import the functions you need from the SDKs you need
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

console.log(db);

// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth"; // usikker på denne linja
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBp71VO5Dk00a3xY89GMemBXukkcfIOLXc",
//   authDomain: "next-hotdog-shops.firebaseapp.com",
//   projectId: "next-hotdog-shops",
//   storageBucket: "next-hotdog-shops.appspot.com",
//   messagingSenderId: "238598823490",
//   appId: "1:238598823490:web:976cab1975f5f586be97db",
//   //   apiKey: process.env.NEXT_PUBLIC_APIKEY,
//   //   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   //   projectId: process.env.NEXT_PUBLIC_PROJECTID,
//   //   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
//   //   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
//   //   appId: process.env.NEXT_PUBLIC_APPID,
// };

// const app = initializeApp(firebaseConfig);

// // export const auth = getAuth(app); // usikker på denne linja
// const db = getFirestore();
// export { db };

// console.log(db);
