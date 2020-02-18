import React, { useState } from 'react';
import chatStore from '../store/chat';

const FirstPerson = () => {
  const [chatState, setChateState] = useState({});
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
        <label for="messageInput">Message Text:</label>
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
