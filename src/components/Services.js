import React from 'react';
import img1 from '../images/Services2.png';  // Replace with actual images
import img2 from '../images/Service3.png';
import img3 from '../images/Service4.png';
import img4 from '../images/Service1.png';

const Services = () => {
    return (
        <div id="Programs" className="bg-[#0d141a] py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-white uppercase font-bold">Our Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-[#fdcb0a]'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-white">
                        Sustainable energy solutions for today’s needs and tomorrow’s future.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        
                        {/* Service 1: Battery Recycling */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-[#fdcb0a] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Battery Recycling" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px] w-full object-cover" src={img1} />
                                <h2 className="font-semibold my-4 text-2xl text-center text-black">Battery Recycling</h2>
                                <p className="text-md font-medium">
                                    Safe and eco-friendly recycling of used batteries, reducing waste and contributing to a circular energy economy.
                                </p>
                            </div>
                        </div>

                        {/* Service 2: Battery Selling */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-[#fdcb0a] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Battery Selling" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px] w-full object-cover" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center text-black">Battery Sales</h2>
                                <p className="text-md font-medium">
                                    Providing a wide range of high-performance batteries for residential, commercial, and industrial use.
                                </p>
                            </div>
                        </div>

                        {/* Service 3: Energy Storage Solutions */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-[#fdcb0a] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Energy Storage Solutions" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px] w-full object-cover" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center text-black">Energy Storage Solutions</h2>
                                <p className="text-md font-medium">
                                    Advanced energy storage systems to maximize the efficiency and reliability of renewable energy sources.
                                </p>
                            </div>
                        </div>

                        {/* Service 4: EV Charging Solutions */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-[#fdcb0a] hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="EV Charging Solutions" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[200px] w-full object-cover" src={img4} />
                                <h2 className="font-semibold my-4 text-2xl text-center text-black">EV Charging Solutions</h2>
                                <p className="text-md font-medium">
                                    Comprehensive EV charging infrastructure for homes, businesses, and public locations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
