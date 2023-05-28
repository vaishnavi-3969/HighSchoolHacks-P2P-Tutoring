import React from 'react';
import NavBar from './NavBar';
import './Messages.css';

export default function Messages() {
  return (
    <>
      <NavBar />
      <div className="messages-container">
        <div className="messages-header">
          <h2 className="messages-heading">Messages</h2>
        </div>
        <div className="messages-content">
          <div className="message">
            <div className="message-sender">John Doe</div>
            <div className="message-text">Hey, how are you?</div>
          </div>
          <div className="message">
            <div className="message-sender">Jane Smith</div>
            <div className="message-text">I'm good, thanks! How about you?</div>
          </div>
          <div className="message">
            <div className="message-sender">John Doe</div>
            <div className="message-text">I'm doing great, thanks for asking!</div>
          </div>
        </div>
      </div>
    </>
  );
}
