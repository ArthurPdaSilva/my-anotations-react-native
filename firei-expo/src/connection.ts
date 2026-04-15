import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
	// @ts-expect-error - essa função existe, mas o TypeScript não tem as definições de tipo para ela
	getReactNativePersistence,
	initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const requiredEnvVars = {
	EXPO_PUBLIC_FIREBASE_API_KEY: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
	EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN:
		process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
	EXPO_PUBLIC_FIREBASE_PROJECT_ID: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
	EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET:
		process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
	EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
		process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	EXPO_PUBLIC_FIREBASE_APP_ID: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

for (const [key, value] of Object.entries(requiredEnvVars)) {
	if (!value) {
		throw new Error(`Missing environment variable: ${key}`);
	}
}

const firebaseConfig = {
	apiKey: requiredEnvVars.EXPO_PUBLIC_FIREBASE_API_KEY,
	authDomain: requiredEnvVars.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: requiredEnvVars.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: requiredEnvVars.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: requiredEnvVars.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: requiredEnvVars.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
