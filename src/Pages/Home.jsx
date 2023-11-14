import React, { useContext, useEffect, useMemo, useState } from "react";
import { sendMessage } from '../services/messages'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, limit, orderBy, query } from "firebase/firestore";
import db from "../firebase";
import context from "../context/context";
import { CardHeader } from "react-bootstrap";

function Home() {
  const [text, setText] = useState('');
  const { user } = useContext(context)
  
  const [messages, loadingMessage, error] = useCollection(
    query(collection(db, 'messages'), orderBy('created', 'asc'), limit(10)), 
    {
    snapshotListenOptions: { includeMetadataChanges: true }
  });
  
  const handleText = ({target}) => {
    setText(target.value);
  }
  const send = async (e) => {
    e.preventDefault();
    sendMessage(text, user);
    console.log(text);
    setText('');
  }
  if(!loadingMessage) messages.docs.map(doc => console.log('value: ', doc.data()))
  
  return (
    <section className="chat">
    <CardHeader className="chat-header">
      Saúde
      <img src={ user.photoURL } alt="" />
    </CardHeader>
    
    <section className="chat-section">
      {!loadingMessage && messages.docs.map((doc, index) => {
        const curUser = doc.data();
        return (
          <div key={`msg-${index}`} className={`message ${
            curUser.user.uid == user.uid ? 'my-text' : 'others-text'
            }`}> 
          <span>{curUser.user.name}</span>
          <img src={curUser.user.photoURL || ''} alt="" />
          <p>{curUser.message}</p>
          </div>
        )
      })}
    </section>
      <div className="chat-input">
        <form action="" onSubmit={send}>
          <input type="text" onChange={handleText} value={text}/>
          <button>
            {'>'}
          </button>
        </form>
      </div>
    <footer>
      <button>?</button>
    </footer>
    </section>
  );
}

export default Home;