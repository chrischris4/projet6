// import '../styles/Cart.css';

// function Cart() {
//     return (
//         <div className="kasa-cart">
//             <h2>la vida loca</h2>
//         </div>
//     );
// }

// export default Cart;

import { useParams } from 'react-router-dom';
import '../styles/Cart.css';
import { useEffect, useState } from 'react';

function Cart() {
    const { title } = useParams();
    const [data] = useState({});

    useEffect(() => {
        fetch(`/logements.json`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="kasa-cart">
            <h2 className="cartTitle">{title}</h2>
        </div>
    );
}

export default Cart;
