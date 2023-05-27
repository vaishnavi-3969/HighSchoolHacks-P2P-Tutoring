import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import Font, { Text } from 'react-font';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="logo-text">
          Peer Tutoring Network
        </h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tutor">Tutor</Link>
        </li>
        <li>
          <Link to="/tutee">Tutee</Link>
        </li>
      </ul>
    </nav>
  );
}
