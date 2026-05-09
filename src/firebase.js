import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIlcEE6K4MdBQ7_nRa_LRJnZwPuRUimxE",
  authDomain: "spotify-clone-666ad.firebaseapp.com",
  projectId: "spotify-clone-666ad",
  storageBucket: "spotify-clone-666ad.firebasestorage.app",
  messagingSenderId: "781552443575",
  appId: "1:781552443575:web:72d28a5a33657a79336d32",
  measurementId: "G-LQN422BC0M"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);