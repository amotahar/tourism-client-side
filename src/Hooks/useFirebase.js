import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import firebaseInitConfige from "../Pages/Firebase/firebase.init";
firebaseInitConfige()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLodaing] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        setIsLodaing(true);
        return signInWithPopup(auth, googleProvider);

    }
  
    const signInWithGitHub = () => {
        setIsLodaing(true);
        return signInWithPopup(auth, gitHubProvider);

    }    
   
    const logOut = () => {
        setIsLodaing(true);
        signOut(auth).then(() => {
            setUser({});
        })
            .finally(() => setIsLodaing(false));
    }
  

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLodaing(false);
        });
        return unsubscribe;
    }, []);

    return {
        user,
        isLoading,
        error,
        logOut,
        signInWithGoogle,
        signInWithGitHub,
        setError,
    }
}

export default useFirebase;