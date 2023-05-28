import React from 'react';
// import './SessionCard.css';

const SessionCard = ({ session }) => {
  const { name, email, date, time, subject, topic, recommendedGrade, additionalInfo, resourceLinks } = session;

  return (
    <div className="session-card">
      <h3 className="session-card-title">{topic}</h3>
      <p>
        <strong>Hosted By:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p>
        <strong>Recommended Grade:</strong> {recommendedGrade}
      </p>
      <p>
        <strong>Additional Information:</strong> {additionalInfo}
      </p>
      {resourceLinks && resourceLinks.length > 0 && (
        <div>
          <strong>Resource Links:</strong>
          <ul>
            {resourceLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SessionCard;
