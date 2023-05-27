import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import Font, { Text } from 'react-font';
import { FaHome, FaUserGraduate, FaUserCircle } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="logo-text">Peer Tutoring Network</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/tutor">
            <FaUserGraduate className="nav-icon" />
            Tutor
          </Link>
        </li>
        <li>
          <Link to="/tutee">
            <FaUserGraduate className="nav-icon" />
            Tutee
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUserCircle className="nav-icon" />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
