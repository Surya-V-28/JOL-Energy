import React from 'react';

import partner1 from '../images/unicef.jpg';
import partner2 from '../images/save.jpg';
import partner3 from '../images/ford.jpg';

const partnerImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'color-burn',
    borderRadius: '0.75rem',
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

                {/* Horizontal scroll wrapper */}
                <div className="overflow-x-auto whitespace-nowrap p-8" data-aos="fade-in" data-aos-delay="600">
                    {/* Inner container with fixed-width items */}
                    <div className="flex space-x-8" style={{ minWidth: '1200px' }}>

                        <div style={partnerImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={partner3} alt="Partner 3 - Description" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        
                        <div style={partnerImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={partner3} alt="Partner 3 - Description" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
