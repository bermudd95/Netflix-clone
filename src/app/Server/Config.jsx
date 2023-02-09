import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc1nEdKSJRUUEO3BTZGgtOxTVgDq56-70",
  authDomain: "netflix-02-ea92c.firebaseapp.com",
  projectId: "netflix-02-ea92c",
  storageBucket: "netflix-02-ea92c.appspot.com",
  messagingSenderId: "186153344493",
  appId: "1:186153344493:web:b749044e8bcb60a8a39be4"
};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
