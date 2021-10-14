import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,GithubAuthProvider ,FacebookAuthProvider  } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubprovider = new GithubAuthProvider();
    const facebookprovider = new FacebookAuthProvider();

    const singInusingFaceboo=()=>{
        signInWithPopup(auth, facebookprovider)
            .then((result) => {

            })
    }
      const singInUsingGithub=()=>{
          signInWithPopup(auth, gitHubprovider)
              .then(result=>{
                  console.log(result);
              })
      }
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        singInUsingGithub,
        singInusingFaceboo
    }
}

export default useFirebase;