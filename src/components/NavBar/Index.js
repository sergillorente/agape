import React from 'react';
import { Link } from 'react-router-dom';

import ConocenosDropdown from './ConocenosDropdown';

const NavBar = () => {
    return (
        <div className=''>
            <img src='/images/logo.png' alt="Logo" className='max-w-xs max-h-4' />
            <div className=''>
                <ul>
                    <li>
                        <Link to="/">
                            <p>Conócenos</p>
                        </Link>
                        <ConocenosDropdown />
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
                            <button>Donar</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;