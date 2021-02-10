import React from 'react';

import Conocenos from './Conocenos';

const NavBar = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                <div>
                    <h3>CONÓCENOS</h3>
                    <Conocenos />
                </div>
                <h3>
                    PARTICIPA
                </h3>
                <h3>
                    RECURSOS
                </h3>
                <button>
                    DONAR
                </button>
            </div>
        </div>
    )
};

export default NavBar;