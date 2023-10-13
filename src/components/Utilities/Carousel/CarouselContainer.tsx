"use client"
import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import './carousel.css';

const CarouselContainer = ({children}: { children: any }) => {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {children}
            </div>
        </div>
    )
};

export default CarouselContainer;