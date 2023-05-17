import '../styles/Cart.css';

function Cart() {
    return (
        <div className="kasa-cart">
            <h2>la vida loca</h2>
        </div>
    );
}

export default Cart;

// import '../styles/Cart.css';
// import React, { useEffect, useState } from 'react';

// function Cart() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch(`http://localhost:3000/data/logements.json`).then((response) =>
//             response
//                 .json()
//                 .then(({ data }) => setData(data))
//                 .catch((error) => console.log(error))
//         );
//     }, []);

//     if (!data) {
//         return <div>Loading...</div>;
//     }

//     const title = data[0].title;

//     return (
//         <div className="kasa-cart">
//             <h2>{title}</h2>
//         </div>
//     );
// }

// export default Cart;
