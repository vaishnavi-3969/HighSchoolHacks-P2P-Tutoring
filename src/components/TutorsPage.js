import React, { useState, useEffect } from 'react';
import TutorCard from './TutorCard';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './TutorsPage.css';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: 'hacks-df68f.firebaseapp.com',
  projectId: 'hacks-df68f',
  storageBucket: 'hacks-df68f.appspot.com',
  messagingSenderId: '361173421570',
  appId: '1:361173421570:web:79e4391a42d4564c8f211b',
  measurementId: 'G-24BW9CM14D',
};

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const tutorsRef = ref(database, 'tutor');

      onValue(tutorsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const tutorArray = Object.values(data);
          setTutors(tutorArray);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="all-tutors-heading">All Tutors</h2>
      <div className="tutor-card-container">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorsPage;
