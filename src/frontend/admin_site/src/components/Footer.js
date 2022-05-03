import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">Kezdőlap</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/Ryvenay/AFP2_ARCSITO" target="_blank" rel="noreferrer" className="nav-link px-2 text-muted">GitHub</a>
                    </li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 arcsito</p>
            </footer>
        </div>
    )
}

export default Footer