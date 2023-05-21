import '../styles/LogementBanner.css';
import imgban from '../assets/Background.png';
import left from '../assets/VectorL.png';
import right from '../assets/VectorR.png';

function Carousel() {
    return (
        <div className="background">
            <img src={left} alt="" className="left" />
            <img src={imgban} alt="" className="logementBanner" />
            <img src={right} alt="" className="right" />
        </div>
    );
}

export default Carousel;
