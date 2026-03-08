// ─── Firebase Configuration ────────────────────────────────────────────────
// Replace the values below with your Firebase project credentials.
// Find them at: Firebase Console → Viscano project → ⚙️ Settings → Your apps
//
// NOTE: Vite exposes env vars prefixed with VITE_ to the browser.
//       Store secrets in .env.local (already git-ignored by default).

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services — import only the ones you need in each file
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
