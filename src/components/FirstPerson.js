import React, { useState, useLayoutEffect } from 'react';
import chatStore from '../store/chat';

console.log('FoyPoy')

const FirstPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(()=> {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  return (
    <div className="container">
      <h2>
        Mycroft
      </h2>
      <div className="chat-box">
        {chatState.data.map(message => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>  
          </div>
        ))}
      </div>
      <form id="messageForm">
        <label htmlFor="messageInput">Message Text:</label>
        <input
          type="text" 
          id="messageInput"
          name="messageInput"
          placeholder="Enter text here..."
          required
           />
           <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FirstPerson;
