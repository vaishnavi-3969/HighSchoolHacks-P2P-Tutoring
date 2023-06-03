import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Tutors.css';

export default function Tutors() {
  return (
    <>
      <NavBar />
      <div className="tutors-container">
        <div className="tutor-card">
          <h3>Previous Sessions</h3>
          <p>View/Refer to previous tutoring sessions.</p>
          <Link to="/previous_sessions" className="button">
            View Sessions
          </Link>
        </div>
        <div className="tutor-card">
          <h3>Create a Session</h3>
          <p>Create and schedule a new tutoring session.</p>
          <Link to="/create_session" className="button">
            Create Session
          </Link>
        </div>
        <div className="tutor-card">
          <h3>Notifications</h3>
          <p>Stay updated with the latest notifications.</p>
          <Link to="/tutor_notifications" className="button">
            Check Notifications
          </Link>
        </div>
        <div className="tutor-card">
          <h3>Messages</h3>
          <p>Access your messages and communicate with tutees.</p>
          <Link to="/tutor_messages" className="button">
            View Messages
          </Link>
        </div>
      </div>
    </>
  );
}
