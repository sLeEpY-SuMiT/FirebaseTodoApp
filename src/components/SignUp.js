import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore'
import { Navigate } from 'react-router-dom'
import { db } from '../config'
import { Button } from 'react-bootstrap';

const SignUp = () => {
    const [user, setUser] = useState(null)
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            const result = await signInWithPopup(auth, provider);

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            //setUser(user);
            console.log(user);

            const res = await addDoc(collection(db, "users"), { userName: user.displayName, email: user.email, photoURL: user.photoURL, id: user.uid });
            console.log(res);
            setUser(user);
            localStorage.setItem("user", JSON.stringify({ userName: user.displayName, email: user.email, photoURL: user.photoURL, id: user.uid }));
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    };


    return (
        <React.Fragment>
            {
                user ? <Navigate to={"/AddTodo"} /> : (
                    <div style={{ textAlign: 'center', verticalAlign: 'sub', marginTop: '200px' }} >
                        <Button variant='success' type="button"  onClick={signInWithGoogle} > Sign Up
                        </Button>
                    </div>
                )
            }

        </React.Fragment>
    )
}

export default SignUp