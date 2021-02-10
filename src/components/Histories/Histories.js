import React from 'react';
import { Link } from 'react-router-dom';

import SecondCarousel from './SecondCarousel';
import { SecondCarouselData } from './SecondCarouselData';

const Histories = () => {
    return (
        <div>
            <div>
                <p>
                    HISTORIAS DE ÁGAPE
                </p>
                <h4>Historias de personas que fueron transformadas</h4>
            </div>
            <div>
                {/* <Link to =""> */}
                    <p>Ver todas las historias</p>
                {/* </Link to=""> */}
            </div>
            <SecondCarousel slides={SecondCarouselData} />
        </div>
    );
};

export default Histories;