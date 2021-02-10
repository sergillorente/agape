import React from 'react';

import Conocenos from './Conocenos';

const NavBar = () => {
    return (
        <div> {/* Añadir animación o bien sólo onClick() o con hover para que se despleguen las opciones */}
            <img src='/images/Agape.Sample.png' alt="Logo" /> 
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