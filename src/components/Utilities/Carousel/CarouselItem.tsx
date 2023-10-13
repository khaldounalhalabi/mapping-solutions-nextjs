"use client"
import React from 'react';
import './carousel.css';

const CarouselItem = ({children}: { children: any }) => {
    return (
        <div className="embla__container">
            {children}
        </div>
    );
};

export default CarouselItem;