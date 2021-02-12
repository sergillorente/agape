import React from 'react';

import FirstCarousel from './FirstCarousel';
import { FirstCarouselData } from './FirstCarouselData';

const Meeting = () => {
    return (
        <div>
            <div>
                <FirstCarousel slides={FirstCarouselData} />
                <div>
                    <h2>
                        Personas · Compromiso · Misión
                    </h2>
                    <p>
                        Acompañanos en la mejor de las aventuras
                    </p>
                </div>
            </div>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    AUTOR DE LA CITA
                </p>
            </div>
        </div>
    );
};

export default Meeting;