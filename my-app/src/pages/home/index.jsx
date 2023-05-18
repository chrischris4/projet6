import '../../styles/index.css';
import Cart from '../../components/Cart';
import Ban from '../../components/Ban';
import Footer from '../../components/Footer';

function App() {
    return (
        <div className="indexMain">
            <Ban />
            <div className="gallery">
                <Cart />
            </div>
            <Footer />
        </div>
    );
}

export default App;
