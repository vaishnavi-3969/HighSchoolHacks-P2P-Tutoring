import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './TutorCard.css';

const TutorCard = ({ tutor }) => {
  const {
    name,
    linkedUsername,
    githubUsername,
    location,
    school,
    grade,
    fees,
    subjectExpertise,
  } = tutor;

  return (
    <Card className="tutor-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Location:</strong> {location}
        </Card.Text>
        <Card.Text>
          <strong>School:</strong> {school}
        </Card.Text>
        <Card.Text>
          <strong>Grade:</strong> {grade}
        </Card.Text>
        <Card.Text>
          <strong>Fees:</strong> {fees}
        </Card.Text>
        <Card.Text>
          <strong>Subject Expertise:</strong> {subjectExpertise}
        </Card.Text>
        <div className="social-links">
          {linkedUsername && (
            <a
              href={`https://www.linkedin.com/in/${linkedUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          )}
          {githubUsername && (
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          )}
        </div>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
};

export default TutorCard;
