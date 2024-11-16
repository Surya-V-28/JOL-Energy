import React from 'react';

import partner1 from '../images/clients/50-yrs-logo.jpg';
import partner2 from '../images/clients/DSTNidhi.png';
import partner3 from '../images/clients/MeitYStartUp.png';
import partner4 from '../images/clients/VIT.png';
import partner5 from '../images/clients/innovactionConcil.png';
import partner6 from '../images/clients/ministry.png';

const partnerContainerStyle = {
    height: '4rem',
    width: '90%',
    borderRadius: '0.75rem',
    overflow: 'hidden',
};

const Partners = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Our Partners</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-[#fdcb0a]"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black">
                        We are proud to collaborate with these amazing partners.
                    </h2>
                </div>
                <div className="overflow-x-auto whitespace-nowrap p-8" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex space-x-8" style={{ minWidth: '1200px' }}>
                        {[partner1, partner2, partner3, partner4, partner5, partner6].map((partner, index) => (
                            <div
                                key={index}
                                style={partnerContainerStyle}
                                className="flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
                            >
                                <img
                                    src={partner}
                                    alt={`Partner ${index + 1} - Description`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
