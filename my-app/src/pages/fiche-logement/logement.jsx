import '../../styles/logementMainDiv.css'
import Collapse from '../../components/Collapse';
import Logement from '../../components/Logement'
import Tag from '../../components/Tag'
import Footer from '../../components/Footer';


function App() {
    return  <div className='logementMainDiv'>
                <div className='containerLogement'>
                    <Logement />
                        <div className='nomLieu'>
                            <h1>nom du logement</h1>
                                <h2>lieu</h2>
                        </div>
                        <div className='tagLogement'>
                            <Tag />
                            <Tag />
                            <Tag />
                        </div>
                        <div className='collapseLogement'>
                            <Collapse />
                            <Collapse />
                        </div>
                </div>
                <Footer />
            </div>
}

export default App;