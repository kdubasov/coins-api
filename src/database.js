import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArfk3tVIuyrqSlKiDLZ3Z5AjBI3KyVTNs",
    authDomain: "cryptoquick-47135.firebaseapp.com",
    projectId: "cryptoquick-47135",
    storageBucket: "cryptoquick-47135.appspot.com",
    messagingSenderId: "574950436738",
    appId: "1:574950436738:web:851f52a4b0a52a20f1e99b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app);
export const authDB = getAuth(app);
export default app;