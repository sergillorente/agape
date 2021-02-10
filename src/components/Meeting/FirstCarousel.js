import React, { useState } from 'react';

import { FirstCarouselData } from './FirstCarouselData';

const FirstCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;



    return (
        <>
            {FirstCarouselData.map((slide, index) => {
                return (
                    <img src={slide.image} alt="Gathering image" />
                )
            })};
        </>
    );
};

export default FirstCarousel;