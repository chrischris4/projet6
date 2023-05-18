import '../styles/LogementBanner.css';
import imgban from '../assets/Background.png';

function Logement() {
    return (
        <div className="background">
            <img src={imgban} alt="" className="logementBanner" />
        </div>
    );
}

export default Logement;
