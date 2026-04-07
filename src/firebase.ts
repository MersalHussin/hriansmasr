import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// Go to Firebase Console -> Project Settings -> General -> Your apps -> Firebase SDK snippet -> Config
const firebaseConfig = {
  apiKey: "AIzaSyDUzxSHFRBQ1vjyeiBHBUb9xdNERKkxdZg",
  authDomain: "hriansmasr.firebaseapp.com",
  projectId: "hriansmasr",
  storageBucket: "hriansmasr.firebasestorage.app",
  messagingSenderId: "621080710134",
  appId: "1:621080710134:web:ad439827ac6a794f5095d7",
  measurementId: "G-VQFM9JKCV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
