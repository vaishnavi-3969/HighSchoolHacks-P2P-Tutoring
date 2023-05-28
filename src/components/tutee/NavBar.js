import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <Link to="/tutees">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/all_sessions">
                        All Sessions
                    </Link>
                </li>
                <li>
                    <Link to="/upcoming_sessions">
                        Upcoming Sessions
                    </Link>
                </li>
                <li>
                    <Link to="/tutee_notifications">
                        Notifications
                    </Link>
                </li>
                <li>
                    <Link to="/tutee_messages">
                        Messages
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
