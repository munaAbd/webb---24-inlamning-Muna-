import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Eller 'getDatabase' om du använder Realtime Database

const firebaseConfig = {
  apiKey: "AlZaSyBnSYEGolzunbfyrIW84C1rOyeA4fhQtF8",  // Detta är din Web API Key
  authDomain: "myreactappwebirebase-ai-app.firebaseapp.com",  // authDomain från ditt projekt
  databaseURL: "https://myreactappwebirebase-ai-app-default-rtdb.europe-west1.firebasedatabase.app",  // Din Realtime Database URL
  projectId: "myreactappwebirebase-ai-app",  // Ditt Project ID
  storageBucket: "myreactappwebirebase-ai-app.appspot.com",  // Din storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // Ersätt med din Messaging sender ID från Firebase Console
  appId: "YOUR_APP_ID"  // Ersätt med din App ID från Firebase Console
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Eller använd getDatabase(app) om du jobbar med Realtime Database

export { db };
