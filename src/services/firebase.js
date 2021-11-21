import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzZ1Er31XjJg55p9HRdE9xtIs7OIdiACo",
  authDomain: "mykala-api.firebaseapp.com",
  projectId: "mykala-api",
  storageBucket: "mykala-api.appspot.com",
  messagingSenderId: "656287371760",
  appId: "1:656287371760:web:41bfa8cba0912fcb884d35",
  measurementId: "G-64156QMEJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
