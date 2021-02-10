import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import { SecondCarouselData } from './SecondCarouselData';
import './SecondCarousel.css';

const SecondCarousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <section className="slider">
            <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
            <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
            {SecondCarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="Gathering image" className="image" />
                        )};
                    </div>
                )
            })};
        </section>
    );
};

export default SecondCarousel;