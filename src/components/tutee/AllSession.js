import React, { useState, useEffect } from 'react';
import SessionCard from './SessionCard';
import { getDatabase, ref, onValue } from "firebase/database";
import './AllSession.css';
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

 ;
const AllSession = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app)
      const sessionsRef = ref(db, 'session');
      onValue(sessionsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const sessionArray = Object.values(data);
          setSessions(sessionArray);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
    <NavBar/>
      <h2 className="all-session-heading">All Sessions</h2>
      <div className="session-card-container">
        {sessions.map((session, index) => (
          <SessionCard key={index} session={session} />
        ))}
      </div>
    </div>
  );
};

export default AllSession;
