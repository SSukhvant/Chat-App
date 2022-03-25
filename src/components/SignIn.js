import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js';
import { FcGoogle } from 'react-icons/fc';
import './Style.scss';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className='app__signin'>
            <button onClick={signInWithGoogle}><FcGoogle/> Sign in with Google</button>
        </div>
    )
}

export default SignIn