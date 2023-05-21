import React from 'react';
import '../styles/TitleSelected.css';

function TitleSelected({ selectedTitle }) {
    console.log(selectedTitle);
    return (
        <div className="ts">
            <h1>{selectedTitle}</h1>
        </div>
    );
}

export default TitleSelected;
