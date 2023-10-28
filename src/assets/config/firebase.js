// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO9wgZ_Qv23a0VwjVoL6Brpx6Q66_Cd6A",
  authDomain: "contactapp-6ddd0.firebaseapp.com",
  projectId: "contactapp-6ddd0",
  storageBucket: "contactapp-6ddd0.appspot.com",
  messagingSenderId: "1006904141181",
  appId: "1:1006904141181:web:26ecf1f1f3c4eaa1af1814"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);