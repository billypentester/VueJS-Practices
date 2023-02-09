import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCiArD371kKtKDEvn7ToObwY9GF-aYbACY",
    authDomain: "cool-agility-360417.firebaseapp.com",
    projectId: "cool-agility-360417",
    storageBucket: "cool-agility-360417.appspot.com",
    messagingSenderId: "756635670934",
    appId: "1:756635670934:web:a2952926e0dd85463ee5b7"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };




