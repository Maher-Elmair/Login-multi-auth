// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OTl6i7Qn_mcy34fLfz1DgzI_Yyqydts",
  authDomain: "login-multi-auth.firebaseapp.com",
  projectId: "login-multi-auth",
  storageBucket: "login-multi-auth.firebasestorage.app",
  messagingSenderId: "638202432615",
  appId: "1:638202432615:web:a69ce8a6680aad056298c2",
  measurementId: "G-6D3ZL55QNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ✅ إعداد المصادقة
export const auth = getAuth(app);

// ✅ مزودي تسجيل الدخول
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
export const appleProvider = new OAuthProvider('apple.com');
