import React, { useState, useLayoutEffect } from 'react';
import chatStore from '../store/chat';

const AnotherPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(()=> {
    chatStore.subscribe(setChatState);
    chatStore.init();
    
  }, []);

  const onFormSubmit = e => {
    e.preventDefault();
    const messageObject = {
      person: "Another-Person",
      text: e.target.elements.messageInput.value.trim()
    };
    chatStore.sendMessage(messageObject);
    document.getElementById('messageForm').reset();
  };

  return (
    <div className="container">
      <h2 style={{float: 'right'}}>
        Fungible
      </h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div style={{float: 'right'}} key={index}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>  
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <label htmlFor="messageInput">Message Text:</label>
        <input
          type="text" 
          id="messageInput"
          name="messageInput"
          placeholder="Enter text here..."
          required
           />
           <button type="submit">Send</button>
           <button className="clear-button" onClick={() => chatStore.clearChat()}>Clear Chat</button>
      </form>
    </div>
  );
};

export default AnotherPerson;
