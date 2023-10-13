"use client"
import React from 'react';
import CarouselContainer from "@/components/Utilities/Carousel/CarouselContainer";
import CarouselItem from "@/components/Utilities/Carousel/CarouselItem";
import ColoredLine from "@/components/Utilities/ColoredLine";

const ServicesWidget = () => {
    return (
        <div className={`w-full my-10`}>
            <div className={`flex flex-col justify-center items-center`}>
                <h1 className={`text-center font-bold text-primary text-2xl`}>Take A look On Som Of Our Services</h1>
                <ColoredLine className={`w-1/4 bg-third`}/>
            </div>
            <div className={`my-5`}>
                <CarouselContainer>
                    <CarouselItem>
                        <div className={`card flex flex-col mx-52 p-10`}>
                            <h2 className={`text-center font-bold text-xl`}>Service Heading</h2>
                            <p>
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto
                            </p>
                        </div>
                    </CarouselItem>
                </CarouselContainer>
            </div>
        </div>
    );
};

export default ServicesWidget;