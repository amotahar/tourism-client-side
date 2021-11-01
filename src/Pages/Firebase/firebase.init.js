import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitConfige = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitConfige;