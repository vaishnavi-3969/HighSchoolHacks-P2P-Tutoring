import React from 'react';
import NavBar from './NavBar';
import './Notifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Notifications() {
  return (
    <>
      <NavBar />
      <div className="notifications-container">
        <div className="notifications-header">
          <h2 className="notifications-heading">Notifications</h2>
        </div>
        <div className="notifications-content">
          <div className="notification">
            <div className="notification-icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="notification-text">New event starting soon!</div>
          </div>
          <div className="notification">
            <div className="notification-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="notification-text">You have a new message</div>
          </div>
          <div className="notification">
            <div className="notification-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="notification-text">New friend request</div>
          </div>
        </div>
      </div>
    </>
  );
}
