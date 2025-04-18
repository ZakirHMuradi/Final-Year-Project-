// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD3O57iLZsKFGNc3w00DwiKNt3SE1687DI",
	authDomain: "ai-analysis-b5c73.firebaseapp.com",
	projectId: "ai-analysis-b5c73",
	storageBucket: "ai-analysis-b5c73.firebasestorage.app",
	messagingSenderId: "895919952707",
	appId: "1:895919952707:web:9ab9df50069df35c0695f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
