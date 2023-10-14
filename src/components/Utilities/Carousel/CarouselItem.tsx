"use client"
import React from 'react';
import './carousel.css';

const CarouselItem = ({children}: { children: any }) => {
    return (
        <div className="embla__slide cursor-grab">
            {children}
        </div>
    );
};

export default CarouselItem;