import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ title, cover }) {
    const cartStyle = {
        backgroundImage: `url(${cover})`,
    };

    return (
        <Link to="/logement" className="cart-link">
            <div className="cart-item" style={cartStyle}>
                <h2 className="cartTitle">{title}</h2>
            </div>
        </Link>
    );
}

function CartList() {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch(`/logements.json`)
            .then((response) => response.json())
            .then((cartData) => {
                setCartData(cartData);
            })
            .catch((error) => console.log(error));
    }, []);

    if (cartData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="kasa-cart">
            {cartData.map((item, index) => (
                <Cart key={index} title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default CartList;
