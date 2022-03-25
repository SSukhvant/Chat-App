import React from 'react';
import { auth } from '../firebase';
import {FaPowerOff} from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';

const SignOut = () => {
  return (
    <div className='app__signout'>
      <h2><TiMessages/> Chat App</h2>
      <button onClick={() => auth.signOut()}><FaPowerOff/></button>
    </div>
  )
}

export default SignOut;
