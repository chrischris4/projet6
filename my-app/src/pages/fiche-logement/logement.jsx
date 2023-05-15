import '../../styles/logementMainDiv.css'
import Collapse from '../../components/Collapse';
import Logement from '../../components/Logement'
import Tag from '../../components/Tag'

function App() {
    return  <div className='logementMainDiv'>
                <Logement />
                <h1>nom du logement</h1>
                <h2>lieu</h2>
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
}

export default App;