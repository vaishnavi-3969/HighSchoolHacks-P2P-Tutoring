import React from 'react';
import './SessionCard.css';

const generateICalLink = (session) => {
  // Generate iCal data (You can customize this based on your requirements)
  const iCalData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//Your App//EN
BEGIN:VEVENT
UID:${session.id} // Unique identifier for the session
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
DTSTART:${session.date}T${session.time} // Format: YYYY-MM-DDTHH:mm (e.g., 2023-05-27T09:00)
DTEND:${session.date}T${session.time} // Format: YYYY-MM-DDTHH:mm (e.g., 2023-05-27T10:00)
SUMMARY:${session.topic}
DESCRIPTION:${session.additionalInfo}
LOCATION:${session.location} // Optional: Add session location if available
END:VEVENT
END:VCALENDAR`;

  // Encode iCal data to be used in a URL
  const encodedICalData = encodeURIComponent(iCalData);

  // Generate Google Calendar link
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${session.topic}&dates=${session.date}T${session.time}/${session.date}T${session.endTime}&details=${session.additionalInfo}`;

  // Create iCal download link
  const iCalDownloadLink = `data:text/calendar;charset=utf-8,${encodedICalData}`;

  return { iCalDownloadLink, googleCalendarLink };
};

const SessionCard = ({ session }) => {
  const { name, email, date, time, subject, topic, recommendedGrade, additionalInfo, resourceLinks } = session;

  const handleRSVP = () => {
    const { iCalDownloadLink, googleCalendarLink } = generateICalLink(session);

    // Open the iCal download link or redirect to the Google Calendar link
    window.open(iCalDownloadLink || googleCalendarLink);
  };

  return (
    <div className="session-card">
      <h3 className="session-card-title">{topic}</h3>
      <p>
        <strong>Hosted By:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong>{email}
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
                  Ref. Link
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="rsvp-button" onClick={handleRSVP}>
        RSVP
      </button>
    </div>
  );
};

export default SessionCard;
