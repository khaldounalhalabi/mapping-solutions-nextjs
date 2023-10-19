"use client"
import React from 'react';
import CarouselContainer from "@/components/Utilities/Carousel/CarouselContainer";
import CarouselItem from "@/components/Utilities/Carousel/CarouselItem";
import Image from 'next/image';

const HeroCarousel = () => {
    return (
        <div className="w-full h-full">
            <CarouselContainer>
                <CarouselItem>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image width={500} height={500} src="/images/1.jpg" className={`w-full h-full`} alt={`data`}/>
                </CarouselItem>

                <CarouselItem>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image width={500} height={500} src="/images/6.jpg" className={`w-full h-full`} alt={`data`}/>
                </CarouselItem>

                <CarouselItem>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image width={500} height={500} src="/images/7.jpg" className={`w-full h-full`} alt={`data`}/>
                </CarouselItem>
            </CarouselContainer>
        </div>
    )
}

export default HeroCarousel;