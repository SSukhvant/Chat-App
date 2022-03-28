import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import Send from './Send'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(60).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div className='app__chat'>
            <SignOut />
            <div className='chat__section'>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <Send scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat