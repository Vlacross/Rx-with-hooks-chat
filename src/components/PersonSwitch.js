import React, { useSate, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import chatStore from '../store/chat';

const PersonSwitch = () => {
  const [ chatState, setChatState ] = useState(chatStore.initialState);
  const location = window.location.href.split('/')[3];

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();

    // return () => {
    //   chatStore.unsubscribe(setChatState)
    // }
  }, [])

  const messageNotification = chatState.newDataCount > 0 && (<span className="notify">{chatState.newDataCount}</span>);

  return (
    <div className="switcher-div">
      <Link to="first-person">
      <button className="switcher">
        Person1
        {location !== 'first-person' && location.length > 1 && messageNotification}
      </button>
      </Link>
      <Link to="second-person">
        <button className="switcher">
          Person2
          {location !== 'second=person' && messageNotification}
        </button>
      </Link>
    </div>
  );
}

export default PersonSwitch;
