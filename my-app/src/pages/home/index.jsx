import '../../styles/index.css'
import Cart from '../../components/Cart'
import Ban from '../../components/Ban'

function App() {
    return  <div className='indexMain'>
              <Ban />
                <div className='gallery'>
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
                  <Cart />
                </div>
            </div>
}

export default App;

