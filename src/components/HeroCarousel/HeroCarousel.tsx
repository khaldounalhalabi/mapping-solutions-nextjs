"use client"
import React from 'react';
import useEmblaCarousel from "embla-carousel-react";
import './carousel.css';

const HeroCarousel = () => {
    const [emblaRef] = useEmblaCarousel();
    return (
        <div className="w-full h-full">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/1.jpg" className={`w-full h-full`} alt={`data`}/>
                    </div>

                    <div className="embla__slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/6.jpg" className={`w-full h-full`} alt={`data`}/>
                    </div>

                    <div className="embla__slide">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/7.jpg" className={`w-full h-full`} alt={`data`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel;