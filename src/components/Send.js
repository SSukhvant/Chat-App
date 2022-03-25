import React, { useState } from 'react'
import { db, auth } from '../firebase.js'
import firebase from 'firebase/compat/app'
import {IoMdSend} from 'react-icons/io'

function Send({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input placeholder='Type a message' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button type="submit"><IoMdSend/></button>
                </div>
            </form>
        </div>
    )
}

export default Send