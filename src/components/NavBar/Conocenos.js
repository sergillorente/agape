import React from 'react';
import { Link } from 'react-router-dom';

const Conocenos = () => {
    return (
        <div> {/* I want to add the Link property for each <h4> */}
            <ul>
                <li>
                    <h4>VISIÓN & MISIÓN</h4>
                </li>
                <li>
                    <h4>STAFF</h4>
                </li>
                <li>
                    <h4>ENFOQUES</h4>
                </li>
                <li>
                    <h4>HISTORIAS DE ÁGAPE</h4>
                </li>
                <li>
                    <h4>HISTORIA</h4>
                </li>
                <li>
                    <h4>ÁGAPE INTERNACIONAL</h4>
                </li>
            </ul>
        </div>
    );
};

export default Conocenos;