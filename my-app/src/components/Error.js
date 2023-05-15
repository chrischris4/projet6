import '../styles/Error.css'
import { Link } from 'react-router-dom'



function Error() {
    const title = '404'
    return (
        <div id='errormain'>
            <h2 className="error404">{title}</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <nav className='naverror'>
                    <Link to="/" className='errorLink'>Retournez sur la page d'accueil</Link>
                </nav>
        </div>
    )
}

export default Error