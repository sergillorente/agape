import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import { SecondCarouselData } from './SecondCarouselData';

const SecondCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;



    return (
        <section className="slider">
            <AiOutlineArrowLeft className="left-arrow" />
            <AiOutlineArrowRight className="right-arrow" />
            {SecondCarouselData.map((slide, index) => {
                return (
                    <img src={slide.image} alt="Gathering image" />
                )
            })};
        </section>
    );
};

export default SecondCarousel;