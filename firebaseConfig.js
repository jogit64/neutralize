import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxqoX0ba2tUreWm01z4caR41SiQRSCPqk",
  authDomain: "neutral-6a6ef.firebaseapp.com",
  projectId: "neutral-6a6ef",
  storageBucket: "neutral-6a6ef.appspot.com",
  messagingSenderId: "124012310166",
  appId: "1:124012310166:web:f9b8fe60085cdf29189cb7",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
