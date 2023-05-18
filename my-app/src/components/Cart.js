import '../styles/Cart.css';

function Cart() {
    return (
        <div className="kasa-cart">
            <h2>la vida loca</h2>
        </div>
    );
}

export default Cart;

// import { useParams } from 'react-router-dom';
// import '../styles/Cart.css';
// import { useEffect, useState } from 'react';

// function Cart() {
//     const { title } = useParams();
//     const [demdem, setDemdem] = useState({});
//     const

//     useEffect(() => {
//         fetch(`/logements.json`)
//             .then((response) => response.json())
//             .then((response) => console.log(response, 1111))
//             .catch((error) => console.log(error));
//     }, []);
//     console.log(demdem, 22222222);
//     return (
//         <div className="kasa-cart">
//             <h2 className="cartTitle">{title}</h2>
//         </div>
//     );
// }

// export default Cart;

// import { useParams } from 'react-router-dom';
// import '../styles/Cart.css';
// import { useEffect, useState } from 'react';

// function Survey() {
//     const title = useParams();
//     const [surveyData, setSurveyData] = useState({});

//     useEffect(() => {
//         fetch(`/logements.json`)
//             .then((response) => response.json())
//             .then((surveyData) => setSurveyData(surveyData))
//             .catch((error) => console.log(error));
//     }, []);
//     console.log(surveyData);
//     return (
//         <div>
//             <h2>{surveyData[0].title}</h2>
//         </div>
//     );
// }

// export default Survey;
