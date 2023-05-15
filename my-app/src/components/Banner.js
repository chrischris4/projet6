import logo from '../assets/LOGO.png'
import '../styles/Banner.css'
import { Link } from 'react-router-dom'


function Banner() {
    return (
        <div className="banner">
            <img src={logo} alt='kasa' className='kasa-logo'/>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/apropos">A propos</Link>
                    <Link to="/logement">Logement</Link>
                </nav>
        </div>
    )
}

export default Banner