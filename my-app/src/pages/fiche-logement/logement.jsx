import '../../styles/logementMainDiv.css';
import Collapse from '../../components/Collapse';
import Logement from '../../components/Logement';
import Tag from '../../components/Tag';
import Footer from '../../components/Footer';
import portrait from '../../assets/Star.png';

function App() {
    return (
        <div className="logementMainDiv">
            <div className="containerLogement">
                <Logement />
                <div className="allInfo">
                    <div className="infoTag">
                        <div className="nomLieu">
                            <h1>nom du logement</h1>
                            <h2>lieu</h2>
                        </div>
                        <div className="tagLogement">
                            <Tag />
                            <Tag />
                            <Tag />
                        </div>
                    </div>
                    <div className="nomImgNote">
                        <div className="nomImg">
                            <p>John</p>
                            <img
                                src={portrait}
                                alt=""
                                className="imgPortrait"
                            />
                        </div>
                        <div className="note">
                            <img src={portrait} alt="" />
                            <img src={portrait} alt="" />
                            <img src={portrait} alt="" />
                            <img src={portrait} alt="" />
                            <img src={portrait} alt="" />
                        </div>
                    </div>
                </div>
                <div className="collapseLogement">
                    <Collapse />
                    <Collapse />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
