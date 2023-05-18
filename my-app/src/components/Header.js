import logo from '../assets/LOGO.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="kasa" className="kasa-logo" />
            <nav>
                <Link to="/" className="link">
                    Accueil
                </Link>
                <Link to="/apropos" className="link">
                    A propos
                </Link>
            </nav>
        </div>
    );
}

export default Header;
