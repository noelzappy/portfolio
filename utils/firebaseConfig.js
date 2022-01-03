import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcUSc6MIS_nUcHruLH8WQTDqpKIFPq9cc",
  authDomain: "zappy-ed1db.firebaseapp.com",
  databaseURL: "https://zappy-ed1db-default-rtdb.firebaseio.com",
  projectId: "zappy-ed1db",
  storageBucket: "zappy-ed1db.appspot.com",
  messagingSenderId: "388725831879",
  appId: "1:388725831879:web:bf47451f57d75856cce6e2",
  measurementId: "G-WDR2YGPN92",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
