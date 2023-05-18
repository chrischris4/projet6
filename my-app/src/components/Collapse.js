import vector from '../assets/Vector.png';
import vectorDown from '../assets/VectorDown.png';

import React, { useState } from 'react';
import '../styles/Collapse.css';

function Collapse() {
    const [isOpen, setIsOpen] = useState(false);

    const collapseOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mainCollapse">
            <h2 className="titreCollapse">
                lalalala
                <button onClick={collapseOpen}>
                    {isOpen ? (
                        <img src={vector} alt="vector" className="vector" />
                    ) : (
                        <img
                            src={vectorDown}
                            alt="vectorDown"
                            className="vectorDown"
                        />
                    )}
                </button>
            </h2>
            {isOpen && <div className="collapseOpen">Contenu du composant</div>}
        </div>
    );
}

export default Collapse;
