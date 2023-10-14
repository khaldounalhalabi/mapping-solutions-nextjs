"use client"
import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import './carousel.css';
import Autoplay from "embla-carousel-autoplay";

const CarouselContainer = ({children}: { children: any }) => {

    const [emblaRef] = useEmblaCarousel({
        loop: true
    }, [Autoplay({
        stopOnInteraction: false
    })]);
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {children}
            </div>
        </div>
    )
};

export default CarouselContainer;