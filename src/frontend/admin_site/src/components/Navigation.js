import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EKKE SportApp Admin</Link>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/events">Események</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
