import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXEF4jZppIh9QBZu4milhVB87np4dCvbE",
  authDomain: "ortamx-2d6a2.firebaseapp.com",
  projectId: "ortamx-2d6a2",
  storageBucket: "ortamx-2d6a2.firebasestorage.app",
  messagingSenderId: "264844984038",
  appId: "1:264844984038:web:176ac4f610f840d1168527"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };
