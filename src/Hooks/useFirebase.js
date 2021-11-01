import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import firebaseInitConfige from "../Pages/Firebase/firebase.init";
firebaseInitConfige()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLodaing] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLodaing(true);
        return signInWithPopup(auth, googleProvider);

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
        setError,
    }
}

export default useFirebase;