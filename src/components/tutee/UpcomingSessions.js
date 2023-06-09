import React, { useState, useEffect } from 'react';
import SessionCard from './SessionCard';
import { getDatabase, ref, onValue } from "firebase/database";
import './UpcomingSession.css';
import { initializeApp } from "firebase/app";
import NavBar from './NavBar';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "hacks-df68f.firebaseapp.com",
  projectId: "hacks-df68f",
  storageBucket: "hacks-df68f.appspot.com",
  messagingSenderId: "361173421570",
  appId: "1:361173421570:web:79e4391a42d4564c8f211b",
  measurementId: "G-24BW9CM14D"
};

const UpcomingSession = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([]);

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
          const upcomingSessionArray = sessionArray.filter(
            (session) => session.date >= currentDate
          );
          setUpcomingSessions(upcomingSessionArray);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
    <NavBar/>
      <h2 className="upcoming-session-heading">Upcoming Sessions</h2>
      {upcomingSessions.length > 0 ? (
        <div className="session-card-container">
          {upcomingSessions.map((session, index) => (
            <SessionCard key={index} session={session} />
          ))}
        </div>
      ) : (
        <p>No upcoming sessions available.</p>
      )}
    </div>
  );
};

export default UpcomingSession;
