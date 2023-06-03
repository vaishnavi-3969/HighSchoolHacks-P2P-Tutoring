import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Tutees.css';

export default function Tutees() {
  return (
    <>
      <NavBar />
      <div className="tutees-container">
        <div className="tutee-card">
          <h3>Explore All Sessions</h3>
          <p>Find and explore all available sessions.</p>
          <Link to="/all_sessions" className="button">
            Explore
          </Link>
        </div>
        <div className="tutee-card">
          <h3>View Upcoming Sessions</h3>
          <p>Check out the sessions scheduled for the future.</p>
          <Link to="/upcoming_sessions" className="button">
            View Upcoming
          </Link>
        </div>
        <div className="tutee-card">
          <h3>Check Notifications</h3>
          <p>Stay updated with the latest notifications.</p>
          <Link to="/tutee_notifications" className="button">
            Check Notifications
          </Link>
        </div>
        <div className="tutee-card">
          <h3>View Messages</h3>
          <p>Access your messages and communicate with others.</p>
          <Link to="/tutee_messages" className="button">
            View Messages
          </Link>
        </div>
      </div>
    </>
  );
}
