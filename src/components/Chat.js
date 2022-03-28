import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import useSound from 'use-sound';
import Send from './Send';
import SignOut from './SignOut';
import sent from '../sound/notification.mp3';
import received from '../sound/recieved.mp3';

function Chat() {
    const [playOn] = useSound(
        sent,
        { volume: 0.25 }
      );
      const [playOff] = useSound(
          received,
        { volume: 0 }
      );
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
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="profile" />
                            <p>{text}</p>
                            {
                                uid === auth.currentUser.uid ? playOn() : playOff()
                             }
                        </div>
                     
                    </div>
                ))}
            </div>
            <Send scroll={scroll} />
            <div ref={scroll}></div>
            </div>
    )
}

export default Chat