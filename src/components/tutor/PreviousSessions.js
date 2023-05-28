import React, { useState, useEffect } from 'react';
import SessionCard from '../tutee/SessionCard';
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import NavBar from './NavBar';
import './PreviousSession.css';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "hacks-df68f.firebaseapp.com",
  projectId: "hacks-df68f",
  storageBucket: "hacks-df68f.appspot.com",
  messagingSenderId: "361173421570",
  appId: "1:361173421570:web:79e4391a42d4564c8f211b",
  measurementId: "G-24BW9CM14D"
};

const PreviousSessions = () => {
  const [previousSessions, setPreviousSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);
      const sessionsRef = ref(db, 'session');
      const currentDate = new Date().toISOString().split('T')[0];

      onValue(sessionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const sessionArray = Object.values(data);
          const previousSessionArray = sessionArray.filter(
            (session) => session.date < currentDate
          );
          setPreviousSessions(previousSessionArray);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar/>
      <h2 className="previous-sessions-heading">Previous Sessions</h2>
      <p>The sessions already ended</p>
      {previousSessions.length > 0 ? (
        <div className="session-card-container">
          {previousSessions.map((session, index) => (
            <SessionCard key={index} session={session} showRSVP={false} />
          ))}
         
        </div>
      ) : (
        <p>No previous sessions available.</p>
      )}
    </div>
  );
};

export default PreviousSessions;
