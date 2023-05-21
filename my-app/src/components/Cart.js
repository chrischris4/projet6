import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ title, cover, onClick }) {
    const cartStyle = {
        backgroundImage: `url(${cover})`,
    };

    return (
        <Link
            to="/logement"
            className="cart-link"
            onClick={() => onClick(title)}
        >
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
            .catch((erreur) => console.log(erreur));
    }, []);

    const handleCartClick = (title) => {
        console.log(title);
    };

    if (cartData.length === 0) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="kasa-cart">
            {cartData.map((item, index) => (
                <Cart
                    key={index}
                    title={item.title}
                    cover={item.cover}
                    onClick={handleCartClick}
                />
            ))}
        </div>
    );
}

export default CartList;
