import React, { useState } from 'react';
import NavBar from './NavBar';
import './CreateSession.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { useAuth0 } from "@auth0/auth0-react";

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

const CreateSession = () => {
  const { user } = useAuth0();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [recommendedGrade, setRecommendedGrade] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [resourceLinks, setResourceLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
    const profileRef = ref(db, 'session');
    const session_data = {
      name: user.name,
      email: user.email,
      date,
      time,
      subject,
      topic,
      recommendedGrade,
      additionalInfo,
      resourceLinks,
    }
    push(profileRef, session_data)
      .then(() => {
        alert("Session Created Successfully");

        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setSubject('');
        setTopic('');
        setRecommendedGrade('');
        setAdditionalInfo('');
        setResourceLinks([]);
      })
      .catch((error) => {
        console.error('Error adding session: ', error);
      });
  };

  const handleResourceLinkChange = (e, index) => {
    const updatedLinks = [...resourceLinks];
    updatedLinks[index] = e.target.value;
    setResourceLinks(updatedLinks);
  };

  const addResourceLink = () => {
    setResourceLinks([...resourceLinks, '']);
  };

  const removeResourceLink = (index) => {
    const updatedLinks = [...resourceLinks];
    updatedLinks.splice(index, 1);
    setResourceLinks(updatedLinks);
  };

  return (
    <div>
      <NavBar />
      <h2 className="create-session-heading">Create Session</h2>
      <form className="create-session-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input className="form-input" type="text" value={user.name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input className="form-input" type="email" value={user.email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Date:
          <input className="form-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Time:
          <input className="form-input" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Subject:
          <input className="form-input" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Topic:
          <input className="form-input" type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
        </label>
        <br />
        <label className="form-label">
          Recommended Grade:
          <input
            className="form-input"
            type="text"
            value={recommendedGrade}
            onChange={(e) => setRecommendedGrade(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="form-label">
          Additional Information:
          <textarea className="form-textarea" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)}></textarea>
        </label>
        <br />
        <label className="form-label">
          Reference Resource Links:
        </label>
        {resourceLinks.map((link, index) => (
          <div className="resource-link-container" key={index}>
            <input
              className="form-input resource-link-input"
              type="text"
              value={link}
              onChange={(e) => handleResourceLinkChange(e, index)}
              placeholder="Enter link URL"
              required
            />
            <button className="remove-link-button" type="button" onClick={() => removeResourceLink(index)}>
              Remove
            </button>
          </div>
        ))}
        <button className="add-link-button" type="button" onClick={addResourceLink}>
          Add Resource Link
        </button>
        <br />
        <button className="submit-button" type="submit">Create a Session</button>
      </form>
    </div>
  );
};

export default CreateSession;
