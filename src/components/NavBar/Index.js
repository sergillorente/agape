import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ConocenosDropdown from './ConocenosDropdown';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='lg md sm flex items-center bg-gray-800 p-3 flex-wrap tracking-wider'>
            <Link to={null}>
                <img src='/images/logo.png' alt="Logo" className=' max-w-xs max-h-10' />
            </Link>
            <div>
                <ul className="text-white font-serif uppercase">
                    <li>
                        <Link to="/">
                            <p onClick={toggle}>Conócenos</p>
                        </Link>
                        <div 
                            className={isOpen ? 'block' : 'hidden'}
                        >
                            <ConocenosDropdown toggle={toggle} />
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <p>Participa</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <p>Recursos</p>
                        </Link>

                    </li>
                    <li>
                        <Link to="/">
                            <button className="uppercase rounded-3xl text-black bg-yellow curos-pointer border-transparent bg-yellow-400 pt-1 pr-4 pl-4 pb-1">Donar</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;