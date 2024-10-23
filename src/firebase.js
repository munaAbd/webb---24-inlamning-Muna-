import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { db } from './firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbeUUpag4xJjfW9pjiMQoSJ66GyjriAJ0",
  authDomain: "myreactappwebirebase-ai-app.firebaseapp.com",
  databaseURL: "https://myreactappwebirebase-ai-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myreactappwebirebase-ai-app",
  storageBucket: "myreactappwebirebase-ai-app.appspot.com",
  messagingSenderId: "217769927767",
  appId: "1:217769927767:web:28009541757ad4e209af12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
// Initiera och exportera Realtime Database
export const db = getDatabase(app);