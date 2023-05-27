import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';
import Font, { Text } from 'react-font';
import { FaHome, FaUserGraduate, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';

export default function NavBar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

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
                    <Link to="/tutors">
                        <FaUserGraduate className="nav-icon" />
                        Tutors
                    </Link>
                </li>
                <li>
                    <Link to="/tutees">
                        <FaUserGraduate className="nav-icon" />
                        Tutees
                    </Link>
                </li>
                <li id='username'>
                    {
                        isAuthenticated &&
                        <p>
                            <li>
                            <Link to="/profile">
                                <FaUserCircle className="nav-icon" />
                                {user.name}
                            </Link>
                        </li>
                        </p>
                    }
                </li>
                {
                    isAuthenticated ? (<>
                        
                        <li>
                            <Button
                                className="login-button animate__animated animate__fadeIn"
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                            >
                                <FaSignOutAlt className="logout-icon" />
                            </Button>
                        </li>

                    </>)
                        :
                        (<li>
                            <Button
                                className="login-button animate__animated animate__fadeIn"
                                onClick={() => loginWithRedirect()}
                            >
                                <FaUserCircle className="login-icon" />
                                Log In
                            </Button>
                        </li>)
                }
            </ul>
        </nav>
    );
}
