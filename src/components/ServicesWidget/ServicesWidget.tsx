"use client"
import React from 'react';
import CarouselContainer from "@/components/Utilities/Carousel/CarouselContainer";
import CarouselItem from "@/components/Utilities/Carousel/CarouselItem";
import ColoredLine from "@/components/Utilities/ColoredLine";
import Button from "@/components/Utilities/Button";

const ServicesWidget = () => {
    return (
        <div className={`h-full w-full my-10`}>
            <div className={`flex flex-col justify-center items-center`}>
                <h1 className={`text-center font-bold text-primary text-2xl`}>Take A look On Som Of Our Services</h1>
                <ColoredLine className={`w-1/4 bg-third`}/>
            </div>
            <div className={`my-5`}>
                <CarouselContainer>
                    <CarouselItem>
                        <div className={`card flex flex-col mx-52 p-10 max-h-[280px]`}>
                            <h2 className={`text-center font-bold text-xl`}>Service Heading</h2>
                            <p className={`text-justify w-full`}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p>
                            <Button
                                className={`self-center my-3 bg-primary p-2 text-white hover:bg-white hover:text-primary hover:border-primary`}>
                                Learn More
                            </Button>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className={`card flex flex-col mx-52 p-10 max-h-[280px]`}>
                            <h2 className={`text-center font-bold text-xl`}>Service Heading</h2>
                            <p className={`text-justify`}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p>
                            <Button
                                className={`self-center my-3 bg-primary p-2 text-white hover:bg-white hover:text-primary hover:border-primary`}>
                                Learn More
                            </Button>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className={`card flex flex-col mx-52 p-10 max-h-[280px]`}>
                            <h2 className={`text-center font-bold text-xl`}>Service Heading</h2>
                            <p className={`text-justify`}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p>
                            <Button
                                className={`self-center my-3 bg-primary p-2 text-white hover:bg-white hover:text-primary hover:border-primary`}>
                                Learn More
                            </Button>
                        </div>
                    </CarouselItem>
                </CarouselContainer>
            </div>
        </div>
    );
};

export default ServicesWidget;