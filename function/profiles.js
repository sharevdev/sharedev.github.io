import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1C6F9Z29vX9pRXv34Zphei_v57NlD5Rk",
  authDomain: "app-touchpointev.firebaseapp.com",
  databaseURL:
    "https://app-touchpointev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "app-touchpointev",
  storageBucket: "app-touchpointev.appspot.com",
  messagingSenderId: "670484969234",
  appId: "1:670484969234:web:9e425b4fc8b494400765cb",
  measurementId: "G-B8B9RVYTCB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, "USER_VISIT_FOUNDERS_PROFILE");
