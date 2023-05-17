import vector from '../assets/Vector.png';
import vectorDown from '../assets/VectorDown.png';

import React, { useState } from 'react';
import '../styles/CollapseDevice.css';

function CollapseDevice() {
    const [isOpen, setIsOpen] = useState(false);

    const collapseDeviceOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mainCollapseDevice">
            <h2 className="h2c">
                lalalala
                <button onClick={collapseDeviceOpen}>
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
            {isOpen && (
                <div className="collapseDeviceOpen">Contenu du composant</div>
            )}
        </div>
    );
}

export default CollapseDevice;
