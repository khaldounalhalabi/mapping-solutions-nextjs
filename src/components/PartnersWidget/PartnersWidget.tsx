import React from 'react';
import Link from "next/link";
import ColoredLine from "@/components/Utilities/ColoredLine";
import Image from 'next/image';

const PartnersWidget = () => {
    return (
        <>
            <div className={`flex flex-col justify-center items-center my-10`}>
                <h1 className={`text-center font-bold text-primary text-2xl`}>Our Beloved Partners</h1>
                <ColoredLine className={`w-1/4 bg-third`}/>
            </div>
            <div className={`flex px-20`}>
                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl `}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/rese.png`} alt={'partner'} className={`h-full`}/>

                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl `}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/riegl.png`} alt={'partner'} className={`h-full`}/>

                        </div>
                    </div>
                </Link>

                {/* <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/Spectral Evolution.png`} alt={'partner'} className={`h-full`}/>
                        </div>
                    </div>
                </Link> */}

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/telops.png`} alt={'partner'} className={`h-full`}/>
                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/ultracam.png`} alt={'partner'} className={`h-full`}/>
                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/Phaseone.png`} alt={'partner'} className={`h-full`}/>
                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/oceanoptics.png`} alt={'partn className=`h-fuller'}/>
                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/agilent.png`} alt={'partner'}/>
                        </div>
                    </div>
                </Link>

                <Link href={`#`} className={`slide-top h-full w-full`}>
                    <div className={`card py-10 px-5 rounded-lg h-full shadow-2xl`}>
                        <div className={`w-full h-full`}>
                            <Image width={500} height={500} src={`/images/hyspex.png`} alt={'partner'} className={`h-full`}/>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default PartnersWidget;