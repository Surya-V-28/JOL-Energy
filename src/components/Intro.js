import React from "react";
import { Link } from "react-router-dom";
import img from "../images/Batteries.jpg"; // Update with an image relevant to your NGO
import teamMember1 from "../images/Akella_Shivaramkrishnan_pic.png"; // Add actual images
import teamMember2 from "../images/Shri_Vishaal.png";
import teamMember3 from "../images/Varun_Suresh.PNG";
import teamMember4 from "../images/Dharaneesh.jpeg";

const Intro = () => {
  return (
    <>
      <div
        className="relative w-full min-h-screen p-2 md:p-12 bg-gray-200"
        id="about"
      >
        <svg
          className="absolute inset-0 z-0"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,0 C600,200 800,100 1200,300 L1200,600 L0,600 Z"
            opacity="0.5"
          />
          <path
            fill="white"
            d="M0,300 C400,500 800,300 1200,500 L1200,600 L0,600 Z"
            opacity="0.3"
          />
        </svg>

        <div className="relative z-10">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <img
                alt="Introduction_image"
                className="rounded-lg shadow-lg  transform duration-300  max-w-xl transition-transform border-4 border-[#fdcb0a]  hover:scale-105"
                src={img}
              />
            </div>
            <div
              className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h3 className="text-2xl text-black font-bold border-b-4 border-[#fdcb0a] pb-2">
              Leading the Way in Responsible E-Waste Management
              </h3>

              <div>
                <p className="my-3 text-xl text-gray-700 font-semibold">
                Innovative Battery Recycling Solutions
                At jol energy, we specialize in ethical battery recycling and offer a range of services 
                to minimize environmental impact. Our focus is on recovering valuable components and reintroducing them into the circular economy.

                </p>
              </div>
              <div>
                <p className="my-3 text-xl text-gray-700 font-semibold">
                Cost-Effective Source of Used Electronics
                Explore our comprehensive suite of services designed to meet all your e-waste needs,
                 from battery recycling to supplying used Lithium ion, 
                Lead Acid battery scraps ,electronics and gadgets. 
                Join us in our mission to promote sustainability and resource recovery.
                </p>
              </div>
              <Link
                to="/get-involved"
                className="text-black bg-[#fdcb0a] hover:bg-[#bf9a09]  inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group transition-transform transform hover:scale-105 duration-300"
              >
                Join Team
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Team Members Section */}
          <div
            className="my-8 p-8 bg-white shadow-xl rounded-xl"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-black font-bold mb-4">
              Our Team Members
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <img
                  alt="Dr. Akella_Shivaramkrishnan_pic.png"
                  className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
                  src={teamMember1}
                />
                <h3 className="mt-4 text-2xl text-black font-semibold">
                  Dr. Akella Shivaramkrishnan
                </h3>
                <p className="text-md text-gray-600 font-bold">
                  Senior Grade Professor - Chemistry School of Advance Science,
                  VIT
                </p>
                <p className="text-md text-gray-500 mt-2">
                  With 14 years of experience, Dr. Akella has authored over 160
                  published papers and leads 20+ research scholars in JOL
                  Energy's R&D Team.
                </p>
              </div>
              <div className="text-center">
                <img
                  alt="Shrivishaal"
                  className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
                  src={teamMember2}
                />
                <h3 className="mt-4 text-2xl text-black font-semibold">
                  Shrivishaal
                </h3>
                <p className="text-md font-bold text-gray-600">
                  Chief Executive Officer
                </p>
                <p className="text-md text-gray-500 mt-2">
                  As a B.Tech ECE graduate, Shrivishaal leads JOL Electric - SAE
                  EV Team and excels in battery technology, winning the Nidhi
                  Prayas Award.
                </p>
              </div>
              <div className="text-center">
                <img
                  alt="Varun Suresh"
                  className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
                  src={teamMember3}
                />
                <h3 className="mt-4 text-2xl text-black font-semibold">
                  
                Varun Suresh
                </h3> 
                <p className="text-md font-bold text-gray-600">
                  Chief Operational Officer
                </p>
                <p className="text-md text-gray-500 mt-2">
                With expertise in operations management, Varun oversees business operations, 
                manages and builds strategic partnerships to drive efficiency and sustainable growth.
                </p>
              </div>
              <div className="text-center">
                <img
                  alt="Dharaneesh"
                  className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300"
                  src={teamMember4}
                />
                <h3 className="mt-4 text-2xl text-black font-semibold">
                  Dharaneesh
                </h3>
                <p className="text-md font-bold text-gray-600">B.Tech ECE</p>
                <p className="text-md text-gray-500 mt-2">
                  With expertise in ECE, Dharaneesh manages supply chains,
                  builds partnerships, and oversees operations to ensure smooth
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
