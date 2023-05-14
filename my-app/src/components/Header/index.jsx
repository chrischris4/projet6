import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/error">Error</Link>
        </nav>
    )
}

export default Header