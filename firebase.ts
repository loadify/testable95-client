import { initializeApp } from "firebase/app";

import type { FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export default app;
