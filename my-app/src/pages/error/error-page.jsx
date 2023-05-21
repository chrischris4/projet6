import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../../styles/Error.css';

function ErrorPage() {
    return (
        <div>
            <div id="errormain">
                <h2 className="error404">404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <nav className="naverror">
                    <Link to="/" className="errorLink">
                        Retournez sur la page d'accueil
                    </Link>
                </nav>
            </div>
            <Footer />
        </div>
    );
}

export default ErrorPage;
