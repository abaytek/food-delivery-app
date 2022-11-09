import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApv5mxAFA7EvEronkW8tlCghe8lxCCrYs",
  authDomain: "food-delivery-cb8f4.firebaseapp.com",
  projectId: "food-delivery-cb8f4",
  storageBucket: "food-delivery-cb8f4.appspot.com",
  messagingSenderId: "267225564163",
  appId: "1:267225564163:web:59d7f4b64a69d1ef393a36",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
