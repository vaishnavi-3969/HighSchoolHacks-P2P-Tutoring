import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Font, { Text } from 'react-font'
import Tutors from './components/tutor/Tutors';
import Tutees from './components/tutee/Tutees';
import Profile from './components/Profile';
import PreviousSessions from './components/tutor/PreviousSessions';
import CreateSession from './components/tutor/CreateSession';
import TutorNotifications from './components/tutor/Notifications';
import TuteeNotification from './components/tutee/Notifications';
import TutorMessages from './components/tutor/Messages';
import TuteeMessages from './components/tutee/Messages';
import AllSession from './components/tutee/AllSession';
import UpcomingSessions from './components/tutee/UpcomingSessions';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/tutees" element={<Tutees />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/previous_sessions" element={< PreviousSessions />} />
            <Route path="/create_session" element={< CreateSession />} />
            <Route path="/tutor_notifications" element={< TutorNotifications />} />
            <Route path="/tutor_messages" element={< TutorMessages />} />
            <Route path="/all_sessions" element={<AllSession />} />
            <Route path="/upcoming_sessions" element={< UpcomingSessions />} />
            <Route path="/tutee_notifications" element={<TuteeNotification />} />
            <Route path="/tutee_messages" element={<TuteeMessages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
