import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero" style={{ backgroundColor: "#0D141A" }}>
        <div style={{ backgroundColor: "#FFFFF" }}>
          <NavBar />
        </div>
        <div
          className="m-auto overflow-hidden mx-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left"
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                E-Waste Management
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-white">
                Minimize environmental impact and maximize resource recovery
                with our comprehensive suite of services.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/get-involved"
                  className="text-black bg-[#fdcb0a] hover:bg-[#bf9a09] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Get Involved
                  <svg
                    className="w-4 h-4 ml-1"
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
                <HashLink
                  smooth
                  to="/#projects-all"
                  className="text-black bg-[#fdcb0a] hover:bg-[#bf9a09] inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Join Events
                  <svg
                    className="w-4 h-4 ml-1"
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
                </HashLink>
              </div>
            </div>
            <div
              className="flex lg:justify-end w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/SELiGZY-Dik?si=QuGKR4qJlvR6zvYR"
                  title="Career Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-4 border-[#fdcb0a] rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
