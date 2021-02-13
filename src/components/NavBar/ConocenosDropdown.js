import React from 'react';
import { Link } from 'react-router-dom';

const Conocenos = ({ toggle }) => {
    return (
        <div 
        className="flex text-xs"
        onClick={toggle}
        >
            <ul>
                <li>
                    <Link to={null}>
                        <p>Visión & misión</p>
                    </Link>
                </li>
                <li>
                    <Link to={null}>
                        <p>Staff</p>
                    </Link>
                </li>
                <li>
                    <Link to={null}>
                        <p>Enfoques</p>
                    </Link>
                </li>
                <li>
                    <Link to={null}>
                        <p>Historias de Ágape</p>
                    </Link>
                </li>
                <li>
                    <Link to={null}>
                        <p>Historia</p>
                    </Link>
                </li>
                <li>
                    <Link to={null}>
                        <p>Ágape Internacional</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Conocenos;