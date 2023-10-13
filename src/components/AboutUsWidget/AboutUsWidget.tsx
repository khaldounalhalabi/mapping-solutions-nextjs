import React from 'react';

const AboutUsWidget = () => {
    return (
        <div className="p-10 shadow-2xl border border-gray-100 grid grid-cols-12 mx-20 my-5">
            <div className={`col-span-3`}>
                <img src={`/images/logo.png`} alt={`logo`}/>
            </div>

            <div className={`col-span-9 flex justify-center items-center`}>
                <p className={`text-xl`}>
                    Who are we? Specialised in Thermal , Optical hyperspectral cameras, Spectroradiometers, Lidar and
                    airborne survey service provider and GIS solutions. our partners' hadware: Telops thermal HyperCam,
                    HySpex Hyperspectral imaging, Hyperspectral, airborne survey, Spectral Evolution spectroradiometers,
                    Ocean Optics spectrometers, handheld raman.
                </p>
            </div>
        </div>
    );
};

export default AboutUsWidget;