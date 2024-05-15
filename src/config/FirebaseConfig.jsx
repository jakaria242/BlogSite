// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX59Dcf9xjZ6QUj0gtuGd8Eo1ma5yoXi0",
  authDomain: "myblog-d96b1.firebaseapp.com",
  projectId: "myblog-d96b1",
  storageBucket: "myblog-d96b1.appspot.com",
  messagingSenderId: "728205568119",
  appId: "1:728205568119:web:2132151779724982863e72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const fireDb = getFirestore(app);
 const auth = getAuth(app);
 const storage = getStorage(app);

 export {fireDb, auth, storage}

export default firebaseConfig;