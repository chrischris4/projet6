import vector from '../assets/Vector.png';
import vectorDown from '../assets/VectorDown.png';
import React, { useState } from 'react';
import '../styles/Collapselong.css';

function Collapselong() {
    const [isOpen, setIsOpen] = useState(false);

    const collapseOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mainCollapselong">
            <div className="titreCollapseLong">
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
            </div>
            {isOpen && (
                <div className="collapseOpenlong">Contenu du composant</div>
            )}
        </div>
    );
}

export default Collapselong;
