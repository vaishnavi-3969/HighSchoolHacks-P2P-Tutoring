import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/previous_sessions">
                        Previous Sessions
                    </Link>
                </li>
                <li>
                    <Link to="/create_session">
                        Create a Session
                    </Link>
                </li>
                <li>
                    <Link to="/tutor_notifications">
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link to="/tutor_messages">
                        Messages
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
