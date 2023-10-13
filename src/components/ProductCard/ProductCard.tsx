"use client"
import React from 'react';
import Button from "@/components/Utilities/Button";
import ColoredLine from "@/components/Utilities/ColoredLine";

const ProductCard = ({image, name, description}: { image: string, name: string, description: string }) => {
    return (
        <div className={`card-scaled-up`}>
            <div className={`flex rounded-md justify-center items-center p-3 drop-shadow-md h-1/2`}>
                <img src={image} alt={`product`} className={`w-full h-full`}/>
            </div>
            <div className={`shadow-xl p-5`}>
                <h3 className={`font-bold text-lg`}>{name}</h3>
                <ColoredLine className={`mr-10 bg-gray-100`}/>
                <p className={`text-justify`}>
                    {description}
                </p>
                <div className={`flex justify-start items-center`}>
                    <Button
                        className={`my-3 bg-primary p-2 text-white hover:bg-white hover:text-primary hover:border-primary`}>
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;