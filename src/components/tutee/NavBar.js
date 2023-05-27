import {Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';

export default function NavBar() {
    return (
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Peer Tutoring Network</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find">Find Tutors</Link>
          </li>
          <li>
            <Link to = "/my_sessions">My Sessions</Link>
          </li>
          <li>
            <Link to = "/become_tutor">Become a Tutor</Link>
          </li>
          <li>
            <Link to = "/notifications"></Link>
          </li>
          <li>
            <Link to = "/chat"></Link>
          </li>
          <li>
            <Link to = "/profile"></Link>
          </li>
        </ul>
      </nav>
    );
  }
  