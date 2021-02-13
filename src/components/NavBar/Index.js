import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ConocenosDropdown from './ConocenosDropdown';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

    return (
            <div className="bg-gray-900">
                <div className="flex items-center justify-between px-4 py-4">
                    <div>
                        <img className="h-8" src="/images/white-logo.png" alt="Logo" />
                    </div>
                    <div>
                        <button onClick={toggleBurger} type="button" className=" block text-gray-400 hover:text-white focus:text-white focus:outline-none">
                           {!isBurgerOpen 
                           ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>}
                        </button>
                    </div>
                </div>
                <ul className={`text-gray-400 uppercase flex flex-col justify-center items-center py-4 container ${isBurgerOpen ? 'block' : 'hidden'}`}>
                    <li className="mt-2 hover:text-green-500">
                        <Link to="/" >
                            <p onClick={toggle}>Conócenos</p>
                        </Link>
                        <div className={isOpen ? 'block' : 'hidden'}>
                            <ConocenosDropdown toggle={toggle} />
                        </div>
                    </li>
                    <li className="mt-2 hover:text-green-500">
                        <Link to="/">
                            <p>Participa</p>
                        </Link>
                    </li>
                    <li className="mt-2 hover:text-green-500">
                        <Link to="/">
                            <p>Recursos</p>
                        </Link>

                    </li>
                    <li className="mt-2">
                        <Link to="/">
                            <button className="uppercase rounded-3xl text-black bg-gray-300 cursor-pointer border-transparent hover:bg-yellow-400 pt-1 pr-4 pl-4 pb-1">Donar</button>
                        </Link>
                    </li>
                </ul>
            </div>
    )
};

export default NavBar;

